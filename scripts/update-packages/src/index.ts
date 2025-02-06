import path from "path";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { execa } from "execa";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const lessonsRootDir = path.join(__dirname, "../../../lessons");

/** Paste from 00_example */
const deps = {
  dependencies: {
    react: "^19",
    "react-dom": "^19",
    next: "15.1.6",
  },
  devDependencies: {
    typescript: "^5",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    eslint: "9.19.0",
    "eslint-config-next": "15.1.6",
  },
};

async function main() {
  const lessonDirectories = (
    await fs.readdir(lessonsRootDir, { withFileTypes: true })
  )
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);

  console.log(lessonDirectories);

  const depsCommand = Object.entries(deps.dependencies)
    .map(([name, version]) => `${name}@${version}`)
    .join(" ");
  
  console.log(depsCommand);
  

  for (const lessonDir of lessonDirectories) {
    const lessonDirPath = path.join(lessonsRootDir, lessonDir);
    try {
      console.log(`Updating ${lessonDir}...`);

      await execa("npm", ["install", "-SE", depsCommand], {
        cwd: lessonDirPath,
        stdio: "inherit",
      });
    } catch (error) {
      console.error(`Failed to update ${lessonDir}: ${error}`);
    }
  }
}

main();

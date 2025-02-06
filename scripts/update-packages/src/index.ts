import path from "path";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { execa } from "execa";
import { deps } from "./thingsToUpdate.ts";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const lessonsRootDir = path.join(__dirname, "../../../lessons");

async function getLessonDirectories() {
  const lessonDirectories = (
    await fs.readdir(lessonsRootDir, { withFileTypes: true })
  )
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);
  return lessonDirectories;
}

async function main() {
  const lessonDirectories = await getLessonDirectories();
  console.log(lessonDirectories);

  for (const lessonDir of lessonDirectories) {
    const lessonDirPath = path.join(lessonsRootDir, lessonDir);

    try {
      console.log(`Updating ${lessonDir}...`);

      /**
       * We update the package.json file manually to ensure that things like `^` are preserved
       */
      const lessonPackageJsonPath = path.join(lessonDirPath, "package.json");
      const lessonPackage = JSON.parse(
        await fs.readFile(lessonPackageJsonPath, "utf-8")
      );
      const newlessonPackage = {
        ...lessonPackage,
        dependencies: {
          ...lessonPackage.dependencies,
          ...deps.dependencies,
        },
        devDependencies: {
          ...lessonPackage.devDependencies,
          ...deps.devDependencies,
        },
      };
      await fs.writeFile(
        lessonPackageJsonPath,
        JSON.stringify(newlessonPackage, null, 2) + "\n"
      );

      /**
       * Install the packages
       */
      await execa("npm", ["install"], {
        cwd: lessonDirPath,
        stdio: "inherit",
      });
    } catch (error) {
      console.error(`Failed to update ${lessonDir}: ${error}`);
    }
  }
}

main();

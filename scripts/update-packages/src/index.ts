import path from "path";
import { promises as fs } from "fs";
import { execa } from "execa";
import { deps } from "./thingsToUpdate.ts";
import { lessonsRootDir } from "./utils/lessonsRootDir.ts";

async function getLessonDirectories() {
  const lessonDirectories = (
    await fs.readdir(lessonsRootDir, { withFileTypes: true })
  )
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);
  return lessonDirectories;
}

function getLesssonDirPath(lessonDir: string) {
  return path.join(lessonsRootDir, lessonDir);
}

async function updatePackageJson(lessonDir: string) {
  console.log(
    `
------------------------------
${lessonDir}: Updating Packages...
------------------------------
    `.trim()
  );
  const lessonDirPath = getLesssonDirPath(lessonDir);

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
  console.log("✅ ");
}

async function updateTsconfigJson(lessonDir: string) {
  console.log(
    `
------------------------------
${lessonDir}: Updating tsconfig.json...
------------------------------
    `.trim()
  );

  const example_00_tsconfig = path.join(
    lessonsRootDir,
    "00_example",
    "tsconfig.json"
  );
  const lessonDirPath = getLesssonDirPath(lessonDir);
  const tsconfig = await fs.readFile(example_00_tsconfig, "utf-8");
  await fs.writeFile(path.join(lessonDirPath, "tsconfig.json"), tsconfig);
  console.log("✅ ");
}

async function main() {
  const lessonDirectories = await getLessonDirectories();
  console.log(lessonDirectories);

  for (const lessonDir of lessonDirectories) {
    await updateTsconfigJson(lessonDir);
    await updatePackageJson(lessonDir);

    try {
    } catch (error) {
      console.error(`Failed to update ${lessonDir}: ${error}`);
    }
  }
}

main();

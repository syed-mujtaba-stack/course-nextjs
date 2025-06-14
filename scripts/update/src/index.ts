import path from "path";
import { promises as fs } from "fs";
import { lessonsRootDir } from "./utils/lessonsRootDir.ts";
import { updatePackageJson } from "./utils/updatePackageJson.ts";
import { updateTsconfigJson } from "./utils/updateTsconfigJson.ts";
import { cleanModulesLesson, cleanModulesRoot } from "./utils/cleanModules.ts";
import { npmInstall } from "./utils/npmInstall.ts";
import { updateConfigFiles } from "./utils/updateConfigFiles.ts";

async function getLessonDirectories() {
  const lessonDirectories = (
    await fs.readdir(lessonsRootDir, { withFileTypes: true })
  )
    .filter((dir) => dir.isDirectory())
    .filter((dir) => dir.name !== "00_example")
    .map((dir) => dir.name);
  return lessonDirectories;
}

export function getLesssonDirPath(lessonDir: string) {
  return path.join(lessonsRootDir, lessonDir);
}

async function main() {
  const lessonDirectories = await getLessonDirectories();
  console.log(lessonDirectories);

  await cleanModulesRoot();

  for (const lessonDir of lessonDirectories) {
    await updateTsconfigJson(lessonDir);
    await updatePackageJson(lessonDir);
    await cleanModulesLesson(lessonDir);
    await updateConfigFiles(lessonDir);

    try {
    } catch (error) {
      console.error(`Failed to update ${lessonDir}: ${error}`);
    }
  }

  await npmInstall();
}

main();

import path from "path";
import { promises as fs } from "fs";
import { lessonsRootDir } from "./utils/lessonsRootDir.ts";
import { updatePackageJson } from './utils/updatePackageJson.ts';

async function getLessonDirectories() {
  const lessonDirectories = (
    await fs.readdir(lessonsRootDir, { withFileTypes: true })
  )
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);
  return lessonDirectories;
}

export function getLesssonDirPath(lessonDir: string) {
  return path.join(lessonsRootDir, lessonDir);
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

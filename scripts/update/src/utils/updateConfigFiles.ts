import { promises as fs } from "fs";
import path from "path";
import { getLesssonDirPath } from "../index.ts";
import { logDone, logSection } from "./logSection.ts";
import { example_00 } from "./lessonsRootDir.ts";

async function removeFileIfExists(filePath: string) {
  try {
    await fs.unlink(filePath);
  } catch (err: any) {
    if (err.code !== "ENOENT") throw err;
  }
}

export async function updateConfigFiles(lessonDir: string) {
  logSection(`${lessonDir}: Updating Config Files`);
  const lessonDirPath = getLesssonDirPath(lessonDir);

  // Remove all “.eslintrc.json” files
  const eslintrcPath = path.join(lessonDirPath, ".eslintrc.json");
  await removeFileIfExists(eslintrcPath);

  // Remove all “next.config.mjs” files
  const nextConfigMjsPath = path.join(lessonDirPath, "next.config.mjs");
  await removeFileIfExists(nextConfigMjsPath);

  // Copy “eslint.config.mjs” to “eslint.config.mjs”
  const eslintConfigSource = path.join(example_00, "eslint.config.mjs");
  const eslintConfigDestination = path.join(lessonDirPath, "eslint.config.mjs");
  await fs.copyFile(eslintConfigSource, eslintConfigDestination);

  // Copy “next.config.ts” to “next.config.ts”
  const nextConfigSource = path.join(example_00, "next.config.ts");
  const nextConfigDestination = path.join(lessonDirPath, "next.config.ts");
  await fs.copyFile(nextConfigSource, nextConfigDestination);

  logDone();
}

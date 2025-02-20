import { promises as fs } from "fs";
import path from "path";
import { getLesssonDirPath } from "../index.ts";
import { lessonsRootDir } from "./lessonsRootDir.ts";
import { logDone, logSection } from "./logSection.ts";

export async function updateTsconfigJson(lessonDir: string) {
  logSection(`${lessonDir}: Updating tsconfig.json`);
  const example_00_tsconfig = path.join(
    lessonsRootDir,
    "00_example",
    "tsconfig.json"
  );
  const lessonDirPath = getLesssonDirPath(lessonDir);
  const tsconfig = await fs.readFile(example_00_tsconfig, "utf-8");
  await fs.writeFile(path.join(lessonDirPath, "tsconfig.json"), tsconfig);
  logDone();
}

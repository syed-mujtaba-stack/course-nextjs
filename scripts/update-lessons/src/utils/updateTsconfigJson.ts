import { promises as fs } from "fs";
import path from 'path';
import { getLesssonDirPath } from '../index.ts';
import { lessonsRootDir } from './lessonsRootDir.ts';


export async function updateTsconfigJson(lessonDir: string) {
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

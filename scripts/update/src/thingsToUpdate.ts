import path from "path";
import { promises as fs } from "fs";
import { example_00 } from "./utils/lessonsRootDir.ts";

/**
 * Paste from
 * ../../lessons/00_example/package.json
 * */
export const getDeps = async () => {
  const lessonPackageJsonPath = path.join(example_00, "package.json");
  const lessonPackage = JSON.parse(
    await fs.readFile(lessonPackageJsonPath, "utf-8")
  );
  return {
    dependencies: lessonPackage.dependencies,
    devDependencies: lessonPackage.devDependencies,
  };
};

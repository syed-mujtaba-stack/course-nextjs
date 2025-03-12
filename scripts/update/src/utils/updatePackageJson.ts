import { promises as fs } from "fs";
import path from "path";
import { getLesssonDirPath } from "../index.ts";
import { getDeps } from "../thingsToUpdate.ts";
import { logDone, logSection } from "./logSection.ts";

export async function updatePackageJson(lessonDir: string) {
  logSection(`${lessonDir}: Updating Packages`);
  const deps = await getDeps();
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

  logDone();
}

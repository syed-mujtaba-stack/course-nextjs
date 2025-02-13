import { execa } from 'execa';
import { promises as fs } from "fs";
import path from 'path';
import { getLesssonDirPath } from '../index.ts';
import { deps } from '../thingsToUpdate.ts';

export async function updatePackageJson(lessonDir: string) {
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

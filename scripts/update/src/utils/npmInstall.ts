import { execa } from "execa";
import { rootDir } from "./lessonsRootDir.ts";
import { logDone, logSection } from "./logSection.ts";

export async function npmInstall() {
  logSection("Installing packages");
  /**
   * Install the packages
   */
  await execa("npm", ["install"], {
    cwd: rootDir,
    stdio: "inherit",
  });
  logDone();
}

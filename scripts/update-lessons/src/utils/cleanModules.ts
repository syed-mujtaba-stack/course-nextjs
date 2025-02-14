import { promises as fs } from "fs";
import { rootDir } from "./lessonsRootDir.ts";
import path from "path";
import { logDone, logSection } from "./logSection.ts";

export async function cleanModulesRoot() {
  logSection("Cleaning root node_modules");
  const rootNodeModules = path.resolve(rootDir, "./node_modules");
  try {
    await fs.rm(rootNodeModules, { recursive: true });
  } catch (error: any) {
    console.log('error', error.code);
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      console.log(`Root node_modules not found`);
      console.log(`Path: ${rootNodeModules}`);
    } else {
      throw error;
    }
  }
  logDone();
}

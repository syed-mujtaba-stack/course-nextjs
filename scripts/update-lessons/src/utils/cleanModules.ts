import { promises as fs } from "fs";
import { rootDir } from "./lessonsRootDir.ts";
import path from "path";
import { logDone, logSection } from "./logSection.ts";

async function cleanModules(dir: string) {
  const nodeModules = path.resolve(dir, "./node_modules");
  try {
    await fs.rm(nodeModules, { recursive: true });
  } catch (error: any) {
    console.log('error', error.code);
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      console.log(`node_modules not found`);
      console.log(`Path: ${nodeModules}`);
    } else {
      throw error;
    }
  }
}

export async function cleanModulesRoot() {
  logSection("Cleaning root node_modules");
  await cleanModules(rootDir);
  logDone();
}

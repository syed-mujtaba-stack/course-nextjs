import { promises as fs } from "fs";
import { rootDir } from "./lessonsRootDir.ts";
import path from "path";
import { logDone, logSection } from "./logSection.ts";
import { getLesssonDirPath } from "../index.ts";

async function rm(path: string, silent = false) {
  try {
    await fs.rm(path, { recursive: true });
  } catch (error: any) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      if (!silent) {
        console.log(`Path not found ❌`);
        console.log(`Path: ${path}`);
      }
    } else {
      throw error;
    }
  }
}

async function cleanNodeModules(dir: string, silent: boolean) {
  const nodeModules = path.resolve(dir, "./node_modules");
  await rm(nodeModules, silent);
}

async function cleanPackageLock(dir: string, silent: boolean) {
  const packageLock = path.resolve(dir, "./package-lock.json");
  await rm(packageLock, silent);
}

export async function cleanModulesRoot() {
  logSection("Cleaning root node_modules / package-lock.json");
  await cleanNodeModules(rootDir, false);
  await cleanPackageLock(rootDir, false);
  logDone();
}

export async function cleanModulesLesson(lessonDir: string) {
  logSection(`${lessonDir}: Cleaning node_modules`);
  const lessonDirPath = getLesssonDirPath(lessonDir);
  await cleanNodeModules(lessonDirPath, true);
  logDone();
}

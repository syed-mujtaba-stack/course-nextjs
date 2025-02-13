import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
export const lessonsRootDir = path.join(__dirname, "../../../../lessons"); // relative to current file

export const example_00 = path.join(lessonsRootDir, "00_example");
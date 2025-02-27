/**
 * - replace `-` with ` `
 * - capitalize each word
 */
export function formatName(name: string) {
  return name
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

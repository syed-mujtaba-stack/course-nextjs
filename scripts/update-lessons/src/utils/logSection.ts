export function logSection(message: string) {
  console.log(
    `
------------------------------
${message}...
------------------------------
    `.trim()
  );
}

export function logDone() {
  console.log("✅");
}

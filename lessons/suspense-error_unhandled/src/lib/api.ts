const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchSquareRoot(n: number) {
  console.log("fetchSquareRoot:", n);
  await delay(1000); // simulate slow network
  if (n < 0) {
    throw new Error("Cannot calculate square root of negative numbers");
  }
  const result = Math.sqrt(n);
  return result;
}

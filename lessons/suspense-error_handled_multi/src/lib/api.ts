const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchSquareRoot(n: number) {
  await delay(1000);

  if (n < 0) {
    throw new Error("Cannot calculate square root of negative numbers");
  }

  const result = computeSquareRoot(n);
  return result;
}

function computeSquareRoot(n: number) {
  return Math.sqrt(n);
}

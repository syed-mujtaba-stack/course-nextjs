const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function sqrt(n: number) {
  console.log(":input:", n);
  await delay(1000); // simulate slow network
  return sqrtCore(n);
}

export function sqrtCore(n: number) {
  if (n < 0) {
    throw new Error("Cannot sqrt negative number");
  }
  const result = Math.sqrt(n).toFixed(2);
  return result;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchSqrt(n: number) {
  console.log("sqrt:", n);
  await delay(1000); // simulate slow network
  return sqrtCore(n);
}

function sqrtCore(n: number) {
  const result = Math.sqrt(n);
  return result;
}

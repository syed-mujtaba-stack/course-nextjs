export async function primeFactorAPI(value: number) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return Math.sqrt(value);
}

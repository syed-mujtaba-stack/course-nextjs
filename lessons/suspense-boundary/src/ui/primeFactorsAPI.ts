/**
 * Note: This is a mock API
 * If you can solve this for real
 * You can get a Fields Medal 🌹
 */
export async function primeFactorsAPI(input: number) {
  const factors = [6999999989, 7000000001] as const;
  if (input !== factors[0] * factors[1]) {
    throw new Error("Invalid value");
  }
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return factors;
}

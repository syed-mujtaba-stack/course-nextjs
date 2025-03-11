const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function nextFibonacci(prev: number): Promise<number> {
  /**
   * Computes the next Fibonacci number given the previous one.
   * 
   * @param prev - The (n-1)th Fibonacci number
   * @returns The nth Fibonacci number
   */
  const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
  const next = Math.round(prev * phi);

  await delay(5000); // Simulate network latency

  return next;
}


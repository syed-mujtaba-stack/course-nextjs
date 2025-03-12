const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function sqrt(n: number) {
  console.log('sqrt', n);
  await delay(1000); // simulate slow network
  if (n < 0) {
    throw new Error('Cannot sqrt negative number');
  }
  return Math.sqrt(n).toFixed(2);
}

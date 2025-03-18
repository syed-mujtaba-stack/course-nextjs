"use server";

export async function serverFunction(body: { date: Date }) {
  console.log(body.date instanceof Date, body.date);

  return {
    date: new Date(),
  };
}

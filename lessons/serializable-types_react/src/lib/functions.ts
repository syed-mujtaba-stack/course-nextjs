"use server";

export async function serverFunction(body: { date: Date }) {
  console.log({
    isDate: body.date instanceof Date,
    type: typeof body.date,
    value: body.date,
  });

  return {
    date: new Date(),
  };
}

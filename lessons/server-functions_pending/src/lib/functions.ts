"use server";

import { getDb } from "./db";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getLikes() {
  const db = await getDb();
  return db.data.likes;
}

export async function incrementLikes() {
  await delay(1000);
  const db = await getDb();
  db.data.likes++;
  await db.write();
  return db.data.likes;
}

"use server";

import { getDb } from "./db";

export async function getLikes() {
  const db = await getDb();
  return db.data.likes;
}
export async function incrementLikes() {
  const db = await getDb();
  db.data.likes++;
  await db.write();
  return db.data.likes;
}
export async function resetLikes() {
  const db = await getDb();
  db.data.likes = 0;
  await db.write();
  return db.data.likes;
}

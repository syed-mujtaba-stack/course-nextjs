import { JSONFilePreset } from "lowdb/node";

/**
 * Schema
 */
type DBSchema = {
  likes: number;
};

/** Get DB */
export async function getDb() {
  const db = await JSONFilePreset<DBSchema>("db.json", { likes: 0 });
  return db;
}

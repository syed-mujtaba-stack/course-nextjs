import { getDb } from "@/lib/db";
import { getLikes } from "@/lib/functions";
import { Likes } from "@/lib/Likes";

const decrementLikes = async () => {
  "use server";
  const db = await getDb();
  db.data.likes--;
  await db.write();
  return db.data.likes;
};

export default async function Page() {
  const initial = await getLikes();

  return (
    <div>
      <h1>Likes</h1>
      <Likes initial={initial} decrementLikes={decrementLikes} />
    </div>
  );
}

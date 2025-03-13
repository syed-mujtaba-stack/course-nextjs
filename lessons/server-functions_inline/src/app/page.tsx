import { getDb } from "@/lib/db";
import { getLikes } from "@/lib/functions";
import { Likes } from "@/lib/Likes";

export default async function Page() {
  const initial = await getLikes();

  const decrementLikes = async () => {
    "use server";
    const db = await getDb();
    db.data.likes--;
    await db.write();
    return db.data.likes;
  };

  return (
    <div>
      <h1>Likes</h1>
      <Likes initial={initial} decrementLikes={decrementLikes} />
    </div>
  );
}

import { getLikes } from "@/lib/functions";
import { Likes } from "@/lib/Likes";

export default async function Page() {
  const initial = await getLikes();

  return (
    <div>
      <h1>Likes</h1>
      <Likes initial={initial} />
    </div>
  );
}

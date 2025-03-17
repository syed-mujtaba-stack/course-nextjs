import { Likes } from "@/lib/Likes";
import { initial } from "@/lib/functions";

export default async function Page() {
  const initialServerState = await initial();

  return (
    <div>
      <h1>💃🏻 Like It 🕺🏻</h1>
      <Likes initial={initialServerState} />
    </div>
  );
}

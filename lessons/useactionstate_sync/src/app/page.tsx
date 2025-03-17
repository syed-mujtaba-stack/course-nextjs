import { initial } from "@/lib/functions";
import { Likes } from '@/lib/Likes';

export default async function Page() {
  const initialServerState = await initial();

  return (
    <div>
      <h1>💃🏻 Like It 🕺🏻</h1>
      <Likes initial={initialServerState} />
    </div>
  );
}

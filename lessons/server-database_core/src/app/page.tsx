import { getComments } from "@/lib/db";
import { Commentator } from "@/lib/ui/Commentator";

export default async function Page() {
  const comments = await getComments();

  return <Commentator initial={comments} />;
}

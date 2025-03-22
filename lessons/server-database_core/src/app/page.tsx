import { getTodos } from "@/lib/db";
import { Todos } from "@/lib/ui/Todos";

export default async function Page() {
  const comments = await getTodos();

  return <Todos initial={comments} />;
}

import { getTodos } from "@/lib/db";
import { DisplayTodos } from "@/lib/ui/Components";

export default async function Page() {
  const todos = await getTodos();

  return <DisplayTodos initial={todos} />;
}

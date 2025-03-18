import { Counter } from "@/lib/Counter";
import { Client } from "@/lib/Client";

export default function Page() {
  const counter = new Counter();

  return <Client counter={counter} />;
}

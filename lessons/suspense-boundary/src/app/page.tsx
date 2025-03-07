import { Example } from "@/lib/Example";

export default function Page() {
  return (
    <div className="text-white text-4xl p-4 space-y-4">
      <div>Pick an example 🌹</div>
      <ul className="space-y-4">
        <Example url="/none" title="Without Suspense (you will have a wait a while)" />
        <Example url="/three" title="Three Suspense Boundaries" />
        <Example url="/two" title="Two Suspense Boundaries" />
        <Example url="/one" title="One Suspense Boundary" />
      </ul>
    </div>
  );
}

import { Lorem } from "./lorem";
import localFont from "next/font/local";

const SuperShiny = localFont({
  src: "./fonts/SuperShiny.woff2",
});

export default function Home() {
  return (
    <div className={SuperShiny.className}>
      <Lorem />
    </div>
  );
}

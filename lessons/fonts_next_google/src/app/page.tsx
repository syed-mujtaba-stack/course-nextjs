import { Lorem } from "./lorem";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={roboto.className}>
      <Lorem />
    </div>
  );
}

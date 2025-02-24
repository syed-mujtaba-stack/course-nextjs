import Image from "next/image";

export default function Page() {
  return (
    <div style={{ position: "relative", width: 480, height: 480 }}>
      <Image fill alt="dog" src="/images/dog.png" />
    </div>
  );
}

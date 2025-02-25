import Image from "next/image";

export default function Page() {
  return (
    <Column>
      <div
        style={{
          background: "lightgray",
          position: "relative",
          width: 480,
          height: 240,
        }}
      >
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt="dog"
          src="/images/dog.png"
        />
      </div>
      <div>Nice Doggy</div>
    </Column>
  );
}

const Column = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      {children}
    </div>
  );
};

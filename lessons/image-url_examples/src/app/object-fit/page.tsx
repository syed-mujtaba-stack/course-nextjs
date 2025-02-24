import Image from "next/image";

export default function Page() {
  return (
    <Column>
      <div
        style={{
          position: "relative",
          background: "gray",
          width: 240,
          height: 480,
        }}
      >
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt="dog"
          src="/images/dog.png"
        />
      </div>
      <div>Image of a dog</div>
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

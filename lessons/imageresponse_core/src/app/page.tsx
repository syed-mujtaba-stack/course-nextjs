export default function Page() {
  return (
    <div className="root">
      <div>
        The following <b>Image</b> is generated with <code>ImageResponse</code>
      </div>
      <img
        src="/api"
        alt="image"
        style={{
          width: "300px",
          height: "300px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}

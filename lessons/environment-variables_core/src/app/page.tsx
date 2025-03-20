export default function Page() {
  return (
    <div>
      <h1>Environment Variables</h1>
      <div>
        `DB_URL`: <b>{process.env.DB_URL}</b>
      </div>
    </div>
  );
}

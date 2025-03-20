export default function Page() {
  return (
    <div>
      Hello Fam!
      <p>{process.env.DB_URL}</p>
    </div>
  );
}

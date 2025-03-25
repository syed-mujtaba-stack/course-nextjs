export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      {children}
      <footer>
        © <b>Boolean</b><i>Art</i>
      </footer>
    </div>
  );
}

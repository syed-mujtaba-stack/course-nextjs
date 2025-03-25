import { Nav } from "@/lib/Nav";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Nav />
      {children}
      <footer>
        © <b>Boolean</b> <i>Art</i>
      </footer>
    </div>
  );
}

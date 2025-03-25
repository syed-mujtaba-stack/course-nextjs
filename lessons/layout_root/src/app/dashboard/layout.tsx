import { DashboardMenu } from "@/lib/DashboardMenu";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <DashboardMenu />
      {children}
      <footer>
        © <b>Boolean</b> <i>Art</i>
      </footer>
    </div>
  );
}

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your user settings and preferences",
};

export default function Layout({ children }: React.PropsWithChildren) {
  return children;
}

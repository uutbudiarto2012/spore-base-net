import MainNavbar from "@/components/navbar/main-navbar";
import MobileMenu from "@/components/navbar/mobile-menu";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavbar />
      <main className="pb-16 lg:pb-0">{children}</main>
      <MobileMenu />
    </>
  );
}

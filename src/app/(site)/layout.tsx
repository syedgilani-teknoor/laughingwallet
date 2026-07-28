import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Wraps the public site with the header + footer. The /keystatic admin
// lives outside this group, so it renders without site chrome.
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

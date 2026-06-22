import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import PageWrapper from "@/components/layout/PageWrapper";

export default function PublicLayout({
  children,
}) {
  return (
    <PageWrapper>
      <Navbar />

      {children}

      <Footer />
    </PageWrapper>
  );
}
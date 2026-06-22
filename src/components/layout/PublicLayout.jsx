import PageWrapper from "@/components/layout/PageWrapper";

export default function PublicLayout({
  children,
}) {
  return (
    <PageWrapper>
      {children}
    </PageWrapper>
  );
}
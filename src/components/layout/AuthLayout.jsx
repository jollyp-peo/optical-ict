import PageWrapper from "@/components/layout/PageWrapper";

export default function AuthLayout({
  children,
}) {
  return (
    <PageWrapper>
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          px-4
        "
      >
        {children}
      </div>
    </PageWrapper>
  );
}
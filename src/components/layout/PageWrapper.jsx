export default function PageWrapper({
  children,
}) {
  return (
    <main
      className="
        min-h-screen
        bg-white
      "
    >
      {children}
    </main>
  );
}
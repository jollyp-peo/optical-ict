export default function Timeline({
  children,
}) {
  return (
    <div
      className="
        relative

        grid
        gap-10

        lg:grid-cols-4
      "
    >
      {children}
    </div>
  );
}
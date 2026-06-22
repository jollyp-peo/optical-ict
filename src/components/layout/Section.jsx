import Container from "./Container";

export default function Section({
  children,
  className = "",
  containerClassName = "",
}) {
  return (
    <section
      className={`
        py-16
        lg:py-24
        ${className}
      `}
    >
      <Container
        className={containerClassName}
      >
        {children}
      </Container>
    </section>
  );
}
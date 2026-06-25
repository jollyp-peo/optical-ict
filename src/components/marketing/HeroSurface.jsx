import GradientSurface from "./GradientSurface";

export default function HeroSurface({
  children,
  className = "",
}) {
  return (
    <GradientSurface
      className={`
        overflow-hidden

        p-8

        lg:p-16

        ${className}
      `}
    >
      {children}
    </GradientSurface>
  );
}
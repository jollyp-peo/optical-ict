export default function Icon({
  icon: IconComponent,
  size = 28,
  weight = "duotone",
  className = "",
}) {
  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      size={size}
      weight={weight}
      className={className}
    />
  );
}
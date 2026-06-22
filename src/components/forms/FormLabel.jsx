export default function FormLabel({
  children,
  required = false,
}) {
  return (
    <label
      className="
        mb-2
        block
        text-sm
        font-medium
        text-slate-700
      "
    >
      {children}

      {required && (
        <span className="ml-1 text-red-500">
          *
        </span>
      )}
    </label>
  );
}
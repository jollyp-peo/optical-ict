import FormError from "./FormError";
import FormLabel from "./FormLabel";

export default function TextareaField({
  label,
  error,
  required,
  rows = 5,
  className = "",
  ...props
}) {
  return (
    <div>
      {label && (
        <FormLabel required={required}>
          {label}
        </FormLabel>
      )}

      <textarea
        rows={rows}
        className={`
          w-full
          resize-none
          overflow-y-auto
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-950
          placeholder:text-slate-400
          outline-none
          transition
          focus:border-yellow-400
          focus:ring-2
          focus:ring-yellow-400/20
          ${error ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""}
          ${className}
        `}
        {...props}
      />

      <FormError error={error} />
    </div>
  );
}
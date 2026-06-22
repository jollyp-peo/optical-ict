import FormError from "./FormError";
import FormLabel from "./FormLabel";

export default function TextareaField({
  label,
  error,
  required,
  rows = 5,
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
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          outline-none
          transition
          focus:border-yellow-400
        "
        {...props}
      />

      <FormError error={error} />
    </div>
  );
}
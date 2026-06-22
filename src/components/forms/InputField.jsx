import FormError from "./FormError";
import FormLabel from "./FormLabel";

export default function InputField({
  label,
  error,
  required,
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

      <input
        className={`
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          outline-none
          transition
          focus:border-yellow-400
          ${className}
        `}
        {...props}
      />

      <FormError error={error} />
    </div>
  );
}
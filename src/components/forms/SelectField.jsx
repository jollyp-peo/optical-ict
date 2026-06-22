import FormError from "./FormError";
import FormLabel from "./FormLabel";

export default function SelectField({
  label,
  options = [],
  error,
  required,
  ...props
}) {
  return (
    <div>
      {label && (
        <FormLabel required={required}>
          {label}
        </FormLabel>
      )}

      <select
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
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <FormError error={error} />
    </div>
  );
}
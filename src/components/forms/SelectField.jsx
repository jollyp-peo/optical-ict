import FormError from "./FormError";
import FormLabel from "./FormLabel";

export default function SelectField({
  label,
  options = [],
  placeholder,
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

      <div className="relative">
        <select
          className={`
            w-full
            appearance-none
            rounded-xl
            border
            border-slate-300
            bg-white
            px-4
            py-3
            pr-10
            text-slate-950
            outline-none
            transition
            focus:border-yellow-400
            focus:ring-2
            focus:ring-yellow-400/20
            disabled:cursor-not-allowed
            disabled:bg-slate-100
            disabled:text-slate-500
            ${error ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""}
            ${className}
          `}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={String(option.value)}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom chevron */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <FormError error={error} />
    </div>
  );
}
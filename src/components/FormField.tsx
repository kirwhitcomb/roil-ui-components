
import { useId } from "react";

type FormFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  hint?: string;
  error?: string;
};

export function FormField({
  label,
  value,
  onChange,
  hint,
  error
}: FormFieldProps) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;

  // These IDs connect the input to its help text.
  const description = [
    hint && hintId,
    error && errorId
  ].filter(Boolean).join(" ");

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={description || undefined}
        maxLength={16}
      />

      {hint && <p id={hintId} className="hint">{hint}</p>}
      {error && <p id={errorId} className="error">{error}</p>}
    </div>
  );
}

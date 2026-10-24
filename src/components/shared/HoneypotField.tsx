/** Hidden field people never see or tab to; bots that fill it are dropped by /api/lead. */
export function HoneypotField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <input
      type="text"
      name="website"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="absolute -left-[9999px] size-px opacity-0"
    />
  );
}

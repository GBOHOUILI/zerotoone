/**
 * An abstract, brand-colored placeholder standing in for a real
 * screenshot. Swap it out by setting `image` on the work item once a
 * real capture is available — see the README for the exact path.
 */
export default function WorkPlaceholder({
  seed,
  className = "",
}: {
  seed: number;
  className?: string;
}) {
  const barWidths = [72, 48, 84, 36].map(
    (w, i) => w - ((seed + i * 13) % 20)
  );
  return (
    <div
      className={`relative flex h-full w-full flex-col justify-end overflow-hidden bg-forest-radial p-6 ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 20% 20%, rgba(255,255,255,0.18), transparent 60%)",
        }}
      />
      <div className="relative flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-pearl/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-pearl/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-pearl/25" />
      </div>
      <div className="relative mt-5 space-y-2.5">
        {barWidths.map((w, i) => (
          <div
            key={i}
            className="h-2.5 rounded-full bg-pearl/20"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
    </div>
  );
}

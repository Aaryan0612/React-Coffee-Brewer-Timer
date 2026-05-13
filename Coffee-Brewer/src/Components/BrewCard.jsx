import { presets } from "../data";

function BrewCard({
  selectedBrew,
  setTime,
  setIsRunning,
  setSelectedBrew,
  setHasFinished,
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--coffee-muted)]">
            Select Coffee
          </p>
          <h3 className="mt-1 font-[var(--font-display)] text-2xl text-[var(--coffee-ink)]">
            Presets for every mood
          </h3>
        </div>
        <p className="text-sm text-[var(--coffee-muted)]">
          3 signature brews
        </p>
      </div>

      <div className="grid gap-3">
        {presets.map((item) => (
          <button
            key={item.name}
            className={`group grid gap-4 rounded-[1.45rem] border px-4 py-4 text-left transition duration-300 md:grid-cols-[88px_minmax(0,1fr)_auto] md:items-center ${
              selectedBrew?.name === item.name
                ? "border-[var(--coffee-accent)] bg-[var(--coffee-accent-soft)] shadow-[0_18px_40px_rgba(183,101,54,0.16)]"
                : "border-[var(--coffee-line)] bg-white hover:-translate-y-0.5 hover:border-[var(--coffee-accent)]/45 hover:shadow-[0_16px_35px_rgba(74,46,27,0.08)]"
            }`}
            onClick={() => {
              setTime(item.time);
              setIsRunning(false);
              setSelectedBrew(item);
              setHasFinished(false);
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-20 w-full rounded-[1rem] object-cover md:w-[88px]"
            />

            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-2xl font-semibold text-[var(--coffee-ink)] md:text-xl">
                  {item.name}
                </span>
                <span className="rounded-full bg-[var(--coffee-cream)] px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--coffee-accent)]">
                  {item.profile}
                </span>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[var(--coffee-muted)]">
                {item.note}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-[var(--coffee-line)] pt-3 md:block md:border-t-0 md:pt-0 md:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--coffee-muted)]">
                Brew Time
              </p>
              <p className="mt-1 text-2xl font-semibold text-[var(--coffee-ink)] md:text-xl">
                {item.time}s
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default BrewCard;

function Controls({
  selectedBrew,
  time,
  isRunning,
  setIsRunning,
  setTime,
  setHasFinished,
}) {
  const canStart = Boolean(selectedBrew) && time > 0 && !isRunning;
  const canPause = isRunning;
  const canReset = Boolean(selectedBrew) || time > 0 || isRunning;

  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-3">
      <button
        className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
          canStart
            ? "cursor-pointer bg-[var(--coffee-accent)] text-white shadow-[0_16px_30px_rgba(183,101,54,0.28)] hover:-translate-y-0.5 hover:bg-[var(--coffee-accent-deep)]"
            : "cursor-not-allowed bg-[var(--coffee-cream)] text-[var(--coffee-muted)]"
        }`}
        onClick={() => {
          if (!selectedBrew || time === 0) return;
          setHasFinished(false);
          setIsRunning(true);
        }}
        disabled={!canStart}
      >
        Start
      </button>

      <button
        className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
          canPause
            ? "cursor-pointer border border-[var(--coffee-line-strong)] bg-white text-[var(--coffee-ink)] hover:-translate-y-0.5 hover:border-[var(--coffee-accent)]"
            : "cursor-not-allowed border border-[var(--coffee-line)] bg-white text-[var(--coffee-muted)]"
        }`}
        onClick={() => setIsRunning(false)}
        disabled={!canPause}
      >
        Pause
      </button>

      <button
        className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
          canReset
            ? "cursor-pointer border border-transparent bg-[var(--coffee-cream)] text-[var(--coffee-ink)] hover:-translate-y-0.5 hover:bg-[var(--coffee-cream-strong)]"
            : "cursor-not-allowed border border-transparent bg-[var(--coffee-cream)] text-[var(--coffee-muted)]"
        }`}
        onClick={() => {
          setIsRunning(false);
          setTime(0);
          setHasFinished(false);
        }}
        disabled={!canReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Controls;

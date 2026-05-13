function TimerDisplay({ time, isRunning, hasFinished }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const timerLabel = hasFinished
    ? "Ready to pour"
    : isRunning
      ? "Brewing in progress"
      : "Awaiting start";

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="coffee-timer-ring flex h-48 w-full max-w-[320px] flex-col items-center justify-center rounded-[2rem] px-6 text-center sm:h-52">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--coffee-muted)]">
          {timerLabel}
        </p>
        <h2 className="mt-3 font-[var(--font-display)] text-5xl leading-none tracking-[-0.05em] text-[var(--coffee-ink)] sm:text-6xl">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </h2>
        <p className="mt-3 max-w-[240px] text-sm leading-6 text-[var(--coffee-muted)]">
          {hasFinished
            ? "Your cup is ready."
            : "Measured time, simple cues, and a cleaner brewing rhythm."}
        </p>
      </div>
    </div>
  );
}

export default TimerDisplay;

import { useState, useEffect } from "react";
import BrewCard from "./Components/BrewCard";
import TimerDisplay from "./Components/TimerDisplay";
import Controls from "./Components/Controls";
import { presets } from "./data";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedBrew, setSelectedBrew] = useState(null);
  const [hasFinished, setHasFinished] = useState(false);

  // Keep the first preset visible so the page feels complete even before selection.
  const previewBrew = selectedBrew ?? presets[0];

  useEffect(() => {
    if (!isRunning || time === 0) return;

    // The countdown stays intentionally small: tick once per second and
    // mark the brew as finished only on the final second.
    const timer = setTimeout(() => {
      if (time === 1) {
        setTime(0);
        setIsRunning(false);
        setHasFinished(true);
        return;
      }

      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isRunning, time]);

  const selectedMessage = selectedBrew
    ? `You selected ${selectedBrew.name}.`
    : "Select a coffee to begin.";

  const headerMessage = hasFinished
    ? `Your ${selectedBrew?.name} is ready to serve.`
    : isRunning && selectedBrew
      ? `Now brewing ${selectedBrew.name}.`
      : "A calm timer for a better coffee ritual.";

  const statusMessage =
    isRunning && selectedBrew
      ? `Your ${selectedBrew.name} will be ready in:`
      : hasFinished && selectedBrew
        ? `Your ${selectedBrew.name} is ready!`
        : "";

  return (
    <div className="min-h-screen bg-[var(--coffee-canvas)] text-[var(--coffee-ink)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="coffee-glow coffee-glow-left" />
        <div className="coffee-glow coffee-glow-right" />
        <div className="coffee-grid" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <section className="coffee-shell overflow-hidden rounded-[2rem] border border-[var(--coffee-line)] shadow-[0_24px_120px_rgba(46,29,18,0.16)]">
          <header className="flex flex-col gap-4 border-b border-[var(--coffee-line)] px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="space-y-2">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--coffee-line)] bg-white/65 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--coffee-muted)]">
                Coffee Brewer
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--coffee-accent)]" />
                Ritual Timer
              </div>
              <p className="text-sm text-[var(--coffee-muted)]">
                A minimal coffee homepage with a built-in brewing experience.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:w-fit">
              <div className="rounded-2xl border border-[var(--coffee-line)] bg-white/60 px-4 py-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--coffee-muted)]">
                  Presets
                </p>
                <p className="mt-1 text-lg font-semibold text-[var(--coffee-ink)]">
                  3 curated
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--coffee-line)] bg-white/60 px-4 py-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--coffee-muted)]">
                  Experience
                </p>
                <p className="mt-1 text-lg font-semibold text-[var(--coffee-ink)]">
                  Full page
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--coffee-line)] bg-white/60 px-4 py-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--coffee-muted)]">
                  Style
                </p>
                <p className="mt-1 text-lg font-semibold text-[var(--coffee-ink)]">
                  Premium
                </p>
              </div>
            </div>
          </header>

          <div className="grid gap-4 p-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:p-5">
            <div className="coffee-panel coffee-panel-dark flex flex-col gap-6 rounded-[1.7rem] p-6 sm:p-8">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/60">
                  Minimal. Warm. Intuitive.
                </p>
                <h1 className="max-w-xl font-[var(--font-display)] text-4xl leading-[0.96] text-white sm:text-5xl xl:text-6xl">
                  Brew with the calm of a boutique cafe.
                </h1>
                <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                  Start on a refined homepage, choose a signature brew, and keep
                  the ritual on one thoughtful screen.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.16em] text-white/50">
                    Brewing Style
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Guided Ritual
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.16em] text-white/50">
                    Selection
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {selectedBrew ? selectedBrew.name : "Choose a brew"}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.16em] text-white/50">
                    Flow
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    One-screen experience
                  </p>
                </div>
              </div>

              <div className="coffee-feature-card grid gap-4 rounded-[1.6rem] p-4 sm:grid-cols-[120px_1fr] sm:p-5">
                <img
                  src={previewBrew.image}
                  alt={previewBrew.name}
                  className="h-36 w-full rounded-[1.2rem] object-cover shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:h-full"
                />

                <div className="flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/75">
                      Featured Brew
                    </div>
                    <div>
                      <h2 className="font-[var(--font-display)] text-3xl text-white">
                        {previewBrew.name}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-[var(--coffee-highlight)]">
                        {previewBrew.profile}
                      </p>
                    </div>
                    <p className="max-w-lg text-sm leading-6 text-white/70">
                      {previewBrew.note}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <p className="text-[0.72rem] uppercase tracking-[0.16em] text-white/50">
                        Brew Time
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        {previewBrew.time}s
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <p className="text-[0.72rem] uppercase tracking-[0.16em] text-white/50">
                        Status
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {selectedBrew ? "Selected" : "Waiting"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="coffee-panel flex flex-col gap-4 rounded-[1.7rem] p-5 sm:p-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--coffee-accent)]">
                  Brewing Station
                </p>
                <h2 className="max-w-2xl font-[var(--font-display)] text-3xl leading-tight text-[var(--coffee-ink)] xl:text-4xl">
                  {headerMessage}
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-[var(--coffee-muted)] sm:text-base">
                  {selectedMessage} Everything important stays in view so the
                  timer feels fast, intuitive, and premium.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-[var(--coffee-line)] bg-white px-4 py-5 shadow-[0_18px_50px_rgba(74,46,27,0.08)] sm:px-5 sm:py-6">
                {statusMessage && (
                  <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-[var(--coffee-accent)]">
                    {statusMessage}
                  </p>
                )}

                <TimerDisplay
                  time={time}
                  isRunning={isRunning}
                  hasFinished={hasFinished}
                />

                <Controls
                  selectedBrew={selectedBrew}
                  time={time}
                  isRunning={isRunning}
                  setIsRunning={setIsRunning}
                  setTime={setTime}
                  setHasFinished={setHasFinished}
                />
              </div>

              <div className="rounded-[1.8rem] border border-[var(--coffee-line)] bg-[var(--coffee-cream)]/45 px-5 py-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--coffee-accent)]">
                    Brew Guidance
                  </p>
                  <p className="text-sm text-[var(--coffee-muted)]">
                    Simple 3-step flow
                  </p>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-[var(--coffee-line)] bg-white/85 p-4">
                    <p className="text-sm font-semibold text-[var(--coffee-ink)]">
                      1. Pick a coffee
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--coffee-muted)]">
                      Select a preset to load its timer instantly.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[var(--coffee-line)] bg-white/85 p-4">
                    <p className="text-sm font-semibold text-[var(--coffee-ink)]">
                      2. Start brewing
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--coffee-muted)]">
                      Use start, pause, and reset without losing your place.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[var(--coffee-line)] bg-white/85 p-4">
                    <p className="text-sm font-semibold text-[var(--coffee-ink)]">
                      3. Serve on time
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--coffee-muted)]">
                      The ready state clearly tells you when your cup is done.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-[var(--coffee-line)] bg-white/72 p-4 shadow-[0_12px_32px_rgba(74,46,27,0.05)] sm:p-5">
                <BrewCard
                  selectedBrew={selectedBrew}
                  setTime={setTime}
                  setIsRunning={setIsRunning}
                  setSelectedBrew={setSelectedBrew}
                  setHasFinished={setHasFinished}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

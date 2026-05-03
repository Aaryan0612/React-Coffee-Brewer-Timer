import { useState, useEffect } from "react";
import BrewCard from "./Components/BrewCard";
import TimerDisplay from "./Components/TimerDisplay";
import Controls from "./Components/Controls";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedBrew, setSelectedBrew] = useState(null);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    if (!isRunning || time === 0) return;

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

  const statusMessage =
    isRunning && selectedBrew
      ? `Your ${selectedBrew.name} will be ready in:`
      : hasFinished && selectedBrew
        ? `Your ${selectedBrew.name} is ready!`
        : "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-200 via-orange-300 to-orange-500">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-[380px] flex flex-col items-center gap-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Coffee Brew Timer ☕
        </h1>

        <p className="text-sm font-medium text-amber-800">{selectedMessage}</p>

        {/* Image */}
        {selectedBrew && (
          <img
            src={selectedBrew.image}
            alt="coffee"
            className="w-44 h-44 object-contain transition-transform duration-300 hover:scale-105"
          />
        )}

        {/* Timer */}
        {statusMessage && (
          <p className="text-center text-sm font-medium text-green-700">
            {statusMessage}
          </p>
        )}
        <TimerDisplay time={time} />

        {/* Brew buttons */}
        <BrewCard
          selectedBrew={selectedBrew}
          setTime={setTime}
          setIsRunning={setIsRunning}
          setSelectedBrew={setSelectedBrew}
          setHasFinished={setHasFinished}
        />

        {/* Controls */}
        <Controls
          selectedBrew={selectedBrew}
          time={time}
          setIsRunning={setIsRunning}
          setTime={setTime}
          setHasFinished={setHasFinished}
        />
      </div>
    </div>
  );
}

export default App;

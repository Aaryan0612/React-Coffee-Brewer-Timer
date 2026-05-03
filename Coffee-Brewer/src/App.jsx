import { useState, useEffect } from "react";
import BrewCard from "./Components/BrewCard";
import TimerDisplay from "./Components/TimerDisplay";
import Controls from "./Components/Controls";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedBrew, setSelectedBrew] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0 && isRunning) {
      setIsRunning(false);
      setMessage("☕ Your coffee is ready!");
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-200 via-orange-300 to-orange-500">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-[380px] flex flex-col items-center gap-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Coffee Brew Timer ☕
        </h1>

        {/* Image */}
        {selectedBrew && (
          <img
            src={selectedBrew.image}
            alt="coffee"
            className="w-44 h-44 object-contain transition-transform duration-300 hover:scale-105"
          />
        )}

        {/* Timer */}
        <TimerDisplay time={time} />

        {/* Message */}
        {message && (
          <p className="text-green-600 font-medium text-sm">{message}</p>
        )}

        {/* Brew buttons */}
        <BrewCard
          setTime={setTime}
          setIsRunning={setIsRunning}
          setSelectedBrew={setSelectedBrew}
          setMessage={setMessage}
        />

        {/* Controls */}
        <Controls
          setIsRunning={setIsRunning}
          setTime={setTime}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
}

export default App;

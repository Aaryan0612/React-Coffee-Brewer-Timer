function Controls({
  selectedBrew,
  time,
  setIsRunning,
  setTime,
  setHasFinished,
}) {
  return (
    <div className="flex gap-4">
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md transition"
        onClick={() => {
          if (!selectedBrew || time === 0) return;
          setHasFinished(false);
          setIsRunning(true);
        }}
      >
        Start
      </button>

      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-xl shadow-md transition"
        onClick={() => setIsRunning(false)}
      >
        Pause
      </button>

      <button
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow-md transition"
        onClick={() => {
          setIsRunning(false);
          setTime(0);
          setHasFinished(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Controls;

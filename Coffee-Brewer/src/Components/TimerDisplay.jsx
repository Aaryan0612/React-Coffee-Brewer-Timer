function TimerDisplay({ time }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <h2 className="text-5xl font-bold text-gray-800 tracking-wide">
      {minutes}:{seconds.toString().padStart(2, "0")}
    </h2>
  );
}

export default TimerDisplay;

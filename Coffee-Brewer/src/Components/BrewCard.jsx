import { presets } from "../data";

function BrewCard({
  selectedBrew,
  setTime,
  setIsRunning,
  setSelectedBrew,
  setHasFinished,
}) {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {presets.map((item) => (
        <button
          key={item.name}
          className={`px-5 py-2 rounded-xl shadow-md transition text-white ${
            selectedBrew?.name === item.name
              ? "bg-amber-800"
              : "bg-amber-600 hover:bg-amber-700"
          }`}
          onClick={() => {
            setTime(item.time);
            setIsRunning(false);
            setSelectedBrew(item);
            setHasFinished(false);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default BrewCard;

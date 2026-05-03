import { presets } from "../data";

function BrewCard({ setTime, setIsRunning, setSelectedBrew, setMessage }) {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {presets.map((item) => (
        <button
          key={item.name}
          className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-xl shadow-md transition"
          onClick={() => {
            setTime(item.time);
            setIsRunning(false);
            setSelectedBrew(item);
            setMessage("");
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default BrewCard;

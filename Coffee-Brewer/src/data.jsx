import espresso from "./assets/espresso.png";
import frenchPress from "./assets/frenchPress.jpg";
import aeroPress from "./assets/aeroPress.jpg";

export const presets = [
  {
    name: "Espresso",
    time: 30,
    image: espresso,
    profile: "Bold and concentrated",
    note: "Short, intense, and ideal for a quick cafe-style shot.",
  },
  {
    name: "French Press",
    time: 60,
    image: frenchPress,
    profile: "Rich and full-bodied",
    note: "A slower steep with a heavier mouthfeel and deep aroma.",
  },
  {
    name: "AeroPress",
    time: 120,
    image: aeroPress,
    profile: "Smooth and balanced",
    note: "Clean, modern, and easy-drinking with bright character.",
  },
];

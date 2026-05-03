# ☕ Coffee Brew Timer (React Project)

This project is a simple but structured React application that simulates a coffee brewing timer.
It demonstrates how React manages UI using **state, props, and component-based architecture**.

---

# 🎯 Objective

To build a timer that:

* Lets the user select a coffee type
* Starts a countdown based on preset time
* Updates UI automatically
* Displays a completion message when done

---

# 🧠 Core Concept of This Project

> React UI = Function of State

This means:

* UI does NOT change manually
* UI updates automatically when **state changes**

---

# ⚙️ MOST IMPORTANT FILE

## 👉 `App.jsx` (THE BRAIN)

* Holds ALL important state
* Controls logic
* Passes data to other components

---

## 👉 `main.jsx` (ENTRY POINT)

* Starts the React app
* Renders `<App />` into the DOM

```js
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### 🧠 Simple Understanding:

* `main.jsx` = starts the app
* `App.jsx` = controls the app

👉 So **App.jsx is more important for logic**

---

# 🧱 HOW THE PROJECT WAS BUILT (FLOW)

### Step 1: Setup

* Created React app using Vite
* Installed Tailwind for styling

---

### Step 2: Created Components

```id="structure-flow"
App.jsx
 ├── BrewCard.jsx
 ├── TimerDisplay.jsx
 └── Controls.jsx
```

Each component has a **single responsibility**:

* BrewCard → selection
* TimerDisplay → UI display
* Controls → actions

---

# 🔁 COMPLETE DATA FLOW (VERY IMPORTANT)

## 🟢 Step 1: User clicks button

Inside `BrewCard.jsx`:

```js
onClick={() => {
  setTime(item.time);
  setSelectedBrew(item);
}}
```

---

## 🟢 Step 2: State updates in App.jsx

```js
const [time, setTime] = useState(0);
const [selectedBrew, setSelectedBrew] = useState(null);
```

---

## 🟢 Step 3: React re-renders UI

* `time` changes → Timer updates
* `selectedBrew` changes → Image updates

---

## 🟢 Step 4: Props pass data to children

```js
<TimerDisplay time={time} />
<BrewCard setTime={setTime} />
```

---

# 🔄 PARENT → CHILD DATA FLOW

👉 React uses **one-way data flow**

## Parent (App.jsx):

```js
<TimerDisplay time={time} />
```

## Child (TimerDisplay.jsx):

```js
function TimerDisplay({ time }) {
```

👉 Child receives data via **props**

---

# 🔄 CHILD → PARENT COMMUNICATION

React doesn’t allow direct upward data flow.

So we pass functions:

```js
<BrewCard setTime={setTime} />
```

Then inside child:

```js
setTime(item.time);
```

👉 Child triggers parent state update

---

# ⏱️ TIMER LOGIC (CORE LOGIC)

```js
useEffect(() => {
  let timer;

  if (isRunning && time > 0) {
    timer = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);
  }

  if (time === 0 && isRunning) {
    setIsRunning(false);
    setMessage("☕ Coffee is ready!");
  }

  return () => clearInterval(timer);
}, [time, isRunning]);
```

---

## 🧠 Explanation

* `useEffect` runs when `time` or `isRunning` changes
* Starts countdown using `setInterval`
* Stops timer when:

  * time reaches 0
* Cleans interval (important for performance)

---

# 🧩 COMPONENT BREAKDOWN

## 1. App.jsx

* Stores:

  * time
  * selectedBrew
  * isRunning
  * message
* Controls everything

---

## 2. BrewCard.jsx

* Displays coffee options
* Updates parent state

---

## 3. TimerDisplay.jsx

* Converts seconds → minutes:seconds
* Displays time

---

## 4. Controls.jsx

* Start / Pause / Reset functionality

---

# 🎨 UI LOGIC

* Tailwind CSS used for styling
* Gradient background
* Centered card layout
* Responsive spacing

---

# 🧠 KEY REACT CONCEPTS USED

* useState → manage dynamic data
* useEffect → handle side effects (timer)
* Props → pass data
* Component-based design → modular code
* Immutability → safe updates

---

# 🔥 COMPLETE LOGIC IN ONE LINE

1. User clicks → state updates
2. State changes → React re-renders
3. UI updates automatically

---

# 📌 WHAT MAKES THIS PROJECT GOOD

* Clean structure
* Proper separation of concerns
* Real-world use of useEffect
* Clear data flow
* Easy to scale

---

# 🚀 HOW TO RUN

```bash
npm install
npm run dev
```

---

# 📷 Preview

Whole UI:
<img width="1470" height="956" alt="Screenshot 2026-05-03 at 8 54 58 PM" src="https://github.com/user-attachments/assets/76337518-d824-4157-9ecc-1b4d04d7331f" />

Espreeso:
<img width="1470" height="956" alt="Screenshot 2026-05-03 at 8 55 29 PM" src="https://github.com/user-attachments/assets/3d99f070-9120-4682-82a8-91cb7d4d6b52" />

Aero Press Coffe:<img width="1470" height="956" alt="Screenshot 2026-05-03 at 8 56 43 PM" src="https://github.com/user-attachments/assets/299c1012-dd74-49f5-87d7-b472b529efac" />

---

# 📈 FUTURE IMPROVEMENTS

* Add sound notification
* Add animations
* Add custom timer input
* Save previous selections

---

# 👨‍💻 AUTHOR

Aaryan Kuchekar


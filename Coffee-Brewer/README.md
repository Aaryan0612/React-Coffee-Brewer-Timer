# ☕ Coffee Brew Timer

<img width="1470" height="956" alt="Screenshot 2026-05-03 at 9 13 39 PM" src="https://github.com/user-attachments/assets/40f48966-2318-4e07-91b2-4da771138310" />

<img width="1470" height="956" alt="Screenshot 2026-05-03 at 9 14 15 PM" src="https://github.com/user-attachments/assets/93e51089-e4d2-46d1-b8c4-9c699d0f5e76" />

A simple and clean React application that simulates a coffee brewing timer.

The focus of this project is not complexity, but **clarity of logic, data flow, and React fundamentals**.

---

# 🎯 What This App Does

* Lets user select a coffee type
* Starts a predefined timer
* Shows real-time status messages
* Displays completion message when brew is ready

---

# 🚀 Run Locally

```bash
npm install
npm run dev
```

---

# 📁 Project Structure

```
src/
  App.jsx              → Main logic (state + flow)
  data.jsx             → Coffee presets
  Components/
    BrewCard.jsx       → Coffee selection
    Controls.jsx       → Start / Pause / Reset
    TimerDisplay.jsx   → Time display
```

---

# 🧠 Most Important File

## 👉 App.jsx (The Brain of the App)

This file:

* Stores all state
* Controls the timer logic
* Decides what UI should be shown

### Why App.jsx is important?

Because:

> React apps are driven by state, and all state is managed here.

---

## 👉 main.jsx (Entry Point)

```js
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

This simply:

* Loads the app
* Renders App.jsx

👉 It does NOT contain logic
👉 It only starts the app

---

# 🔁 Core Idea of This Project

> UI = Function of State

This means:

* UI is not manually changed
* UI automatically updates when state changes

---

# ⚙️ State Used in App.jsx

```js
time           → remaining seconds
isRunning      → whether timer is active
selectedBrew   → selected coffee object
hasFinished    → whether brew is completed
```

---

# 🔄 Complete Data Flow (Step-by-Step)

## 1. User selects coffee

In BrewCard.jsx:

```js
setSelectedBrew(item)
setTime(item.time)
```

---

## 2. State updates in App.jsx

React detects state change → triggers re-render

---

## 3. UI updates automatically

* selectedBrew → updates message + image
* time → updates timer

---

## 4. Props pass data to child components

```js
<TimerDisplay time={time} />
<BrewCard setSelectedBrew={setSelectedBrew} />
```

---

# 🔄 Parent → Child Flow (Important)

Data flows **top to bottom**

```js
<App>
  <TimerDisplay time={time} />
</App>
```

Child receives:

```js
function TimerDisplay({ time })
```

---

# 🔄 Child → Parent Communication

React does NOT allow direct upward flow.

So we pass functions:

```js
<BrewCard setTime={setTime} />
```

Child uses it:

```js
setTime(item.time)
```

👉 This updates parent state

---

# ⏱️ Timer Logic (useEffect)

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
    setHasFinished(true);
  }

  return () => clearInterval(timer);
}, [time, isRunning]);
```

---

## 🧠 What’s happening here?

* Runs when `time` or `isRunning` changes
* Starts timer using `setInterval`
* Decreases time every second
* Stops when time reaches 0
* Cleans interval to avoid bugs

---

# 🧩 Component Responsibilities

## App.jsx

* Manages all state
* Controls flow and logic

---

## BrewCard.jsx

* Displays coffee options
* Updates selected coffee

---

## Controls.jsx

* Handles Start / Pause / Reset

---

## TimerDisplay.jsx

* Converts seconds → MM:SS format
* Displays time

---

# 🔁 UI Flow (User Perspective)

1. User selects coffee
   → “You selected Espresso”

2. User clicks Start
   → “Your Espresso will be ready in:”

3. Timer counts down

4. Timer ends
   → “Your Espresso is ready!”

---

# 🎨 UI Approach

* Tailwind CSS used for styling
* Card-based layout
* Gradient background
* Minimal and clean design

---

# 🧠 Why This Project Is Easy to Understand

* Single source of truth → App.jsx
* Small components → each has one job
* No unnecessary logic
* UI fully controlled by state

---

# 🔑 Key React Concepts Used

* useState → manage data
* useEffect → handle timer
* Props → pass data
* Component structure → modular design
* Immutability → safe updates

---

# 🔥 Full Logic in One Line

User action → state update → React re-renders → UI updates automatically

---

# 📈 Possible Improvements

* Add sound when timer ends
* Add custom timer input
* Add animations
* Store previous selections

---

# 👨‍💻 Author

Aaryan Kuchekar

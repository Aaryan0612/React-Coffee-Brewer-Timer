# ☕ Coffee Brew Timer

A simple React-based coffee timer that allows users to select a brewing method (Espresso, French Press, AeroPress), start a countdown, and get notified when the coffee is ready.

---

## 🚀 Features

* Select brew type (preset time)
* Live countdown timer
* Start / Pause / Reset controls
* Dynamic image based on selection
* Completion message when timer ends
* Clean UI using Tailwind CSS

---

## 🧠 Tech Stack

* React (Vite)
* Tailwind CSS
* JavaScript (ES6+)

---

## 📁 Project Structure

```
src/
 ├── assets/        # Coffee images
 ├── components/
 │    ├── BrewCard.jsx
 │    ├── Controls.jsx
 │    └── TimerDisplay.jsx
 ├── data.js        # Preset data
 ├── App.jsx        # Main logic
 ├── main.jsx       # Entry point
 └── index.css      # Tailwind setup
```

---

## 🔁 How Data Flows

1. **User clicks a brew button**

   * `BrewCard.jsx` triggers:

     ```js
     setTime(item.time)
     setSelectedBrew(item)
     ```

2. **State updates in App.jsx**

   * `time` → controls countdown
   * `selectedBrew` → controls image display

3. **Props flow down to components**

   * `time` → `TimerDisplay`
   * setter functions → `BrewCard` & `Controls`

---

## ⚛️ How React Updates UI

React uses **state-driven rendering**:

* When `setTime()` is called → React re-renders
* Updated `time` is passed to `TimerDisplay`
* UI automatically reflects new value

👉 No manual DOM manipulation required

---

## ⏱️ Timer Logic (useEffect)

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
    setMessage("☕ Your coffee is ready!");
  }

  return () => clearInterval(timer);
}, [isRunning, time]);
```

### Explanation:

* Runs whenever `time` or `isRunning` changes
* Starts interval when timer is active
* Cleans up interval to avoid memory leaks

---

## 🧱 Component Design

### 1. App.jsx

* Central state management
* Controls logic and data flow

### 2. BrewCard.jsx

* Displays preset buttons
* Sends selected brew data to App

### 3. TimerDisplay.jsx

* Displays formatted time

### 4. Controls.jsx

* Handles Start, Pause, Reset

---

## 🎨 UI Design

* Tailwind CSS for styling
* Gradient background
* Centered card layout
* Responsive spacing and button styling

---

## 🧩 Key Concepts Used

* useState (state management)
* useEffect (side effects / timer)
* Props (data passing)
* Component-based architecture
* Immutability (state updates)

---

## 📌 What I Learned

* How React manages UI using state
* How components communicate using props
* How side effects (like timers) work in React
* Structuring a clean and modular React project

---

## ▶️ Run Locally

```bash
npm install
npm run dev
```

---

## 📷 Preview


---

## 📎 Future Improvements

* Add sound notification when timer ends
* Add more brew types
* Add animations
* Save last used brew

---

## 🙌 Author

Aaryan Kuchekar

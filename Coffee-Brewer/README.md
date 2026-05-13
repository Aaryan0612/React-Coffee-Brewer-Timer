# Coffee Brew Timer

A small React and Tailwind CSS project that turns a simple coffee timer into a cleaner, more premium brewing experience.

The goal of this project is to keep the logic very easy while improving the presentation, structure, and clarity of the codebase.

## What the app does

- lets the user select a coffee preset
- starts a preset brew timer
- shows a clear status while the timer is running
- shows a ready message when the brew is complete

## Tech stack

- React
- Vite
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev
```

## Project structure

```text
src/
  App.jsx
  data.jsx
  index.css
  Components/
    BrewCard.jsx
    Controls.jsx
    TimerDisplay.jsx
```

## Simple code flow

`App.jsx` is the main state owner.

It stores:

- `time`: remaining seconds
- `isRunning`: whether the timer is active
- `selectedBrew`: the currently selected coffee
- `hasFinished`: whether the current brew has completed

The child components stay focused:

- `BrewCard.jsx` handles coffee selection UI
- `Controls.jsx` handles start, pause, and reset
- `TimerDisplay.jsx` handles the timer presentation
- `data.jsx` stores the preset content used by the UI

## Timer logic

The timer uses one small `useEffect` in `App.jsx`.

- if the timer is not running, the effect does nothing
- if the timer is running, a `setTimeout` reduces the time after one second
- when the timer reaches the last second, the app sets the time to `0`, stops the timer, and marks the brew as finished

This keeps the logic easy to read and easy to update.

## Design direction

The UI is intentionally:

- warm and minimal
- inspired by premium cafe storytelling
- modular, so visuals can change without rewriting the timer logic

The visual system is mostly controlled through CSS variables in `src/index.css`, which makes the colors, typography, and surfaces easier to adjust later.

## Why this codebase is easy to work with

- one main logic file
- small presentational components
- no unnecessary state
- content separated into `data.jsx`
- short comments only where they help explain intent

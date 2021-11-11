import React from "react";
import "./App.css";
import PomodoroTimer from "./components/PomodoroTimer";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <PomodoroTimer />
      {/* <Timer   /> */}
    </div>
  );
}

export default App;

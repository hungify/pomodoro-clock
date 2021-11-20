import React from "react";
import "./style.scss";

interface ControlPanelProps {
  started: Boolean;
  onStop: () => void;
  onStart: () => void;
  onReset: () => void;
}

function ControlPanel(props: ControlPanelProps) {
  const { started, onStop, onReset, onStart } = props;

  return (
    <div className="control_panel">
      <button
        className={`btn btn__stop btn__start ${started && "btn--active"}`}
        onClick={started ? onStop : onStart}
      >
        {started ? "Stop" : "Start"}
      </button>
      <button onClick={onReset} className={`btn btn__reset ${!started && "not-allowed"}`}>
        Reset
      </button>
    </div>
  );
}

export default ControlPanel;

import React from "react";
import "./style.scss";

interface BreakProps {
  breakLength: number;
  decrementBreak: () => void;
  incrementBreak: () => void;
  started: boolean;
}

function Break(props: BreakProps) {
  const { incrementBreak, decrementBreak, breakLength, started } = props;
  return (
    <div className="break">
      <p className="break__label">Break Length</p>

      <div className="break__control">
        <button
          className={`btn btn__increment ${started && "not-allowed"}`}
          onClick={incrementBreak}
        >
          +
        </button>
        <p className="break__name">{breakLength}</p>
        <button
          className={`btn btn__decrement ${
            (breakLength === 1 || started) && "not-allowed"
          }`}
          onClick={decrementBreak}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Break;

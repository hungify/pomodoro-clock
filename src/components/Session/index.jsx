import PropTypes from "prop-types";
import React from "react";
import "./style.scss";

Session.propTypes = {
  decrementSession: PropTypes.func,
  incrementSession: PropTypes.func,
  sessionLength: PropTypes.number,
  started: PropTypes.bool,
};

interface SessionProps {
  decrementSession: () => void;
  incrementSession: () => void;
  sessionLength: number;
  started: boolean;
}

function Session(props: SessionProps) {
  const { incrementSession, decrementSession, sessionLength, started } = props;

  return (
    <div className="session">
      <p className="session__label">Session Length</p>
      <div className="session__control">
        <button
          className={`btn btn__increment ${started && "not-allowed"}`}
          onClick={incrementSession}
        >
          +
        </button>
        <p className="session__name">{sessionLength}</p>
        <button
          className={`btn btn__decrement ${
            (sessionLength === 1 || started) && "not-allowed"
          }`}
          onClick={decrementSession}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Session;

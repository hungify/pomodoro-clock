import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Session.propTypes = {
  decrementSession: PropTypes.func,
  incrementSession: PropTypes.func,
  sessionLength: PropTypes.number,
};

function Session(props) {
  const { incrementSession, decrementSession, sessionLength } = props;

  return (
    <div className="session">
      <p className="session__label">Session Length</p>
      <div className="session__control">
        <button className="btn btn__increment" onClick={incrementSession}>
          +
        </button>
        <p className="session__name">{sessionLength}</p>
        <button className="btn btn__decrement" onClick={decrementSession}>
          -
        </button>
      </div>
    </div>
  );
}

export default Session;

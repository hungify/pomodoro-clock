import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import clsx from 'clsx';

Session.propTypes = {
  decrementSession: PropTypes.func,
  incrementSession: PropTypes.func,
  sessionLength: PropTypes.number,
  started: PropTypes.bool,
};

function Session(props) {
  const { incrementSession, decrementSession, sessionLength, started } = props;

  return (
    <div className="session">
      <p className="session__label">Session Length</p>
      <div className="session__control">
        <button
          className={clsx('btn btn__increment', started && 'not-allowed')}
          onClick={incrementSession}
        >
          +
        </button>
        <p className="session__name">{sessionLength}</p>
        <button
          className={clsx('btn btn__decrement', started && 'not-allowed')}
          onClick={decrementSession}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Session;

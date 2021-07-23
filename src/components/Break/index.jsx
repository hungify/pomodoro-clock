import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import clsx from 'clsx';

Break.propTypes = {
  breakLength: PropTypes.number,
  decrementBreak: PropTypes.func,
  incrementBreak: PropTypes.func,
  started: PropTypes.bool,
};

function Break(props) {
  const { incrementBreak, decrementBreak, breakLength, started } = props;
  return (
    <div className="break">
      <p className="break__label">Break Length</p>

      <div className="break__control">
        <button
          className={clsx('btn btn__increment', started && 'not-allowed')}
          onClick={incrementBreak}
        >
          +
        </button>
        <p className="break__name">{breakLength}</p>
        <button
          className={clsx('btn btn__decrement', started && 'not-allowed')}
          onClick={decrementBreak}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Break;

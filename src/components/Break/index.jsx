import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { initialState } from '../../constants/index.js';

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
          className={`btn btn__increment ${
            (breakLength === initialState.initBreakLength || started) && 'not-allowed'
          }`}
          onClick={incrementBreak}
        >
          +
        </button>
        <p className="break__name">{breakLength}</p>
        <button
          className={`btn btn__decrement ${(breakLength === 1 || started) && 'not-allowed'}`}
          onClick={decrementBreak}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Break;

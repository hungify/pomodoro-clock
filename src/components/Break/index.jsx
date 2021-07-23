import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Break.propTypes = {
  breakLength: PropTypes.number,
  decrementBreak: PropTypes.func,
  incrementBreak: PropTypes.func,
};

function Break(props) {
  const { incrementBreak, decrementBreak, breakLength } = props;
  return (
    <div className="break">
      <p className="break__label">Break Length</p>

      <div className="break__control">
        <button className="btn btn--active btn__increment" onClick={incrementBreak}>
          +
        </button>
        <p className="break__name">{breakLength}</p>
        <button className="btn btn--active btn__decrement" onClick={decrementBreak}>
          -
        </button>
      </div>
    </div>
  );
}

export default Break;

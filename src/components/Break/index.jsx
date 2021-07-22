import React from 'react';
import PropTypes from 'prop-types';

Break.propTypes = {
  breakLength: PropTypes.number,
  decrementBreak: PropTypes.func,
  incrementBreak: PropTypes.func,
};

function Break(props) {
  const { incrementBreak, decrementBreak, breakLength } = props;
  return (
    <div className="break-container">
      <h2 id="break-label">Break Length</h2>

      <div className="button-container">
        <button id="break-increment" onClick={incrementBreak}>
          +
        </button>

        <h2 id="break-length" style={{ margin: 0 }}>
          {breakLength}
        </h2>

        <button id="break-decrement" onClick={decrementBreak}>
          -
        </button>
      </div>
    </div>
  );
}

export default Break;

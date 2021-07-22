import React from 'react';
import PropTypes from 'prop-types';

Session.propTypes = {
  decrementSession: PropTypes.func,
  incrementSession: PropTypes.func,
  sessionLength: PropTypes.number,
};

function Session(props) {
  const { incrementSession, decrementSession, sessionLength } = props;

  return (
    <div className="session-container">
      <h2 id="session-label">Session Length</h2>
      <div className="button-container">
        <button id="session-increment" onClick={incrementSession}>
          +
        </button>
        <h2 id="session-length" style={{ margin: 0 }}>
          {sessionLength}
        </h2>
        <button id="session-decrement" onClick={decrementSession}>
          -
        </button>
      </div>
    </div>
  );
}

export default Session;

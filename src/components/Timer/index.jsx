import React from 'react';
import PropTypes from 'prop-types';

Timer.propTypes = {
  timerType: PropTypes.string,
  timeLeftCurrent: PropTypes.string,
};

function Timer(props) {
  const { timerType, timeLeftCurrent } = props;
  return (
    <div className="timer-container">
      <h2 id="timer-label">{timerType}</h2>
      <h3 id="time-left">{timeLeftCurrent}</h3>
    </div>
  );
}

export default Timer;

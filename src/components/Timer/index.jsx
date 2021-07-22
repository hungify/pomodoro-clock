import PropTypes from 'prop-types';
import React from 'react';
import { circle } from '../../constants/index.js';
import { formatTime } from '../../helpers/helpers.js';

Timer.propTypes = {
  timerType: PropTypes.string,
  timeLeftCurrent: PropTypes.string,
};

function Timer(props) {
  const { timerType, timeLeft, ringProgress } = props;
  const { radius, stroke } = circle;

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = -(1 - ringProgress) * circumference;
  console.log(timeLeft);
  const timeLeftCurrent = formatTime(timeLeft);
  return (
    <div className="timer-container">
      <svg className="progress-ring" height="300" width="300">
        <circle
          //ANIMATED CIRCLE
          className="progress-ring__circle"
          stroke="red"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* BACK CIRCLE WITH LOW OPACITY */}
        <circle
          className="progress-ring__circle"
          stroke="red"
          strokeOpacity="20%"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <h2 id="timer-label">{timerType}</h2>
      <h3 id="time-left">{timeLeftCurrent}</h3>
    </div>
  );
}

export default Timer;

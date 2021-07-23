import PropTypes from 'prop-types';
import React from 'react';
import { circle } from '../../constants/index.js';
import { formatTime } from '../../helpers/helpers.js';
import './style.scss';

Timer.propTypes = {
  timeType: PropTypes.string,
  timeLeftCurrent: PropTypes.string,
};

function Timer(props) {
  const { timeType, timeLeft, ringProgress } = props;
  const { radius, strokeWidth } = circle;

  const actualRadius = radius - strokeWidth;
  const circumference = actualRadius * 2 * Math.PI;
  const strokeDashoffset = -(1 - ringProgress) * circumference;

  const timeLeftCurrent = formatTime(timeLeft);

  return (
    <div className="time">
      <svg className="time__progress-ring" height="300" width="300">
        <circle
          className="circle circle__above"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + circumference}
          style={{ strokeDashoffset }}
          r={actualRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          className="circle circle__below"
          strokeOpacity="20%"
          strokeWidth={strokeWidth}
          r={actualRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="time__inner">
        <p className="time__label text-center">{timeType}</p>
        <p className="time__left text-center">{timeLeftCurrent}</p>
      </div>
    </div>
  );
}

export default Timer;

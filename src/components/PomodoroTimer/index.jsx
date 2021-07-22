import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Timer from '../Timer/index.jsx';
import ControlPanel from '../ControlPanel/index.jsx';
import { formatTime } from '../../helpers/helpers.js';
import Session from '../Session/index.jsx';
import Break from '../Break/index.jsx';

function PomodoroTimer(props) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [timeType, setTimeType] = useState('Session');
  const [sessionLength, setSessionLength] = useState(1);
  const [breakLength, setBreakLength] = useState(1);
  const [started, setStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const myAudio = useRef();
  const context = new AudioContext();

  useEffect(() => {
    const handleSwitch = () => {
      if (timeType === 'Session') {
        setTimeType('Break');
        setTimeLeft(breakLength * 60);
      } else if (timeType === 'Break') {
        setTimeType('Session');
        setTimeLeft(sessionLength * 60);
      }
    };

    if (started && timeLeft > 0) {
      setIntervalId(
        setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000)
      );
    } else if (started && timeLeft === 0) {
      setIntervalId(
        setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000)
      );
      myAudio.current.play();
      handleSwitch();
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [started, timeLeft, timeType, breakLength, sessionLength, myAudio]);

  const handleOnStop = () => {
    setStarted(false);
  };

  const handleOnStart = () => {
    context.resume();
    setStarted(true);
  };

  const handleOnReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60);
    setTimeType('Session');
    setStarted(false);
    myAudio.current.pause();
    myAudio.current.currentTime = 0;
  };

  const incrementSession = () => {
    if (!started && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft((sessionLength + 1) * 60);
    }
  };
  const decrementSession = () => {
    if (!started && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft((sessionLength - 1) * 60);
    }
  };
  const incrementBreak = () => {
    if (!started && breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };
  const decrementBreak = () => {
    if (!started && breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const timeLeftCurrent = formatTime(timeLeft);

  return (
    <div className="pomodoro">
      <Timer timerType={timeType} timeLeftCurrent={timeLeftCurrent} />
      <Session
        sessionLength={sessionLength}
        incrementSession={incrementSession}
        decrementSession={decrementSession}
      />
      <Break
        breakLength={breakLength}
        incrementBreak={incrementBreak}
        decrementBreak={decrementBreak}
      />
      <ControlPanel
        started={started}
        onStop={handleOnStop}
        onStart={handleOnStart}
        onReset={handleOnReset}
      />
      <audio
        ref={myAudio}
        className="audio"
        preload="auto"
        src="https://freesound.org/data/previews/411/411482_2154914-lq.mp3"
      />
    </div>
  );
}

export default PomodoroTimer;

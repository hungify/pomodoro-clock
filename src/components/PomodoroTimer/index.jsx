import React, { useEffect, useRef, useState } from 'react';
import Break from '../Break/index.jsx';
import ControlPanel from '../ControlPanel/index.jsx';
import Session from '../Session/index.jsx';
import Timer from '../Timer/index.jsx';
import './style.scss';

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(5);
  const [timeType, setTimeType] = useState('Session');
  const [sessionLength, setSessionLength] = useState(60);
  const [breakLength, setBreakLength] = useState(30);
  const [started, setStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [ringTime, setRingTime] = useState(5);
  const [ringProgressPercentage, setRingProgressPercentage] = useState(1);
  const [ringIntervalId, setRingIntervalId] = useState(null);

  const myAudio = useRef();
  const context = new AudioContext();

  useEffect(() => {
    const handleSwitch = () => {
      if (timeType === 'Session') {
        setTimeType('Break');
        setRingTime(breakLength * 1);
        setTimeLeft(breakLength * 1);
      } else if (timeType === 'Break') {
        setTimeType('Session');
        setRingTime(sessionLength * 1);
        setTimeLeft(sessionLength * 1);
      }
    };

    if (started && timeLeft >= 0) {
      setRingIntervalId(setInterval(ringProgress(timeLeft, ringTime), 1000));
      setIntervalId(
        setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000)
      );
    } else if (started && timeLeft === -1) {
      // myAudio.current.load();
      handleSwitch();
      myAudio.current.play();
    } else {
      clearInterval(intervalId);
      clearInterval(ringIntervalId);
    }
    return () => {
      clearInterval(intervalId);
      clearInterval(ringIntervalId);
    };
  }, [started, timeLeft]);

  const ringProgress = (timeLeft, ringTime) => {
    const percentage = timeLeft / ringTime;
    console.log({ timeLeft, ringTime, percentage });
    setRingProgressPercentage(timeLeft / ringTime);
  };

  const handleOnStop = () => {
    setStarted(false);
  };

  const handleOnStart = () => {
    setStarted(true);
    context.resume();
  };

  const handleOnReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(1 * 5);
    setRingTime(1 * 5);
    setRingProgressPercentage(1);
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

  return (
    <div className="pomodoro">
      <Timer timeType={timeType} timeLeft={timeLeft} ringProgress={ringProgressPercentage} />
      <ControlPanel
        started={started}
        onStop={handleOnStop}
        onStart={handleOnStart}
        onReset={handleOnReset}
      />
      <div className="pomodoro__label">
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
      </div>

      <audio
        ref={myAudio}
        className="audio"
        src="https://pomofocus.io/audios/alarms/alarm-bell.mp3"
      />
    </div>
  );
}

export default PomodoroTimer;

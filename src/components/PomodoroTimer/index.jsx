import React, { useCallback, useEffect, useRef, useState } from 'react';
import { initialState, sounds } from '../../constants/index.js';
import Break from '../Break/index.jsx';
import ControlPanel from '../ControlPanel/index.jsx';
import Session from '../Session/index.jsx';
import Timer from '../Timer/index.jsx';
import useSound from 'use-sound';
import './style.scss';
const { initTimeLeft, initSessionLength, initBreakLength, initRingTime } = initialState;

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(initTimeLeft);
  const [timeType, setTimeType] = useState('Session');
  const [sessionLength, setSessionLength] = useState(initSessionLength);
  const [ringTime, setRingTime] = useState(initRingTime);
  const [breakLength, setBreakLength] = useState(initBreakLength);
  const [started, setStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [ringProgressPercentage, setRingProgressPercentage] = useState(1);
  const [ringIntervalId, setRingIntervalId] = useState(null);

  const myAudio = useRef();
  const context = new AudioContext();

  const [soundPress, stopSoundPress] = useSound(sounds.press);
  const [soundClick, stopSoundClick] = useSound(sounds.click);
  const [soundTicking, stopSoundTicking] = useSound(sounds.ticking);

  const handleSwitch = () => {
    if (timeType === 'Session') {
      setTimeType('Break');
      setRingTime(breakLength * 60);
      setTimeLeft(breakLength * 60);
    } else if (timeType === 'Break') {
      setTimeType('Session');
      setRingTime(sessionLength * 60);
      setTimeLeft(sessionLength * 60);
    }
  };

  useEffect(() => {
    if (started && timeLeft >= 0) {
      setRingIntervalId(setInterval(ringProgress(timeLeft, ringTime), 1000));
      setIntervalId(
        setInterval(() => {
          setTimeLeft(() => {
            if (timeLeft <= 10) {
              soundTicking();
            } else {
              stopSoundTicking.stop();
            }
            return timeLeft - 1;
          });
        }, 1000)
      );
    } else if (started && timeLeft === -1) {
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
    setRingProgressPercentage(timeLeft / ringTime);
  };

  const handleOnStop = () => {
    if (started) setStarted(false);
  };

  const handleOnStart = () => {
    soundPress();
    const id = setTimeout(() => {
      stopSoundPress.stop();
    }, 1000);
    clearTimeout(id);
    setStarted(true);
    context.resume();
  };

  const handleOnReset = () => {
    if (started) {
      soundPress();
      const id = setTimeout(() => {
        stopSoundPress.stop();
      }, 1000);
      clearTimeout(id);

      setSessionLength(initSessionLength);
      setBreakLength(initBreakLength);
      setTimeLeft(initTimeLeft);

      setRingTime(initRingTime);
      setRingProgressPercentage(1);
      setTimeType('Session');
      setStarted(false);

      myAudio.current.pause();
      myAudio.current.currentTime = 0;
    }
  };

  const incrementSession = () => {
    if (!started) {
      soundClick();
      const id = setTimeout(() => {
        stopSoundClick.stop();
      }, 1000);
      clearTimeout(id);

      setSessionLength(sessionLength + 1);
      setTimeLeft((sessionLength + 1) * 60);
      setRingTime((sessionLength + 1) * 60);
    }
  };
  const decrementSession = () => {
    if (!started && sessionLength > 1) {
      soundClick();
      const id = setTimeout(() => {
        stopSoundClick.stop();
      }, 1000);
      clearTimeout(id);

      setSessionLength(sessionLength - 1);
      setTimeLeft((sessionLength - 1) * 60);
      setRingTime((sessionLength - 1) * 60);
    }
  };
  const incrementBreak = () => {
    if (!started) {
      soundClick();

      const id = setTimeout(() => {
        stopSoundClick.stop();
      }, 1000);
      clearTimeout(id);
      setBreakLength(breakLength + 1);
    }
  };
  const decrementBreak = () => {
    if (!started && breakLength > 1) {
      soundClick();
      const id = setTimeout(() => {
        soundClick.stop();
      }, 1000);
      clearTimeout(id);
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
          started={started}
        />
        <Break
          breakLength={breakLength}
          incrementBreak={incrementBreak}
          decrementBreak={decrementBreak}
          started={started}
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

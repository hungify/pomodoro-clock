import React, { useEffect, useRef, useState } from "react";
import { initialState, sounds, TimeType } from "../../constants";
import Break from "../Break";
import ControlPanel from "../ControlPanel";
import Session from "../Session";
import Timer from "../Timer";
import useSound from "use-sound";
import styled from "styled-components";
const { initTimeLeft, initSessionLength, initBreakLength, initRingTime } = initialState;

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState<number>(initTimeLeft);
  const [timeType, setTimeType] = useState<TimeType>(TimeType.SESSION);
  const [sessionLength, setSessionLength] = useState<number>(initSessionLength);
  const [ringTime, setRingTime] = useState<number>(initRingTime);
  const [breakLength, setBreakLength] = useState<number>(initBreakLength);
  const [started, setStarted] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number>();
  const [ringProgressPercentage, setRingProgressPercentage] = useState<number>(1);
  const [ringIntervalId, setRingIntervalId] = useState<number>();

  const myAudio = useRef<HTMLAudioElement>() as React.MutableRefObject<HTMLAudioElement>;
  const context = new AudioContext();

  const [soundPress, stopSoundPress] = useSound(sounds.press);
  const [soundClick, stopSoundClick] = useSound(sounds.click);
  const [soundTicking, stopSoundTicking] = useSound(sounds.ticking);

  useEffect(() => {
    const handleSwitch = () => {
      if (timeType === TimeType.SESSION) {
        setTimeType(TimeType.BREAK);
        setRingTime(breakLength * 60);
        setTimeLeft(breakLength * 60);
      } else if (timeType === TimeType.BREAK) {
        setTimeType(TimeType.SESSION);
        setRingTime(sessionLength * 60);
        setTimeLeft(sessionLength * 60);
      }
    };
    if (started && timeLeft >= 0) {
      setRingIntervalId(window.setInterval(() => ringProgress(timeLeft, ringTime), 1000));
      setIntervalId(
        window.setInterval(() => {
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
      window.clearInterval(intervalId);
      window.clearInterval(ringIntervalId);
    }
    return () => {
      window.clearInterval(intervalId);
      window.clearInterval(ringIntervalId);
    };
  }, [started, timeLeft, ringTime, soundTicking, breakLength, sessionLength, timeType]);

  const ringProgress = (timeLeft: number, ringTime: number) => {
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
      setTimeType(TimeType.SESSION);
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
        stopSoundClick.stop();
      }, 1000);
      clearTimeout(id);
      setBreakLength(breakLength - 1);
    }
  };

  return (
    <PomodoroContainer>
      <Timer
        timeType={timeType}
        timeLeft={timeLeft}
        ringProgress={ringProgressPercentage}
      />
      <ControlPanel
        started={started}
        onStop={handleOnStop}
        onStart={handleOnStart}
        onReset={handleOnReset}
      />
      <PomodoroLabel>
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
      </PomodoroLabel>

      <audio
        ref={myAudio}
        className="audio"
        src="https://pomofocus.io/audios/alarms/alarm-bell.mp3"
      />
    </PomodoroContainer>
  );
}

export default PomodoroTimer;

const PomodoroContainer = styled.div`
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 16%,
    rgba(148, 187, 233, 1) 100%
  );
  height: 100vh;
`;

const PomodoroLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

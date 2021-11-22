import { circle, TimeType } from "../../constants";
import { formatTime } from "../../helpers/helpers";
import CircleIcon from "../Icons/Circle";
import styled from "styled-components";

type timerProps = {
  timeType: TimeType;
  timeLeft: number;
  ringProgress: number;
};

function Timer({ timeType, timeLeft, ringProgress }: timerProps) {
  const { radius, strokeWidth } = circle;

  const actualRadius = radius - strokeWidth;

  const circumference: number = actualRadius * 2 * Math.PI;

  const strokeDashoffset: number = -(1 - ringProgress) * circumference;

  const timeLeftCurrent = formatTime(timeLeft);

  return (
    <TimerContainer>
      <TimerWrapper>
        <CircleIcon
          actualRadius={actualRadius}
          circumference={circumference}
          radius={radius}
          strokeDashoffset={strokeDashoffset}
          strokeWidth={strokeWidth}
        />
        <TimerBody>
          <TimerLabel>{TimeType[timeType]}</TimerLabel>
          <TimerLeft>{timeLeftCurrent}</TimerLeft>
          <TimerTitle>
            {timeType === TimeType.SESSION ? "It's time to work!" : "Time for a break!"}
          </TimerTitle>
        </TimerBody>
      </TimerWrapper>
    </TimerContainer>
  );
}

export default Timer;

const TimerContainer = styled.div`
  max-width: 480px;
  margin: auto;
`;

const TimerWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px 0px 15px;
  border-radius: 6px;
  position: relative;
  transform: translateY(3%);
  width: 100%;
`;

const TimerBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  color: #ededed;
  letter-spacing: 3px;
`;

const TimerLabel = styled.div`
  font-size: 19px;
  text-align: center;
`;

const TimerLeft = styled.p`
  font-size: 65px;
  margin: 40px 0;
  text-align: center;
  &:hover {
    background: linear-gradient(
      57deg,
      #76e650 -1.13%,
      #f9d649 15.22%,
      #f08e35 32.09%,
      #ec5157 48.96%,
      #ff18bd 67.94%,
      #1a4bff 85.34%,
      #62d8f9 99.57%
    );
    color: rgba(255, 255, 255, 0);
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const TimerTitle = styled.p`
  text-transform: initial;
  font-size: 22px;
  margin: 0;

  background: #12c2e9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: rgba(255, 255, 255, 0);
  -webkit-background-clip: text;
  background-clip: text;
`;

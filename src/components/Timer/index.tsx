import { circle, TimeType } from "../../constants";
import { formatTime } from "../../helpers/helpers";
import CircleIcon from "../Icons/Circle";
import "./style.scss";

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
    <div className="time">
      <div className="time__modal">
        <CircleIcon
          actualRadius={actualRadius}
          circumference={circumference}
          radius={radius}
          strokeDashoffset={strokeDashoffset}
          strokeWidth={strokeWidth}
        />
        <div className="time__inner">
          <p className="time__label text-center">{TimeType[timeType]}</p>
          <p className="time__left text-center">{timeLeftCurrent}</p>
          <p className="time__title text-center">
            {timeType === TimeType.SESSION ? "It's time to work!" : "Time for a break!"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timer;

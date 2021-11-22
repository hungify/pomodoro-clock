import styled from "styled-components";

interface CircleProps {
  strokeWidth: number;
  circumference: number;
  strokeDashoffset: number;
  actualRadius: number;
  radius: number;
}

function CircleIcon({
  strokeWidth,
  circumference,
  strokeDashoffset,
  actualRadius,
  radius,
}: CircleProps) {
  return (
    <SVGContainer height="365" width="365">
      <CircleSurface
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + circumference}
        style={{ strokeDashoffset }}
        r={actualRadius}
        cx={radius}
        cy={radius}
      />
      <CircleDownside
        strokeOpacity="20%"
        strokeWidth={strokeWidth}
        r={actualRadius}
        cx={radius}
        cy={radius}
      />
    </SVGContainer>
  );
}

export default CircleIcon;

const ColorCircle = {
  strokeColor: "#e94057",
  fillColor: "#e99497",
  textColor: "#ededed",
};

const SVGContainer = styled.svg`
  margin-top: 10px;
`;

const Circle = styled.circle`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-dashoffset: 0;
  transition: all 1s linear;
`;

const CircleSurface = styled(Circle)`
  stroke: ${ColorCircle.strokeColor};
  fill: ${ColorCircle.fillColor};
`;

const CircleDownside = styled(Circle)`
  fill: transparent;
  stroke: ${ColorCircle.strokeColor};
`;

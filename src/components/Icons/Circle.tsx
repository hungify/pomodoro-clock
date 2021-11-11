import React from "react";

CircleIcon.propTypes = {};

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
    <svg className="time__progress-ring" height="365" width="365">
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
  );
}

export default CircleIcon;

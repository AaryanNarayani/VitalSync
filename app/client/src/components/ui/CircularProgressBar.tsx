import React from "react";

const CircularProgressBar = ({
  percentage,
  radiusInput = 25,
  strokeInput = 7,
  size = 240,
  showtext = true,
  startAngle = 90, 
  title,
  value,
  unit,

}:any) => {
  const radius = radiusInput;
  const strokeWidth = strokeInput;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  
  const color = percentage > 0 && percentage <= 25 ? '#E54335' : 
                percentage > 25 && percentage <= 75 ? '#F6B704' :
                '#34A353';

  const rotationTransform = `rotate(${startAngle}, 50, 50)`;
  
  return (
    <div className="relative flex flex-col items-center" style={{ width: size, height: size }}>
        <h1 className="text-[25px] absolute">{title}</h1>
        <h1 className="text-[15px] absolute top-[125px] text-[--light-text]">{unit}</h1>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="circular-progress-bar"
      >
        {/* Background circle */}
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth={strokeWidth}
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          transform={rotationTransform}
        />

        {/* Progress circle */}
        <circle
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={rotationTransform}
        />

        {showtext && (
          <>
            {/* Main value */}
            <text
              x="50"
              y="50"
              fontSize="10"
              fill="black"
              textAnchor="middle"
              dominantBaseline="middle"
              className=""
            >
              {value}
            </text>
          </>
        )}
      </svg>
    </div>
  );
};

export default CircularProgressBar;
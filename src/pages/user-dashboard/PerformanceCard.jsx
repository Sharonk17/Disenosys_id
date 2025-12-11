import React, { useEffect, useState } from "react";

const PerformanceGauge = ({ score = 0, period = "Monthly" }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  // Clamp score between 0 and 10
  const clampedScore = Math.min(Math.max(score, 0), 10);

  // Animate score smoothly
  useEffect(() => {
    const duration = 1500; // 1.5 seconds
    const steps = 60;
    const increment = clampedScore / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= clampedScore) {
        setAnimatedScore(clampedScore);
        clearInterval(timer);
      } else {
        setAnimatedScore(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [clampedScore]);

  // === Geometry ===
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const arcLength = (180 / 360) * circumference; // 180° semicircle
  const progressLength = (animatedScore / 10) * arcLength;

  // === Needle rotation===
  // 0 → -180°, 10 → 0°
  const rotation = (animatedScore / 10) * 180 - 180;

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#1a1f4d] rounded-sm"></div>
          <h3 className="text-sm font-semibold text-gray-800">
            Assignment Submission Performance
          </h3>
        </div>
        <div className="px-4 py-1 bg-gray-100 rounded-md">
          <span className="text-sm text-gray-600">{period}</span>
        </div>
      </div>

      {/* Gauge */}
      <div className="relative w-64 h-48">
        <svg viewBox="0 0 200 150" className="w-full h-full">
          {/* Background Arc */}
          <path
            d="M 30 120 A 70 70 0 1 1 170 120"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="16"
            strokeLinecap="round"
          />

          {/* Progress Arc */}
          <path
            d="M 30 120 A 70 70 0 1 1 170 120"
            fill="none"
            stroke="#00aeff"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={arcLength}
            strokeDashoffset={arcLength - progressLength}
            style={{
              transition: "stroke-dashoffset 0.3s ease-out",
            }}
          />

          {/* Scale Markers (0–10 spaced evenly) */}
          {[0, 2, 4, 6, 8, 10].map((mark) => {
            const angle = (mark / 10) * 180 - 180; // same range as needle
            const rad = (angle * Math.PI) / 180;
            const x1 = 100 + Math.cos(rad) * 65;
            const y1 = 120 + Math.sin(rad) * 65;
            const x2 = 100 + Math.cos(rad) * 75;
            const y2 = 120 + Math.sin(rad) * 75;

            return (
              <g key={mark}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#9ca3af"
                  strokeWidth="2"
                />
                <text
                  x={100 + Math.cos(rad) * 55}
                  y={120 + Math.sin(rad) * 55 + 4}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#6b7280"
                  fontWeight="500"
                >
                  {mark}
                </text>
              </g>
            );
          })}

          {/* Center Hub */}
          <circle
            cx="100"
            cy="120"
            r="10"
            fill="white"
            stroke="#00b9e7"
            strokeWidth="3"
          />

          {/* Needle */}
          <line
            x1="100"
            y1="120"
            x2="100"
            y2="55"
            stroke="#8b92c8"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              transformOrigin: "100px 120px",
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.5s ease-out",
            }}
          />
        </svg>
      </div>

      {/* Value Display */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500 mb-1">Your Grade:</p>
        <p className="text-3xl font-bold text-gray-800">
          {animatedScore.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default PerformanceGauge;

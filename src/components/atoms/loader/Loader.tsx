import React from 'react';

type Props = {
  color?: string;
  size?: number;
  className?: string;
};

export default function Loader({
  className,
  size = 46,
  color = '#0E66FF',
}: Props) {
  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin">
        <g id="Frame 288">
          <circle
            id="Ellipse 6"
            cx="23.0005"
            cy="23.0007"
            r="20"
            transform="rotate(157 23.0005 23.0007)"
            stroke={color}
            strokeWidth="4"
          />
          <circle
            id="Ellipse 7"
            cx="23.0005"
            cy="23.0011"
            r="20"
            transform="rotate(-125.991 23.0005 23.0011)"
            stroke="url(#paint0_radial_719_4439)"
            strokeWidth="4"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_719_4439"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(23.0007 1.00207) rotate(90) scale(44)">
            <stop stopColor="white" stopOpacity="0.9" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

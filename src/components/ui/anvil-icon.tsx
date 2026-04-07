import React from "react";

interface AnvilIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const AnvilIcon: React.FC<AnvilIconProps> = ({
  className = "",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Anvil base */}
      <rect x="20" y="45" width="60" height="10" rx="2" fill="currentColor" />
      {/* Anvil body - main section */}
      <path
        d="M25 45 L30 35 L70 35 L75 45 Z"
        fill="currentColor"
      />
      {/* Anvil face (top working surface) */}
      <rect x="30" y="25" width="40" height="10" fill="currentColor" />
      {/* Anvil horn (tapered left end) */}
      <path
        d="M30 25 L15 30 L18 38 L30 35 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Anvil heel (tapered right end) */}
      <path
        d="M70 25 L85 30 L82 38 L70 35 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Hardie hole (square hole in face) */}
      <rect x="45" y="28" width="8" height="4" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
};

import React from "react";
import "./button.css";

export interface ButtonProps {
  /** Button size */
  size?: "md" | "lg";
  /** Button hierarchy type */
  hierarchy?: "primary" | "secondary-gray";
  /** Whether this is a destructive action */
  destructive?: boolean;
  /** Button state */
  state?: "default" | "hover" | "focused" | "disabled";
  /** Show trailing icon */
  showIcon?: boolean;
  /** Button contents */
  children: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Custom className */
  className?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  size = "md",
  hierarchy = "primary",
  destructive = false,
  state = "default",
  showIcon = false,
  children,
  disabled = false,
  className = "",
  ...props
}: ButtonProps) => {
  const baseClass = "nexus-button";
  const sizeClass = `nexus-button--${size}`;
  const hierarchyClass = `nexus-button--${hierarchy}`;
  const destructiveClass = destructive ? "nexus-button--destructive" : "";
  const stateClass = state !== "default" ? `nexus-button--${state}` : "";
  const iconClass = showIcon ? "nexus-button--with-icon" : "";
  const disabledClass = disabled ? "nexus-button--disabled" : "";

  const classes = [
    baseClass,
    sizeClass,
    hierarchyClass,
    destructiveClass,
    stateClass,
    iconClass,
    disabledClass,
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      {...props}
    >
      <span className="nexus-button__text">{children}</span>
      {showIcon && (
        <svg 
          className="nexus-button__icon" 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_8853_437)">
            <path 
              d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z" 
              stroke="currentColor" 
              strokeWidth="1.67" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_8853_437">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
};

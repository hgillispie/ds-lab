import React, { ReactNode } from "react";
import "./button.css";

export interface ButtonProps {
  /** Button text content */
  children: ReactNode;
  /** Button size variant */
  size?: "md" | "lg";
  /** Button hierarchy/style variant */
  hierarchy?: "primary" | "secondary-gray";
  /** Whether this is a destructive action */
  destructive?: boolean;
  /** Whether to show trailing icon */
  icon?: boolean;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Button type */
  type?: "button" | "submit" | "reset";
}

const CircleIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_circle)">
      <path 
        d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z" 
        stroke={color} 
        strokeWidth="1.67" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_circle">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

/** 
 * Button component with comprehensive variants matching Figma design
 * 
 * Supports multiple sizes, hierarchies, destructive states, and interactive states
 */
export const Button = ({
  children,
  size = "md",
  hierarchy = "primary",
  destructive = false,
  icon = false,
  disabled = false,
  onClick,
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  const baseClass = "nexus-button";
  const sizeClass = `nexus-button--${size}`;
  const hierarchyClass = `nexus-button--${hierarchy}`;
  const destructiveClass = destructive ? "nexus-button--destructive" : "";
  const iconClass = icon ? "nexus-button--with-icon" : "";
  const disabledClass = disabled ? "nexus-button--disabled" : "";

  const classes = [
    baseClass,
    sizeClass,
    hierarchyClass,
    destructiveClass,
    iconClass,
    disabledClass,
    className
  ].filter(Boolean).join(" ");

  // Determine icon color based on hierarchy, destructive state, and disabled state
  const getIconColor = () => {
    if (disabled) {
      if (hierarchy === "primary") return "#FFF";
      return destructive ? "#67E8F9" : "#D5D7DA";
    }
    
    if (hierarchy === "primary") return "#FFF";
    return destructive ? "#0891B2" : "#414651";
  };

  return (
    <button
      type={type}
      className={classes}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      <span className="nexus-button__text">{children}</span>
      {icon && (
        <CircleIcon color={getIconColor()} />
      )}
    </button>
  );
};

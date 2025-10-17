import React from "react";
import "./button.css";

export interface ButtonProps {
  /** Size of the button */
  size?: "md" | "lg";
  /** Visual hierarchy style */
  hierarchy?: "primary" | "secondary-gray";
  /** Show trailing icon */
  icon?: boolean;
  /** Destructive action styling (cyan theme) */
  destructive?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Button text content */
  children: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/** Production-ready Button component matching Figma design system */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "md",
      hierarchy = "primary",
      icon = false,
      destructive = false,
      disabled = false,
      children,
      onClick,
      className = "",
      ...props
    },
    ref
  ) => {
    const classNames = [
      "button-base",
      `button-size--${size}`,
      `button-hierarchy--${hierarchy}`,
      destructive ? "button-destructive" : "",
      disabled ? "button-disabled" : "",
      icon ? "button-with-icon" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type="button"
        className={classNames}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        <span className="button-text">{children}</span>
        {icon && (
          <svg
            className="button-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

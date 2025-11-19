import React from "react";
import "./button.css";

export interface ButtonProps {
  /**
   * Size variant of the button
   * @default 'md'
   */
  size?: "md" | "lg";
  
  /**
   * Visual hierarchy style
   * @default 'primary'
   */
  hierarchy?: "primary" | "secondary-gray";
  
  /**
   * Shows a trailing icon
   * @default false
   */
  icon?: boolean;
  
  /**
   * Destructive action styling (uses cyan accent colors)
   * @default false
   */
  destructive?: boolean;
  
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Button text content
   */
  children: React.ReactNode;
  
  /**
   * Click handler
   */
  onClick?: () => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Test ID for testing
   */
  "data-testid"?: string;
}

/**
 * Button component from the Nexus Design System
 * 
 * A flexible button component supporting multiple variants, sizes, and states.
 * Use primary hierarchy for main actions, secondary-gray for less prominent actions.
 * Set destructive to true for actions that cannot be undone.
 * 
 * @example
 * ```tsx
 * <Button size="md" hierarchy="primary">
 *   Click me
 * </Button>
 * 
 * <Button size="lg" hierarchy="secondary-gray" icon destructive>
 *   Delete
 * </Button>
 * ```
 */
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
      "data-testid": dataTestId,
      ...props
    },
    ref
  ) => {
    const classNames = [
      "button",
      `button--${size}`,
      `button--${hierarchy}`,
      icon && "button--with-icon",
      destructive && "button--destructive",
      disabled && "button--disabled",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type="button"
        className={classNames}
        onClick={onClick}
        disabled={disabled}
        data-testid={dataTestId}
        aria-disabled={disabled}
        {...props}
      >
        <span className="button__text">{children}</span>
        {icon && (
          <svg
            className="button__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g clipPath="url(#clip0_button_icon)">
              <path
                d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_button_icon">
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

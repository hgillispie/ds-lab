import React, { forwardRef } from "react";
import "./button.css";

export type ButtonSize = "md" | "lg";
export type ButtonHierarchy = "primary" | "secondary-gray";
export type ButtonIconPosition = "none" | "trailing";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Size of the button */
  size?: ButtonSize;
  /**
   * Visual hierarchy level.
   * - `primary`: filled background, high emphasis
   * - `secondary-gray`: outlined with gray border, medium emphasis
   */
  hierarchy?: ButtonHierarchy;
  /**
   * Whether to show a trailing circle icon.
   * When `true`, a circular icon is rendered after the label.
   */
  trailingIcon?: boolean;
  /**
   * Applies the destructive/error color scheme.
   * Primary destructive uses cyan tones; secondary-gray destructive uses cyan border/text.
   */
  destructive?: boolean;
  /** Text label displayed inside the button */
  label?: string;
}

const CircleIcon = () => (
  <svg
    className="btn__trailing-icon"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <g clipPath="url(#btn-icon-clip)">
      <path
        d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="btn-icon-clip">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

/**
 * Button component for primary user interactions.
 *
 * Supports two sizes (`md`, `lg`), two hierarchy levels (`primary`, `secondary-gray`),
 * a destructive color variant, an optional trailing icon, and all interactive states
 * (default, hover, focused, disabled).
 *
 * @example
 * <Button label="Save changes" hierarchy="primary" size="md" />
 * <Button label="Delete" hierarchy="primary" destructive trailingIcon />
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "md",
      hierarchy = "primary",
      trailingIcon = false,
      destructive = false,
      disabled = false,
      label = "Button CTA",
      className,
      ...rest
    },
    ref
  ) => {
    const classes = [
      "btn",
      `btn--${size}`,
      `btn--${hierarchy}`,
      destructive ? "btn--destructive" : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type="button"
        className={classes}
        disabled={disabled}
        aria-disabled={disabled}
        data-testid="button"
        {...rest}
      >
        <span className="btn__label">{label}</span>
        {trailingIcon && <CircleIcon />}
      </button>
    );
  }
);

Button.displayName = "Button";

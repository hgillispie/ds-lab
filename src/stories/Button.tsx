import React, { forwardRef } from "react";
import "./button.css";

export type ButtonSize = "md" | "lg";
export type ButtonHierarchy = "primary" | "secondary-gray";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Size variant of the button.
   * - `md`: 14px font, 10px 16px padding
   * - `lg`: 16px font, 10px 18px padding
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Visual hierarchy of the button.
   * - `primary`: Filled, high-emphasis button
   * - `secondary-gray`: Outlined, lower-emphasis button
   * @default 'primary'
   */
  hierarchy?: ButtonHierarchy;
  /**
   * When true, applies the destructive (cyan) color scheme
   * to communicate a significant or dangerous action.
   * @default false
   */
  destructive?: boolean;
  /**
   * When true, renders a trailing circle icon after the label.
   * @default false
   */
  trailingIcon?: boolean;
  /**
   * Label text rendered inside the button.
   * @default 'Button CTA'
   */
  label?: string;
}

/** Trailing circle icon used in button variants with icon */
const CircleIcon = () => (
  <svg
    className="btn__trailing-icon"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Primary UI component for user interaction.
 *
 * Supports two sizes (`md`, `lg`), two hierarchy levels (`primary`, `secondary-gray`),
 * a destructive color scheme, optional trailing icon, and all interactive states
 * (hover, focus, disabled) via CSS.
 *
 * @example
 * ```tsx
 * <Button label="Save Changes" size="md" hierarchy="primary" />
 * <Button label="Delete" hierarchy="primary" destructive />
 * <Button label="Cancel" hierarchy="secondary-gray" trailingIcon />
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "md",
      hierarchy = "primary",
      destructive = false,
      trailingIcon = false,
      label = "Button CTA",
      children,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const classes = [
      "btn",
      `btn--${size}`,
      `btn--${hierarchy}`,
      destructive ? "btn--destructive" : "",
      className,
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
        {...props}
      >
        <span className="btn__label">{children ?? label}</span>
        {trailingIcon && <CircleIcon />}
      </button>
    );
  }
);

Button.displayName = "Button";

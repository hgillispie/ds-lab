import React, { forwardRef } from "react";
import "./button.css";

export type ButtonSize = "md" | "lg";
export type ButtonHierarchy = "primary" | "secondary-gray";
export type ButtonIconPosition = "none" | "trailing";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Size of the button. `md` uses 14px text, `lg` uses 16px text.
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Visual hierarchy: `primary` is a filled button, `secondary-gray` is an outlined button.
   * @default 'primary'
   */
  hierarchy?: ButtonHierarchy;
  /**
   * When true, applies the destructive (cyan) color palette to signal a dangerous action.
   * @default false
   */
  destructive?: boolean;
  /**
   * Position of the icon. Use `trailing` to show a circle icon after the label.
   * @default 'none'
   */
  icon?: ButtonIconPosition;
  /**
   * Text label displayed inside the button.
   * @default 'Button CTA'
   */
  label?: string;
}

/** Circle SVG icon used for trailing icon variant */
const CircleIcon = () => (
  <svg
    className="btn__icon"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6023 18.3332 9.99996C18.3332 5.39759 14.6022 1.66663 9.99984 1.66663C5.39746 1.66663 1.6665 5.39759 1.6665 9.99996C1.6665 14.6023 5.39746 18.3333 9.99984 18.3333Z"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Primary UI component for user interactions. Supports two sizes, two hierarchies,
 * a destructive mode, trailing icon, and all interactive states.
 *
 * @example
 * <Button label="Save changes" hierarchy="primary" size="md" />
 * <Button label="Delete" hierarchy="primary" destructive size="lg" icon="trailing" />
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "md",
      hierarchy = "primary",
      destructive = false,
      icon = "none",
      label = "Button CTA",
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = [
      "btn",
      `btn--${size}`,
      `btn--${hierarchy}`,
      destructive ? "btn--destructive" : "",
      className || "",
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
        {icon === "trailing" && <CircleIcon />}
      </button>
    );
  }
);

Button.displayName = "Button";

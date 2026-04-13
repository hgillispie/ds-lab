import React, { forwardRef } from "react";
import "./button.css";

// ── Types ──────────────────────────────────────────────────────────────────

/** Visual hierarchy of the button */
export type ButtonHierarchy = "primary" | "secondary-gray";

/** Size of the button */
export type ButtonSize = "md" | "lg";

/** Icon position relative to label */
export type ButtonIconPosition = "none" | "trailing";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual hierarchy level.
   * - `primary` — dark filled button, main call-to-action
   * - `secondary-gray` — outlined button with gray border
   * @default "primary"
   */
  hierarchy?: ButtonHierarchy;

  /**
   * Size of the button.
   * - `md` — 14px text, 10px/16px padding
   * - `lg` — 16px text, 10px/18px padding
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * When true, applies the accent (cyan) destructive colour scheme.
   * @default false
   */
  destructive?: boolean;

  /**
   * Whether and where to render an icon.
   * - `none` — text only
   * - `trailing` — icon appears after the label
   * @default "none"
   */
  icon?: ButtonIconPosition;

  /**
   * Text label rendered inside the button.
   * Overridden by `children` if both are provided.
   * @default "Button CTA"
   */
  label?: string;

  /**
   * Custom element to render as the trailing icon.
   * Defaults to the circle icon from the Figma design when `icon="trailing"`.
   */
  trailingIcon?: React.ReactNode;
}

// ── Default circle icon (from Figma design) ────────────────────────────────

const CircleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 18.333C14.602 18.333 18.333 14.602 18.333 10C18.333 5.398 14.602 1.667 10 1.667C5.398 1.667 1.667 5.398 1.667 10C1.667 14.602 5.398 18.333 10 18.333Z"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Component ──────────────────────────────────────────────────────────────

/**
 * `Button` — primary interactive element for the Nexus Design System.
 *
 * Supports two hierarchies (`primary`, `secondary-gray`), two sizes (`md`, `lg`),
 * destructive colour variants, and optional trailing icons.
 *
 * All native `<button>` attributes are forwarded, including `disabled`, `type`,
 * `aria-*` and event handlers.
 *
 * @example
 * // Primary CTA
 * <Button label="Save changes" />
 *
 * @example
 * // Destructive secondary with trailing icon
 * <Button hierarchy="secondary-gray" destructive icon="trailing" label="Delete" />
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      hierarchy = "primary",
      size = "md",
      destructive = false,
      icon = "none",
      label = "Button CTA",
      trailingIcon,
      disabled,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const classes = [
      "btn",
      `btn--${hierarchy}`,
      `btn--${size}`,
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
        data-testid="button"
        {...rest}
      >
        <span className="btn__label">{children ?? label}</span>

        {icon === "trailing" && (
          <span className="btn__icon">
            {trailingIcon ?? <CircleIcon />}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

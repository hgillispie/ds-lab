import React, { forwardRef } from "react";
import "./button.css";

/** Size of the button — md (14px) or lg (16px) */
export type ButtonSize = "md" | "lg";

/** Visual hierarchy of the button */
export type ButtonHierarchy = "primary" | "secondary-gray";

/** Icon position — none or trailing */
export type ButtonIconPosition = "none" | "trailing";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Size of the button.
   * - `md`: 14px font, 10px/16px padding
   * - `lg`: 16px font, 10px/18px padding
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Visual hierarchy style.
   * - `primary`: solid dark background
   * - `secondary-gray`: outlined with light border
   * @default "primary"
   */
  hierarchy?: ButtonHierarchy;

  /**
   * When true, applies the destructive (cyan/teal) color scheme.
   * For primary buttons: cyan fill. For secondary-gray: cyan border + teal text.
   * @default false
   */
  destructive?: boolean;

  /**
   * Controls icon display.
   * - `none`: no icon
   * - `trailing`: circle icon placed after the label
   * @default "none"
   */
  icon?: ButtonIconPosition;

  /**
   * Label text displayed inside the button.
   * @default "Button CTA"
   */
  label?: string;
}

/** Circle SVG icon used as trailing icon in the design */
const CircleIcon = () => (
  <svg
    className="btn__icon"
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
        d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z"
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
 * Button component for the Nexus Design System.
 *
 * Supports two sizes (md/lg), two hierarchies (primary/secondary-gray),
 * a destructive color variant, and an optional trailing icon.
 * All interactive states (hover, focus, disabled) are handled via CSS.
 *
 * @example
 * <Button label="Save changes" size="md" hierarchy="primary" />
 * <Button label="Delete" hierarchy="primary" destructive />
 * <Button label="Cancel" hierarchy="secondary-gray" icon="trailing" />
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "md",
      hierarchy = "primary",
      destructive = false,
      icon = "none",
      label = "Button CTA",
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classNames = [
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
        className={classNames}
        disabled={disabled}
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

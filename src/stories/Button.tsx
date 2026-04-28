import React from "react";
import "./button.css";

export type ButtonSize = "md" | "lg";
export type ButtonHierarchy = "primary" | "secondary-gray";
export type ButtonIconPosition = "none" | "trailing";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The text label displayed inside the button */
  label: string;
  /** Controls the size of the button. md = 14px text, lg = 16px text */
  size?: ButtonSize;
  /** Visual hierarchy: primary uses a filled background, secondary-gray uses a bordered style */
  hierarchy?: ButtonHierarchy;
  /** When true, applies the destructive (cyan) color theme */
  destructive?: boolean;
  /** Position of the trailing icon. Use 'trailing' to show an icon after the label */
  icon?: ButtonIconPosition;
}

const CircleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="btn-trailing-icon"
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
 * Button component for the Nexus Design System.
 *
 * Supports two sizes (md, lg), two hierarchy levels (primary, secondary-gray),
 * destructive (cyan accent) color theming, optional trailing icon, and all
 * interactive states: default, hover, focused, and disabled.
 *
 * @example
 * <Button label="Button CTA" hierarchy="primary" size="md" />
 * <Button label="Button CTA" hierarchy="primary" destructive size="lg" icon="trailing" />
 * <Button label="Button CTA" hierarchy="secondary-gray" disabled />
 */
export const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        label,
        size = "md",
        hierarchy = "primary",
        destructive = false,
        icon = "none",
        disabled = false,
        className,
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
          aria-disabled={disabled}
          data-testid="button"
          {...props}
        >
          <span className="btn-label">{label}</span>
          {icon === "trailing" && <CircleIcon />}
        </button>
      );
    }
  )
);

Button.displayName = "Button";

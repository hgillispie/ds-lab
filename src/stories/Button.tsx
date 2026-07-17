import { forwardRef, useId } from "react";
import "./button.css";
import type { ButtonProps } from "./Button.types";

export type { ButtonProps, ButtonSize, ButtonHierarchy, ButtonIcon } from "./Button.types";

/** Default placeholder icon shown in the trailing icon slot. */
const DefaultTrailingIcon = () => {
  const clipId = useId();
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z"
          stroke="currentColor"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

/**
 * Button is the primary interactive control for triggering an action.
 *
 * @example
 * ```tsx
 * <Button hierarchy="primary" size="md">Button CTA</Button>
 * <Button hierarchy="secondary-gray" icon="trailing" destructive>Button CTA</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "md",
      hierarchy = "primary",
      icon = "none",
      trailingIcon,
      destructive = false,
      className,
      type = "button",
      disabled,
      ...props
    },
    ref,
  ) => {
    const classNames = [
      "btn",
      `btn--${size}`,
      `btn--${hierarchy}`,
      destructive && "btn--destructive",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type={type}
        className={classNames}
        disabled={disabled}
        aria-disabled={disabled || undefined}
        data-testid="button"
        {...props}
      >
        <span className="btn__label">{children}</span>
        {icon === "trailing" && (
          <span className="btn__icon" data-testid="button-icon">
            {trailingIcon ?? <DefaultTrailingIcon />}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

import React from 'react';
import './button.css';

export interface ButtonProps {
  /** Button size */
  size?: 'md' | 'lg';
  /** Button hierarchy/variant */
  hierarchy?: 'primary' | 'secondary-gray';
  /** Whether to show trailing icon */
  icon?: boolean;
  /** Destructive variant (cyan color scheme) */
  destructive?: boolean;
  /** Button state */
  state?: 'default' | 'hover' | 'focused' | 'disabled';
  /** Button label text */
  label?: string;
  /** Button children (alternative to label) */
  children?: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Button component with multiple variants matching the design system
 * 
 * Supports:
 * - Two sizes: md (default), lg
 * - Two hierarchies: primary, secondary-gray
 * - Optional trailing icon
 * - Destructive variant
 * - Multiple states: default, hover, focused, disabled
 */
export const Button = ({
  size = 'md',
  hierarchy = 'primary',
  icon = false,
  destructive = false,
  state = 'default',
  label = 'Button CTA',
  children,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  const classNames = [
    'nexus-button',
    `nexus-button--${size}`,
    `nexus-button--${hierarchy}`,
    destructive ? 'nexus-button--destructive' : '',
    icon ? 'nexus-button--with-icon' : '',
    state !== 'default' ? `nexus-button--${state}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  const isDisabled = disabled || state === 'disabled';

  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      <span className="nexus-button__text">{children || label}</span>
      {icon && (
        <svg
          className="nexus-button__icon"
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
};

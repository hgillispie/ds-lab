import React from 'react';
import "./button.css";

export interface ButtonProps {
  /** Button size - controls padding and font size */
  size?: 'md' | 'lg';
  /** Button hierarchy - visual importance and styling */
  hierarchy?: 'primary' | 'secondary-gray';
  /** Whether to show a trailing icon */
  icon?: boolean;
  /** Whether this is a destructive action (uses cyan/teal colors) */
  destructive?: boolean;
  /** Button state - affects styling and interactivity */
  state?: 'default' | 'hover' | 'focused' | 'disabled';
  /** Button text content */
  children: React.ReactNode;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Optional click handler */
  onClick?: () => void;
  /** Additional CSS class names */
  className?: string;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button component with comprehensive variants based on design system
 * 
 * Supports multiple sizes, hierarchies, states, and destructive variants.
 * Includes optional trailing icon support and full accessibility features.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  size = 'md',
  hierarchy = 'primary',
  icon = false,
  destructive = false,
  state = 'default',
  children,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  ...props
}: ButtonProps, ref) => {
  // Build CSS class names based on props
  const classes = [
    'button',
    `button--size-${size}`,
    `button--hierarchy-${hierarchy}`,
    destructive ? 'button--destructive' : 'button--normal',
    state !== 'default' ? `button--state-${state}` : '',
    icon ? 'button--with-icon' : '',
    disabled ? 'button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  // Handle state interactions
  const isDisabled = disabled || state === 'disabled';
  const isFocused = state === 'focused';
  const isHovered = state === 'hover';

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={isDisabled}
      onClick={!isDisabled ? onClick : undefined}
      data-testid="button"
      {...props}
    >
      <span className="button__text">
        {children}
      </span>
      {icon && (
        <svg 
          className="button__icon" 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_button_icon)">
            <path 
              d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z" 
              stroke="currentColor" 
              strokeWidth="1.67" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_button_icon">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
});

Button.displayName = 'Button';

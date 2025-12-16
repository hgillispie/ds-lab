import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * The size of the button
   */
  size?: 'md' | 'lg';
  
  /**
   * The visual hierarchy of the button
   */
  hierarchy?: 'primary' | 'secondary-gray';
  
  /**
   * Whether this is a destructive action (uses cyan color scheme)
   */
  destructive?: boolean;
  
  /**
   * Whether to show a trailing icon
   */
  icon?: 'none' | 'trailing';
  
  /**
   * The disabled state of the button
   */
  disabled?: boolean;
  
  /**
   * Button label text
   */
  children: React.ReactNode;
  
  /**
   * Optional click handler
   */
  onClick?: () => void;
  
  /**
   * Optional test id for testing
   */
  'data-testid'?: string;
}

/**
 * Primary UI component for user interaction.
 * Supports multiple sizes, hierarchies, and states including destructive actions.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'md',
      hierarchy = 'primary',
      destructive = false,
      icon = 'none',
      disabled = false,
      children,
      onClick,
      'data-testid': dataTestId,
      ...props
    },
    ref
  ) => {
    const classNames = [
      'button',
      `button--${size}`,
      `button--${hierarchy}`,
      destructive && 'button--destructive',
      icon === 'trailing' && 'button--with-icon',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type="button"
        className={classNames}
        disabled={disabled}
        onClick={onClick}
        data-testid={dataTestId}
        aria-disabled={disabled}
        {...props}
      >
        <span className="button__text">{children}</span>
        {icon === 'trailing' && (
          <svg
            className="button__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z"
                stroke="currentColor"
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
  }
);

Button.displayName = 'Button';

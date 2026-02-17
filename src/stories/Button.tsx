import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Button size variant
   */
  size?: 'md' | 'lg';
  
  /**
   * Visual hierarchy of the button
   */
  hierarchy?: 'primary' | 'secondary-gray';
  
  /**
   * Whether to show a trailing icon
   */
  icon?: boolean;
  
  /**
   * Use destructive (cyan/accent) color scheme
   */
  destructive?: boolean;
  
  /**
   * Button state
   */
  state?: 'default' | 'hover' | 'focused' | 'disabled';
  
  /**
   * Button label text
   */
  label?: string;
  
  /**
   * Disabled state (alternative to state prop)
   */
  disabled?: boolean;
  
  /**
   * Optional click handler
   */
  onClick?: () => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'md',
      hierarchy = 'primary',
      icon = false,
      destructive = false,
      state = 'default',
      label = 'Button CTA',
      disabled = false,
      onClick,
      className = '',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || state === 'disabled';
    
    const classes = [
      'nexus-button',
      `nexus-button--${size}`,
      `nexus-button--${hierarchy}`,
      destructive ? 'nexus-button--destructive' : '',
      icon ? 'nexus-button--with-icon' : '',
      state !== 'default' ? `nexus-button--${state}` : '',
      className
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type="button"
        className={classes}
        disabled={isDisabled}
        onClick={onClick}
        data-testid="button"
        {...props}
      >
        <span className="nexus-button__label">{label}</span>
        {icon && (
          <svg
            className="nexus-button__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6023 18.3332 9.99996C18.3332 5.39759 14.6022 1.66663 9.99984 1.66663C5.39746 1.66663 1.6665 5.39759 1.6665 9.99996C1.6665 14.6023 5.39746 18.3333 9.99984 18.3333Z"
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

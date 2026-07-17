import type { ButtonHTMLAttributes, ReactNode } from "react";

/** Size of the button, controls padding, font size and line height. */
export type ButtonSize = "md" | "lg";

/** Visual hierarchy of the button. */
export type ButtonHierarchy = "primary" | "secondary-gray";

/** Whether the button shows a trailing icon slot. */
export type ButtonIcon = "none" | "trailing";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Button label content. */
  children: ReactNode;
  /**
   * Size of the button.
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Visual hierarchy of the button.
   * @default 'primary'
   */
  hierarchy?: ButtonHierarchy;
  /**
   * Whether to render a trailing icon. Use `trailingIcon` to provide a
   * custom icon; a placeholder circle icon is shown otherwise.
   * @default 'none'
   */
  icon?: ButtonIcon;
  /** Custom trailing icon, rendered when `icon` is `'trailing'`. */
  trailingIcon?: ReactNode;
  /**
   * Applies the destructive color treatment.
   * @default false
   */
  destructive?: boolean;
}

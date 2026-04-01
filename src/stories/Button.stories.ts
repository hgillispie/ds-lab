import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

/**
 * The `Button` component is the primary interactive element in the design system.
 *
 * ## Variants
 * - **Size**: `md` (14px) · `lg` (16px)
 * - **Hierarchy**: `primary` (filled) · `secondary-gray` (outlined)
 * - **Destructive**: applies a cyan color scheme to signal a significant action
 * - **Trailing Icon**: optional circle icon rendered after the label
 *
 * ## States
 * Hover and focus states are handled automatically via CSS. Pass `disabled` to
 * disable the button.
 *
 * ## Usage
 * ```tsx
 * <Button label="Save" size="md" hierarchy="primary" />
 * <Button label="Delete" hierarchy="primary" destructive />
 * <Button label="Cancel" hierarchy="secondary-gray" trailingIcon />
 * ```
 */
const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Primary interactive element supporting two sizes, two hierarchies, a destructive mode, and optional trailing icon.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["md", "lg"],
      description: "Size variant controlling padding and font size",
      table: { defaultValue: { summary: "md" } },
    },
    hierarchy: {
      control: "radio",
      options: ["primary", "secondary-gray"],
      description: "Visual hierarchy — filled (primary) or outlined (secondary-gray)",
      table: { defaultValue: { summary: "primary" } },
    },
    destructive: {
      control: "boolean",
      description: "Applies cyan destructive color scheme",
      table: { defaultValue: { summary: "false" } },
    },
    trailingIcon: {
      control: "boolean",
      description: "Shows a trailing circle icon after the label",
      table: { defaultValue: { summary: "false" } },
    },
    label: {
      control: "text",
      description: "Button label text",
      table: { defaultValue: { summary: "Button CTA" } },
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
  },
  args: {
    onClick: fn(),
    label: "Button CTA",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ============================================================
   Default / Playground
   ============================================================ */

/** Interactive playground — use the Controls panel to explore all props. */
export const Default: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    destructive: false,
    trailingIcon: false,
    label: "Button CTA",
  },
};

/* ============================================================
   Size variants
   ============================================================ */

/** Medium (default) size — 14px font, 10px 16px padding. */
export const SizeMd: Story = {
  name: "Size — Medium",
  args: {
    size: "md",
    hierarchy: "primary",
    label: "Button CTA",
  },
};

/** Large size — 16px font, 10px 18px padding. */
export const SizeLg: Story = {
  name: "Size — Large",
  args: {
    size: "lg",
    hierarchy: "primary",
    label: "Button CTA",
  },
};

/* ============================================================
   Hierarchy variants
   ============================================================ */

/** High-emphasis filled button for the main call-to-action. */
export const Primary: Story = {
  name: "Hierarchy — Primary",
  args: {
    hierarchy: "primary",
    size: "md",
    label: "Button CTA",
  },
};

/** Lower-emphasis outlined button for secondary actions. */
export const SecondaryGray: Story = {
  name: "Hierarchy — Secondary Gray",
  args: {
    hierarchy: "secondary-gray",
    size: "md",
    label: "Button CTA",
  },
};

/* ============================================================
   Destructive variants
   ============================================================ */

/** Primary button with cyan destructive scheme. */
export const PrimaryDestructive: Story = {
  name: "Destructive — Primary",
  args: {
    hierarchy: "primary",
    destructive: true,
    size: "md",
    label: "Button CTA",
  },
};

/** Secondary button with cyan destructive scheme. */
export const SecondaryDestructive: Story = {
  name: "Destructive — Secondary Gray",
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
    size: "md",
    label: "Button CTA",
  },
};

/* ============================================================
   Icon variants
   ============================================================ */

/** Primary button with a trailing circle icon. */
export const WithTrailingIcon: Story = {
  name: "Icon — Primary with Trailing Icon",
  args: {
    hierarchy: "primary",
    trailingIcon: true,
    size: "md",
    label: "Button CTA",
  },
};

/** Secondary button with a trailing circle icon. */
export const SecondaryWithTrailingIcon: Story = {
  name: "Icon — Secondary Gray with Trailing Icon",
  args: {
    hierarchy: "secondary-gray",
    trailingIcon: true,
    size: "md",
    label: "Button CTA",
  },
};

/* ============================================================
   State variants
   ============================================================ */

/** Disabled state — button cannot be interacted with. */
export const Disabled: Story = {
  name: "State — Disabled (Primary)",
  args: {
    hierarchy: "primary",
    disabled: true,
    size: "md",
    label: "Button CTA",
  },
};

/** Disabled secondary gray button. */
export const DisabledSecondary: Story = {
  name: "State — Disabled (Secondary Gray)",
  args: {
    hierarchy: "secondary-gray",
    disabled: true,
    size: "md",
    label: "Button CTA",
  },
};

/** Disabled destructive primary button. */
export const DisabledDestructive: Story = {
  name: "State — Disabled (Destructive)",
  args: {
    hierarchy: "primary",
    destructive: true,
    disabled: true,
    size: "md",
    label: "Button CTA",
  },
};

/**
 * Button Component Stories
 *
 * This file contains comprehensive Storybook stories for the Nexus Design System Button component.
 * It showcases all variants, states, and combinations available in the Figma design including:
 * - Size variants (md, lg)
 * - Hierarchy levels (primary, secondary-gray)
 * - Destructive action styling
 * - Interactive states (default, hover, focused, disabled)
 * - Icon support (trailing circle icon)
 */
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

/**
 * Storybook Meta Configuration
 *
 * Defines the component metadata, controls, and default arguments for all Button stories.
 * Uses autodocs tag for automatic documentation generation from JSDoc comments.
 */
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: 'Nexus Design System Button component with comprehensive variant support including hierarchy, destructive actions, and interactive states.'
      }
    }
  },
  tags: ["autodocs"],
  /**
   * Storybook Controls Configuration
   *
   * Defines interactive controls for testing different button props in the Storybook UI.
   * These controls allow designers and developers to experiment with all button variants.
   */
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["md", "lg"],
      description: "Button size variant - md for standard use, lg for prominent actions"
    },
    hierarchy: {
      control: { type: "select" },
      options: ["primary", "secondary-gray"],
      description: "Visual hierarchy - primary for main actions, secondary-gray for supporting actions"
    },
    destructive: {
      control: { type: "boolean" },
      description: "Destructive action styling - uses cyan/teal colors to indicate potentially harmful actions"
    },
    showIcon: {
      control: { type: "boolean" },
      description: "Show trailing circle icon - adds visual interest and indicates expandable content"
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled state - prevents interaction and applies muted styling"
    },
    children: {
      control: { type: "text" },
      description: "Button text content - keep concise and action-oriented"
    }
  },
  args: { 
    onClick: fn(),
    children: "Button CTA"
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Story
 *
 * The primary example showcasing the button component in its most common configuration.
 * Uses medium size, primary hierarchy, non-destructive styling without icons.
 */
export const Default: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    destructive: false,
    showIcon: false,
  },
};

/**
 * Primary Hierarchy Variants
 *
 * Stories demonstrating the primary button hierarchy in different configurations.
 * Primary buttons use dark backgrounds and are intended for main call-to-action scenarios.
 */
export const Primary: Story = {
  args: {
    hierarchy: "primary",
    size: "md",
    destructive: false,
    showIcon: false,
  },
};

export const PrimaryDestructive: Story = {
  args: {
    hierarchy: "primary",
    size: "md",
    destructive: true,
    showIcon: false,
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    hierarchy: "primary",
    size: "md",
    destructive: false,
    showIcon: true,
  },
};

export const PrimaryDestructiveWithIcon: Story = {
  args: {
    hierarchy: "primary",
    size: "md",
    destructive: true,
    showIcon: true,
  },
};

/**
 * Secondary Gray Hierarchy Variants
 *
 * Stories demonstrating secondary buttons with gray styling and borders.
 * Secondary buttons are used for supporting actions that need less visual prominence.
 */
export const SecondaryGray: Story = {
  args: {
    hierarchy: "secondary-gray",
    size: "md",
    destructive: false,
    showIcon: false,
  },
};

export const SecondaryGrayDestructive: Story = {
  args: {
    hierarchy: "secondary-gray",
    size: "md",
    destructive: true,
    showIcon: false,
  },
};

export const SecondaryGrayWithIcon: Story = {
  args: {
    hierarchy: "secondary-gray",
    size: "md",
    destructive: false,
    showIcon: true,
  },
};

export const SecondaryGrayDestructiveWithIcon: Story = {
  args: {
    hierarchy: "secondary-gray",
    size: "md",
    destructive: true,
    showIcon: true,
  },
};

/**
 * Size Variants
 *
 * Stories demonstrating different button sizes for various use cases.
 * Large buttons are used for prominent actions or mobile-friendly interfaces.
 */
export const Large: Story = {
  args: {
    size: "lg",
    hierarchy: "primary",
    destructive: false,
    showIcon: false,
  },
};

export const LargeWithIcon: Story = {
  args: {
    size: "lg",
    hierarchy: "primary",
    destructive: false,
    showIcon: true,
  },
};

export const LargeSecondary: Story = {
  args: {
    size: "lg",
    hierarchy: "secondary-gray",
    destructive: false,
    showIcon: false,
  },
};

export const LargeSecondaryWithIcon: Story = {
  args: {
    size: "lg",
    hierarchy: "secondary-gray",
    destructive: false,
    showIcon: true,
  },
};

/**
 * Disabled States
 *
 * Stories demonstrating disabled button states across different hierarchies and configurations.
 * Disabled buttons use muted colors and prevent user interaction.
 */
export const Disabled: Story = {
  args: {
    hierarchy: "primary",
    size: "md",
    destructive: false,
    showIcon: false,
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    hierarchy: "secondary-gray",
    size: "md",
    destructive: false,
    showIcon: false,
    disabled: true,
  },
};

export const DisabledDestructive: Story = {
  args: {
    hierarchy: "primary",
    size: "md",
    destructive: true,
    showIcon: false,
    disabled: true,
  },
};

export const DisabledSecondaryDestructive: Story = {
  args: {
    hierarchy: "secondary-gray",
    size: "md",
    destructive: true,
    showIcon: false,
    disabled: true,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

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
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["md", "lg"],
      description: "Button size variant"
    },
    hierarchy: {
      control: { type: "select" },
      options: ["primary", "secondary-gray"],
      description: "Button hierarchy level"
    },
    destructive: {
      control: { type: "boolean" },
      description: "Whether this represents a destructive action"
    },
    showIcon: {
      control: { type: "boolean" },
      description: "Show trailing icon"
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled state"
    },
    children: {
      control: { type: "text" },
      description: "Button content"
    }
  },
  args: { 
    onClick: fn(),
    children: "Button CTA"
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    destructive: false,
    showIcon: false,
  },
};

// Primary variants
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

// Secondary variants
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

// Size variants
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

// Disabled states
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

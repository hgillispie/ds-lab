import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Button Component

A comprehensive button component with multiple variants, sizes, and states.

## Features
- **Sizes**: Medium (md) and Large (lg)
- **Hierarchies**: Primary and Secondary Gray
- **Destructive Actions**: Support for destructive/dangerous actions
- **Icons**: Optional trailing icons
- **States**: Default, Hover, Focus, and Disabled
- **Accessibility**: Full keyboard navigation and screen reader support

## Design Tokens
Uses Inter font family and follows the design system color palette for consistent styling across all variants.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Button text content",
    },
    size: {
      control: { type: "radio" },
      options: ["md", "lg"],
      description: "Button size variant",
    },
    hierarchy: {
      control: { type: "radio" },
      options: ["primary", "secondary-gray"],
      description: "Button style hierarchy",
    },
    destructive: {
      control: "boolean",
      description: "Whether this represents a destructive action",
    },
    icon: {
      control: "boolean",
      description: "Whether to show trailing icon",
    },
    disabled: {
      control: "boolean",
      description: "Whether button is disabled",
    },
  },
  args: { 
    onClick: fn(),
    children: "Button CTA",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default stories
export const Default: Story = {
  args: {
    children: "Button CTA",
  },
};

export const Primary: Story = {
  args: {
    hierarchy: "primary",
    children: "Button CTA",
  },
};

export const SecondaryGray: Story = {
  args: {
    hierarchy: "secondary-gray",
    children: "Button CTA",
  },
};

// Size variants
export const Medium: Story = {
  args: {
    size: "md",
    children: "Button CTA",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button CTA",
  },
};

// Destructive variants
export const Destructive: Story = {
  args: {
    destructive: true,
    children: "Delete Item",
  },
};

export const DestructiveSecondary: Story = {
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
    children: "Delete Item",
  },
};

// With icons
export const WithIcon: Story = {
  args: {
    icon: true,
    children: "Button CTA",
  },
};

export const WithIconSecondary: Story = {
  args: {
    hierarchy: "secondary-gray",
    icon: true,
    children: "Button CTA",
  },
};

// Disabled states
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button CTA",
  },
};

export const DisabledSecondary: Story = {
  args: {
    hierarchy: "secondary-gray",
    disabled: true,
    children: "Button CTA",
  },
};

export const DisabledDestructive: Story = {
  args: {
    destructive: true,
    disabled: true,
    children: "Delete Item",
  },
};

// Comprehensive showcase
export const AllVariants: Story = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 24px; font-family: Inter, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h3 style="margin: 0; font-size: 14px; font-weight: 600; color: #374151;">Primary - Medium</h3>
        ${Button({ children: "Button CTA", hierarchy: "primary", size: "md" })}
        ${Button({ children: "Button CTA", hierarchy: "primary", size: "md", destructive: true })}
        ${Button({ children: "Button CTA", hierarchy: "primary", size: "md", icon: true })}
        ${Button({ children: "Button CTA", hierarchy: "primary", size: "md", disabled: true })}
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h3 style="margin: 0; font-size: 14px; font-weight: 600; color: #374151;">Primary - Large</h3>
        ${Button({ children: "Button CTA", hierarchy: "primary", size: "lg" })}
        ${Button({ children: "Button CTA", hierarchy: "primary", size: "lg", destructive: true })}
        ${Button({ children: "Button CTA", hierarchy: "primary", size: "lg", icon: true })}
        ${Button({ children: "Button CTA", hierarchy: "primary", size: "lg", disabled: true })}
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h3 style="margin: 0; font-size: 14px; font-weight: 600; color: #374151;">Secondary - Medium</h3>
        ${Button({ children: "Button CTA", hierarchy: "secondary-gray", size: "md" })}
        ${Button({ children: "Button CTA", hierarchy: "secondary-gray", size: "md", destructive: true })}
        ${Button({ children: "Button CTA", hierarchy: "secondary-gray", size: "md", icon: true })}
        ${Button({ children: "Button CTA", hierarchy: "secondary-gray", size: "md", disabled: true })}
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <h3 style="margin: 0; font-size: 14px; font-weight: 600; color: #374151;">Secondary - Large</h3>
        ${Button({ children: "Button CTA", hierarchy: "secondary-gray", size: "lg" })}
        ${Button({ children: "Button CTA", hierarchy: "secondary-gray", size: "lg", destructive: true })}
        ${Button({ children: "Button CTA", hierarchy: "secondary-gray", size: "lg", icon: true })}
        ${Button({ children: "Button CTA", hierarchy: "secondary-gray", size: "lg", disabled: true })}
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Complete showcase of all button variants showing size, hierarchy, destructive state, icon, and disabled combinations.",
      },
    },
  },
};

// Interactive examples
export const InteractiveExample: Story = {
  render: () => `
    <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 24px; font-family: Inter, sans-serif;">
      ${Button({ 
        children: "Save Changes", 
        hierarchy: "primary", 
        size: "lg",
        onClick: () => alert("Changes saved!") 
      })}
      ${Button({ 
        children: "Cancel", 
        hierarchy: "secondary-gray", 
        size: "lg",
        onClick: () => alert("Cancelled!") 
      })}
      ${Button({ 
        children: "Delete Account", 
        hierarchy: "primary", 
        destructive: true,
        icon: true,
        onClick: () => confirm("Are you sure you want to delete your account?") 
      })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing buttons in a realistic form context.",
      },
    },
  },
};

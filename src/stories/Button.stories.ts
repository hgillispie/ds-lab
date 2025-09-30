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

// All variants showcase
export const AllVariants: Story = {
  render: () => {
    const variants = [
      { hierarchy: "primary", destructive: false, showIcon: false, label: "Primary" },
      { hierarchy: "primary", destructive: true, showIcon: false, label: "Primary Destructive" },
      { hierarchy: "primary", destructive: false, showIcon: true, label: "Primary + Icon" },
      { hierarchy: "primary", destructive: true, showIcon: true, label: "Primary Destructive + Icon" },
      { hierarchy: "secondary-gray", destructive: false, showIcon: false, label: "Secondary" },
      { hierarchy: "secondary-gray", destructive: true, showIcon: false, label: "Secondary Destructive" },
      { hierarchy: "secondary-gray", destructive: false, showIcon: true, label: "Secondary + Icon" },
      { hierarchy: "secondary-gray", destructive: true, showIcon: true, label: "Secondary Destructive + Icon" },
    ];

    return (
      <div style={{ 
        display: "grid", 
        gap: "24px", 
        padding: "24px",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        maxWidth: "1200px"
      }}>
        <div>
          <h3 style={{ marginBottom: "16px", fontSize: "16px", fontWeight: "600" }}>Medium Size</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {variants.map((variant, index) => (
              <Button
                key={`md-${index}`}
                size="md"
                hierarchy={variant.hierarchy as "primary" | "secondary-gray"}
                destructive={variant.destructive}
                showIcon={variant.showIcon}
              >
                {variant.label}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "16px", fontSize: "16px", fontWeight: "600" }}>Large Size</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {variants.map((variant, index) => (
              <Button
                key={`lg-${index}`}
                size="lg"
                hierarchy={variant.hierarchy as "primary" | "secondary-gray"}
                destructive={variant.destructive}
                showIcon={variant.showIcon}
              >
                {variant.label}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "16px", fontSize: "16px", fontWeight: "600" }}>Disabled States</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Button hierarchy="primary" destructive={false} disabled>Primary Disabled</Button>
            <Button hierarchy="primary" destructive={true} disabled>Primary Destructive Disabled</Button>
            <Button hierarchy="secondary-gray" destructive={false} disabled>Secondary Disabled</Button>
            <Button hierarchy="secondary-gray" destructive={true} disabled>Secondary Destructive Disabled</Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: "fullscreen",
  },
};
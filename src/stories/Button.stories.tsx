import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["md", "lg"],
      description: "Button size",
    },
    hierarchy: {
      control: "select",
      options: ["primary", "secondary-gray"],
      description: "Button hierarchy/variant",
    },
    icon: {
      control: "boolean",
      description: "Show trailing icon",
    },
    destructive: {
      control: "boolean",
      description: "Use destructive color scheme (cyan)",
    },
    state: {
      control: "select",
      options: ["default", "hover", "focused", "disabled"],
      description: "Button state",
    },
    label: {
      control: "text",
      description: "Button text",
    },
  },
  args: { 
    onClick: fn(),
    label: "Button CTA",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hierarchy: "primary",
    size: "md",
  },
};

export const PrimaryDestructive: Story = {
  args: {
    hierarchy: "primary",
    destructive: true,
    size: "md",
  },
};

export const SecondaryGray: Story = {
  args: {
    hierarchy: "secondary-gray",
    size: "md",
  },
};

export const SecondaryGrayDestructive: Story = {
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
    size: "md",
  },
};

export const WithIcon: Story = {
  args: {
    hierarchy: "primary",
    icon: true,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    hierarchy: "primary",
    size: "lg",
  },
};

export const LargeWithIcon: Story = {
  args: {
    hierarchy: "primary",
    icon: true,
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    hierarchy: "primary",
    state: "disabled",
    size: "md",
  },
};

export const Hover: Story = {
  args: {
    hierarchy: "primary",
    state: "hover",
    size: "md",
  },
};

export const Focused: Story = {
  args: {
    hierarchy: "primary",
    state: "focused",
    size: "md",
  },
};

export const AllVariants: Story = {
  render: () => {
    const variants = [
      { size: "md" as const, hierarchy: "primary" as const, destructive: false, icon: false, state: "default" as const },
      { size: "md" as const, hierarchy: "primary" as const, destructive: true, icon: false, state: "default" as const },
      { size: "md" as const, hierarchy: "primary" as const, destructive: false, icon: true, state: "default" as const },
      { size: "md" as const, hierarchy: "primary" as const, destructive: true, icon: true, state: "default" as const },
      
      { size: "md" as const, hierarchy: "secondary-gray" as const, destructive: false, icon: false, state: "default" as const },
      { size: "md" as const, hierarchy: "secondary-gray" as const, destructive: true, icon: false, state: "default" as const },
      { size: "md" as const, hierarchy: "secondary-gray" as const, destructive: false, icon: true, state: "default" as const },
      { size: "md" as const, hierarchy: "secondary-gray" as const, destructive: true, icon: true, state: "default" as const },
      
      { size: "md" as const, hierarchy: "primary" as const, destructive: false, icon: false, state: "disabled" as const },
      { size: "md" as const, hierarchy: "primary" as const, destructive: true, icon: false, state: "disabled" as const },
      { size: "md" as const, hierarchy: "secondary-gray" as const, destructive: false, icon: false, state: "disabled" as const },
      { size: "md" as const, hierarchy: "secondary-gray" as const, destructive: true, icon: false, state: "disabled" as const },
      
      { size: "md" as const, hierarchy: "primary" as const, destructive: false, icon: false, state: "hover" as const },
      { size: "md" as const, hierarchy: "primary" as const, destructive: true, icon: false, state: "hover" as const },
      { size: "md" as const, hierarchy: "secondary-gray" as const, destructive: false, icon: false, state: "hover" as const },
      { size: "md" as const, hierarchy: "secondary-gray" as const, destructive: true, icon: false, state: "hover" as const },
      
      { size: "lg" as const, hierarchy: "primary" as const, destructive: false, icon: false, state: "default" as const },
      { size: "lg" as const, hierarchy: "primary" as const, destructive: true, icon: false, state: "default" as const },
      { size: "lg" as const, hierarchy: "secondary-gray" as const, destructive: false, icon: false, state: "default" as const },
      { size: "lg" as const, hierarchy: "secondary-gray" as const, destructive: true, icon: false, state: "default" as const },
    ];
    
    return (
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "24px",
        maxWidth: "100%",
        padding: "20px"
      }}>
        <div>
          <h3 style={{ marginBottom: "16px", fontFamily: "Inter, sans-serif" }}>Medium Size - Default State</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {variants.slice(0, 8).map((variant, i) => (
              <Button key={i} {...variant} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: "16px", fontFamily: "Inter, sans-serif" }}>Medium Size - Disabled State</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {variants.slice(8, 12).map((variant, i) => (
              <Button key={i} {...variant} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: "16px", fontFamily: "Inter, sans-serif" }}>Medium Size - Hover State</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {variants.slice(12, 16).map((variant, i) => (
              <Button key={i} {...variant} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: "16px", fontFamily: "Inter, sans-serif" }}>Large Size - Default State</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {variants.slice(16, 20).map((variant, i) => (
              <Button key={i} {...variant} />
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: "fullscreen",
  },
};

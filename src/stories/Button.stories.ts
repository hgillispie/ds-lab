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
      description: "Size of the button",
    },
    hierarchy: {
      control: "select",
      options: ["primary", "secondary-gray"],
      description: "Visual hierarchy style",
    },
    icon: {
      control: "boolean",
      description: "Show trailing icon",
    },
    destructive: {
      control: "boolean",
      description: "Destructive action styling (cyan theme)",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    disabled: false,
    children: "Button CTA",
  },
};

export const PrimaryDestructive: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: true,
    disabled: false,
    children: "Button CTA",
  },
};

export const Secondary: Story = {
  args: {
    size: "md",
    hierarchy: "secondary-gray",
    icon: false,
    destructive: false,
    disabled: false,
    children: "Button CTA",
  },
};

export const SecondaryDestructive: Story = {
  args: {
    size: "md",
    hierarchy: "secondary-gray",
    icon: false,
    destructive: true,
    disabled: false,
    children: "Button CTA",
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: true,
    destructive: false,
    disabled: false,
    children: "Button CTA",
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    size: "md",
    hierarchy: "secondary-gray",
    icon: true,
    destructive: false,
    disabled: false,
    children: "Button CTA",
  },
};

export const LargePrimary: Story = {
  args: {
    size: "lg",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    disabled: false,
    children: "Button CTA",
  },
};

export const LargeSecondary: Story = {
  args: {
    size: "lg",
    hierarchy: "secondary-gray",
    icon: false,
    destructive: false,
    disabled: false,
    children: "Button CTA",
  },
};

export const Disabled: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    disabled: true,
    children: "Button CTA",
  },
};

export const DisabledSecondary: Story = {
  args: {
    size: "md",
    hierarchy: "secondary-gray",
    icon: false,
    destructive: false,
    disabled: true,
    children: "Button CTA",
  },
};

export const AllVariants: Story = {
  render: () => {
    const variants = [
      { hierarchy: "primary", destructive: false, label: "Primary" },
      { hierarchy: "primary", destructive: true, label: "Primary Destructive" },
      { hierarchy: "secondary-gray", destructive: false, label: "Secondary" },
      { hierarchy: "secondary-gray", destructive: true, label: "Secondary Destructive" },
    ];

    return {
      type: "div",
      props: {
        style: { display: "flex", flexDirection: "column", gap: "32px", padding: "20px" },
        children: variants.map((variant, idx) => ({
          type: "div",
          key: idx,
          props: {
            children: [
              {
                type: "h3",
                props: {
                  style: { marginBottom: "16px", fontFamily: "Inter, sans-serif" },
                  children: variant.label,
                },
              },
              {
                type: "div",
                props: {
                  style: { display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" },
                  children: [
                    {
                      type: Button,
                      props: {
                        size: "md",
                        hierarchy: variant.hierarchy,
                        destructive: variant.destructive,
                        children: "Button CTA",
                      },
                    },
                    {
                      type: Button,
                      props: {
                        size: "md",
                        hierarchy: variant.hierarchy,
                        destructive: variant.destructive,
                        icon: true,
                        children: "Button CTA",
                      },
                    },
                    {
                      type: Button,
                      props: {
                        size: "lg",
                        hierarchy: variant.hierarchy,
                        destructive: variant.destructive,
                        children: "Button CTA",
                      },
                    },
                    {
                      type: Button,
                      props: {
                        size: "lg",
                        hierarchy: variant.hierarchy,
                        destructive: variant.destructive,
                        icon: true,
                        children: "Button CTA",
                      },
                    },
                    {
                      type: Button,
                      props: {
                        size: "md",
                        hierarchy: variant.hierarchy,
                        destructive: variant.destructive,
                        disabled: true,
                        children: "Disabled",
                      },
                    },
                  ],
                },
              },
            ],
          },
        })),
      },
    };
  },
};

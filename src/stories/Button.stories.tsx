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
        component:
          "Primary interactive control for triggering an action. Supports two sizes, two hierarchies, an optional trailing icon, and a destructive treatment. Hover, focus and disabled states are handled automatically via native button states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["md", "lg"],
      description: "Controls padding, font size and line height.",
    },
    hierarchy: {
      control: "radio",
      options: ["primary", "secondary-gray"],
      description: "Visual hierarchy of the button.",
    },
    icon: {
      control: "radio",
      options: ["none", "trailing"],
      description: "Whether to show the trailing icon slot.",
    },
    destructive: {
      control: "boolean",
      description: "Applies the destructive color treatment.",
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
  args: { onClick: fn(), children: "Button CTA" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: "none",
    destructive: false,
  },
};

export const Primary: Story = {
  args: {
    hierarchy: "primary",
  },
};

export const SecondaryGray: Story = {
  args: {
    hierarchy: "secondary-gray",
  },
};

export const Destructive: Story = {
  args: {
    hierarchy: "primary",
    destructive: true,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    hierarchy: "primary",
    icon: "trailing",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * Every combination of size, hierarchy, icon and destructive state, laid out
 * one row per size + hierarchy pair so each variant stays readable.
 */
export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const sizes = ["md", "lg"] as const;
    const hierarchies = ["primary", "secondary-gray"] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {sizes.map((size) =>
          hierarchies.map((hierarchy) => (
            <div key={`${size}-${hierarchy}`}>
              <p
                style={{
                  font: "600 12px Inter, sans-serif",
                  color: "#737373",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: 12,
                }}
              >
                {size} / {hierarchy}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <Button size={size} hierarchy={hierarchy}>
                  Button CTA
                </Button>
                <Button size={size} hierarchy={hierarchy} icon="trailing">
                  Button CTA
                </Button>
                <Button size={size} hierarchy={hierarchy} destructive>
                  Button CTA
                </Button>
                <Button
                  size={size}
                  hierarchy={hierarchy}
                  destructive
                  icon="trailing"
                >
                  Button CTA
                </Button>
                <Button size={size} hierarchy={hierarchy} disabled>
                  Button CTA
                </Button>
                <Button size={size} hierarchy={hierarchy} destructive disabled>
                  Button CTA
                </Button>
              </div>
            </div>
          )),
        )}
      </div>
    );
  },
};

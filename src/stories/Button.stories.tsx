import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import { Button } from "./Button";

const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Button** component is a core interactive element in the Nexus Design System.

It supports two size variants, two hierarchy styles, optional destructive (cyan accent) theming,
a trailing icon, and all interactive states: default, hover, focused, and disabled.

## Usage

\`\`\`tsx
import { Button } from '@nexus/design-system';

<Button label="Button CTA" hierarchy="primary" size="md" />
<Button label="Button CTA" hierarchy="primary" destructive size="lg" icon="trailing" />
<Button label="Button CTA" hierarchy="secondary-gray" disabled />
\`\`\`

## Accessibility

- All buttons render a native \`<button>\` element with proper \`type="button"\`
- Disabled state uses both the HTML \`disabled\` attribute and \`aria-disabled\`
- Focus ring is visible via \`:focus-visible\` — only shown for keyboard navigation
- Icons are marked \`aria-hidden="true"\` and are decorative only
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["md", "lg"],
      description: "Controls button size — md uses 14px text, lg uses 16px text",
      table: { defaultValue: { summary: "md" } },
    },
    hierarchy: {
      control: "select",
      options: ["primary", "secondary-gray"],
      description:
        "Visual weight — primary uses a filled background, secondary-gray uses a bordered style",
      table: { defaultValue: { summary: "primary" } },
    },
    destructive: {
      control: "boolean",
      description: "Applies the cyan destructive color theme",
      table: { defaultValue: { summary: "false" } },
    },
    icon: {
      control: "select",
      options: ["none", "trailing"],
      description: "Position of the icon relative to the label",
      table: { defaultValue: { summary: "none" } },
    },
    disabled: {
      control: "boolean",
      description: "Disables the button, preventing interaction",
      table: { defaultValue: { summary: "false" } },
    },
    label: {
      control: "text",
      description: "The text displayed inside the button",
    },
    onClick: { action: "clicked" },
  },
  args: {
    label: "Button CTA",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ================================================================
   Default — Interactive playground with all controls
   ================================================================ */
export const Default: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    destructive: false,
    icon: "none",
    disabled: false,
  },
};

/* ================================================================
   Primary — Non-destructive
   ================================================================ */
export const Primary: Story = {
  name: "Primary",
  args: {
    hierarchy: "primary",
    destructive: false,
    size: "md",
    icon: "none",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The primary button uses a dark filled background (#0F172A). Hover darkens slightly; focus adds a soft ring.",
      },
    },
  },
};

export const PrimaryLarge: Story = {
  name: "Primary — Large",
  args: {
    hierarchy: "primary",
    destructive: false,
    size: "lg",
    icon: "none",
  },
};

export const PrimaryWithIcon: Story = {
  name: "Primary — With Trailing Icon",
  args: {
    hierarchy: "primary",
    destructive: false,
    size: "md",
    icon: "trailing",
  },
};

export const PrimaryDisabled: Story = {
  name: "Primary — Disabled",
  args: {
    hierarchy: "primary",
    destructive: false,
    size: "md",
    disabled: true,
  },
};

/* ================================================================
   Primary Destructive — Cyan theme
   ================================================================ */
export const PrimaryDestructive: Story = {
  name: "Primary — Destructive",
  args: {
    hierarchy: "primary",
    destructive: true,
    size: "md",
    icon: "none",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The destructive primary button uses the cyan accent color (#06B6D4). Use for actions with significant consequence.",
      },
    },
  },
};

export const PrimaryDestructiveLarge: Story = {
  name: "Primary — Destructive Large",
  args: {
    hierarchy: "primary",
    destructive: true,
    size: "lg",
    icon: "none",
  },
};

export const PrimaryDestructiveWithIcon: Story = {
  name: "Primary — Destructive With Trailing Icon",
  args: {
    hierarchy: "primary",
    destructive: true,
    size: "md",
    icon: "trailing",
  },
};

export const PrimaryDestructiveDisabled: Story = {
  name: "Primary — Destructive Disabled",
  args: {
    hierarchy: "primary",
    destructive: true,
    size: "md",
    disabled: true,
  },
};

/* ================================================================
   Secondary Gray — Non-destructive
   ================================================================ */
export const SecondaryGray: Story = {
  name: "Secondary Gray",
  args: {
    hierarchy: "secondary-gray",
    destructive: false,
    size: "md",
    icon: "none",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The secondary gray button has a white background with a light gray border. Used for less prominent actions.",
      },
    },
  },
};

export const SecondaryGrayLarge: Story = {
  name: "Secondary Gray — Large",
  args: {
    hierarchy: "secondary-gray",
    destructive: false,
    size: "lg",
    icon: "none",
  },
};

export const SecondaryGrayWithIcon: Story = {
  name: "Secondary Gray — With Trailing Icon",
  args: {
    hierarchy: "secondary-gray",
    destructive: false,
    size: "md",
    icon: "trailing",
  },
};

export const SecondaryGrayDisabled: Story = {
  name: "Secondary Gray — Disabled",
  args: {
    hierarchy: "secondary-gray",
    destructive: false,
    size: "md",
    disabled: true,
  },
};

/* ================================================================
   Secondary Gray Destructive — Cyan theme
   ================================================================ */
export const SecondaryGrayDestructive: Story = {
  name: "Secondary Gray — Destructive",
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
    size: "md",
    icon: "none",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Secondary gray with destructive theming — white background with a cyan border and text color.",
      },
    },
  },
};

export const SecondaryGrayDestructiveLarge: Story = {
  name: "Secondary Gray — Destructive Large",
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
    size: "lg",
    icon: "none",
  },
};

export const SecondaryGrayDestructiveWithIcon: Story = {
  name: "Secondary Gray — Destructive With Trailing Icon",
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
    size: "md",
    icon: "trailing",
  },
};

export const SecondaryGrayDestructiveDisabled: Story = {
  name: "Secondary Gray — Destructive Disabled",
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
    size: "md",
    disabled: true,
  },
};

/* ================================================================
   All Variants — Comprehensive visual reference
   ================================================================ */
const variantGrid = [
  {
    group: "Primary",
    hierarchy: "primary" as const,
    destructive: false,
  },
  {
    group: "Primary — Destructive",
    hierarchy: "primary" as const,
    destructive: true,
  },
  {
    group: "Secondary Gray",
    hierarchy: "secondary-gray" as const,
    destructive: false,
  },
  {
    group: "Secondary Gray — Destructive",
    hierarchy: "secondary-gray" as const,
    destructive: true,
  },
];

const columnConfigs = [
  { size: "md" as const, icon: "none" as const, label: "md · No Icon" },
  { size: "lg" as const, icon: "none" as const, label: "lg · No Icon" },
  { size: "md" as const, icon: "trailing" as const, label: "md · Trailing Icon" },
  { size: "lg" as const, icon: "trailing" as const, label: "lg · Trailing Icon" },
];

export const AllVariants: Story = {
  name: "All Variants",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Complete reference of all 64 button variants across size, hierarchy, destructive theming, icon position, and state. Hover and focus states are interactive — try hovering or focusing the buttons below.",
      },
    },
  },
  render: () => (
    <div className="all-variants-wrapper">
      <style>{`
        .all-variants-wrapper {
          font-family: Inter, -apple-system, sans-serif;
          padding: 32px;
          background: #fff;
          min-width: 800px;
        }
        .variant-group {
          margin-bottom: 40px;
        }
        .variant-group-title {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e9eaeb;
        }
        .variant-column-headers {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 8px;
        }
        .variant-column-header {
          font-size: 11px;
          font-weight: 500;
          color: #9ca3af;
          text-align: center;
        }
        .variant-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          align-items: center;
          padding: 8px 0;
        }
        .variant-row + .variant-row {
          border-top: 1px dashed #f3f4f6;
        }
        .variant-cell {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .variant-state-label {
          font-size: 11px;
          font-weight: 500;
          color: #9ca3af;
          min-width: 72px;
          flex-shrink: 0;
        }
        .all-variants-wrapper .btn {
          width: 100%;
          max-width: 180px;
        }
      `}</style>

      {variantGrid.map(({ group, hierarchy, destructive }) => (
        <div key={group} className="variant-group">
          <p className="variant-group-title">{group}</p>

          <div className="variant-column-headers">
            {columnConfigs.map(({ label }) => (
              <div key={label} className="variant-column-header">{label}</div>
            ))}
          </div>

          {/* Default */}
          <div className="variant-row">
            {columnConfigs.map(({ size, icon }) => (
              <div key={`${size}-${icon}-default`} className="variant-cell">
                <Button
                  label="Button CTA"
                  hierarchy={hierarchy}
                  destructive={destructive}
                  size={size}
                  icon={icon}
                />
              </div>
            ))}
          </div>

          {/* Disabled */}
          <div className="variant-row">
            {columnConfigs.map(({ size, icon }) => (
              <div key={`${size}-${icon}-disabled`} className="variant-cell">
                <Button
                  label="Button CTA"
                  hierarchy={hierarchy}
                  destructive={destructive}
                  size={size}
                  icon={icon}
                  disabled
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

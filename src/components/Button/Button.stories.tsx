import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import { Button } from "./Button";

// ── Meta ───────────────────────────────────────────────────────────────────

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Button** component is the primary interactive element in the Nexus Design System.

### Variants
| Prop | Values |
|------|--------|
| \`hierarchy\` | \`primary\` · \`secondary-gray\` |
| \`size\` | \`md\` · \`lg\` |
| \`destructive\` | \`true\` · \`false\` |
| \`icon\` | \`none\` · \`trailing\` |

### States
Hover, focus-ring, and disabled states are handled automatically via CSS.

### Accessibility
- Forwards all native \`<button>\` attributes
- \`disabled\` renders the button inert and applies disabled styling
- Focus ring is shown on keyboard navigation (\`:focus-visible\`)
        `,
      },
    },
  },
  argTypes: {
    hierarchy: {
      control: "select",
      options: ["primary", "secondary-gray"],
      description: "Visual importance of the button",
    },
    size: {
      control: "select",
      options: ["md", "lg"],
      description: "Button size",
    },
    destructive: {
      control: "boolean",
      description: "Apply accent (cyan) destructive colour scheme",
    },
    icon: {
      control: "select",
      options: ["none", "trailing"],
      description: "Optional trailing icon",
    },
    label: {
      control: "text",
      description: "Button label text",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
  },
  args: {
    onClick: fn(),
    label: "Button CTA",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Individual stories ─────────────────────────────────────────────────────

/** Default primary medium button — the most common call-to-action. */
export const Default: Story = {
  args: {
    hierarchy: "primary",
    size: "md",
  },
};

/** Large primary button — use when more visual weight is needed. */
export const PrimaryLarge: Story = {
  args: {
    hierarchy: "primary",
    size: "lg",
  },
};

/** Secondary gray button — for secondary actions that sit alongside a primary CTA. */
export const SecondaryGray: Story = {
  args: {
    hierarchy: "secondary-gray",
    size: "md",
  },
};

/** Large secondary gray button. */
export const SecondaryGrayLarge: Story = {
  args: {
    hierarchy: "secondary-gray",
    size: "lg",
  },
};

/** Destructive primary — use for irreversible actions like deleting content. */
export const DestructivePrimary: Story = {
  args: {
    hierarchy: "primary",
    destructive: true,
  },
};

/** Destructive secondary gray — a softer presentation of a destructive action. */
export const DestructiveSecondary: Story = {
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
  },
};

/** Primary button with a trailing icon. */
export const WithTrailingIcon: Story = {
  args: {
    hierarchy: "primary",
    icon: "trailing",
  },
};

/** Secondary gray with trailing icon. */
export const SecondaryWithIcon: Story = {
  args: {
    hierarchy: "secondary-gray",
    icon: "trailing",
  },
};

/** Disabled state — button is inert and visually muted. */
export const Disabled: Story = {
  args: {
    hierarchy: "primary",
    disabled: true,
  },
};

/** Disabled secondary gray. */
export const DisabledSecondary: Story = {
  args: {
    hierarchy: "secondary-gray",
    disabled: true,
  },
};

// ── All Variants ───────────────────────────────────────────────────────────

type VariantRow = {
  label: string;
  props: Partial<React.ComponentProps<typeof Button>>;
};

const variantRows: VariantRow[] = [
  // Primary — no icon
  { label: "Primary / md / Default", props: { hierarchy: "primary", size: "md" } },
  { label: "Primary / md / Destructive", props: { hierarchy: "primary", size: "md", destructive: true } },
  { label: "Primary / md / Disabled", props: { hierarchy: "primary", size: "md", disabled: true } },
  { label: "Primary / md / Destructive + Disabled", props: { hierarchy: "primary", size: "md", destructive: true, disabled: true } },

  // Primary — trailing icon
  { label: "Primary / md / Icon Trailing", props: { hierarchy: "primary", size: "md", icon: "trailing" } },
  { label: "Primary / md / Icon + Destructive", props: { hierarchy: "primary", size: "md", icon: "trailing", destructive: true } },
  { label: "Primary / md / Icon + Disabled", props: { hierarchy: "primary", size: "md", icon: "trailing", disabled: true } },

  // Secondary Gray — no icon
  { label: "Secondary Gray / md / Default", props: { hierarchy: "secondary-gray", size: "md" } },
  { label: "Secondary Gray / md / Destructive", props: { hierarchy: "secondary-gray", size: "md", destructive: true } },
  { label: "Secondary Gray / md / Disabled", props: { hierarchy: "secondary-gray", size: "md", disabled: true } },
  { label: "Secondary Gray / md / Destructive + Disabled", props: { hierarchy: "secondary-gray", size: "md", destructive: true, disabled: true } },

  // Secondary Gray — trailing icon
  { label: "Secondary Gray / md / Icon Trailing", props: { hierarchy: "secondary-gray", size: "md", icon: "trailing" } },
  { label: "Secondary Gray / md / Icon + Destructive", props: { hierarchy: "secondary-gray", size: "md", icon: "trailing", destructive: true } },
  { label: "Secondary Gray / md / Icon + Disabled", props: { hierarchy: "secondary-gray", size: "md", icon: "trailing", disabled: true } },

  // Large sizes
  { label: "Primary / lg / Default", props: { hierarchy: "primary", size: "lg" } },
  { label: "Primary / lg / Destructive", props: { hierarchy: "primary", size: "lg", destructive: true } },
  { label: "Primary / lg / Icon Trailing", props: { hierarchy: "primary", size: "lg", icon: "trailing" } },
  { label: "Primary / lg / Icon + Destructive", props: { hierarchy: "primary", size: "lg", icon: "trailing", destructive: true } },
  { label: "Secondary Gray / lg / Default", props: { hierarchy: "secondary-gray", size: "lg" } },
  { label: "Secondary Gray / lg / Destructive", props: { hierarchy: "secondary-gray", size: "lg", destructive: true } },
  { label: "Secondary Gray / lg / Icon Trailing", props: { hierarchy: "secondary-gray", size: "lg", icon: "trailing" } },
  { label: "Secondary Gray / lg / Icon + Destructive", props: { hierarchy: "secondary-gray", size: "lg", icon: "trailing", destructive: true } },
];

/**
 * All variants laid out in a labelled grid for quick visual review.
 * Hover over any button to see hover styles; tab to see focus rings.
 */
export const AllVariants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "24px 16px",
        padding: "24px",
        fontFamily: "Inter, sans-serif",
        maxWidth: "900px",
      }}
    >
      {variantRows.map(({ label, props }) => (
        <div
          key={label}
          style={{ display: "flex", flexDirection: "column", gap: "6px" }}
        >
          <span
            style={{ fontSize: "11px", color: "#6b7280", letterSpacing: "0.02em" }}
          >
            {label}
          </span>
          <Button label="Button CTA" {...props} />
        </div>
      ))}
    </div>
  ),
};

// ── States Demo ────────────────────────────────────────────────────────────

/**
 * Side-by-side comparison of all interactive states for the primary button.
 */
export const PrimaryStates: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "24px", fontFamily: "Inter, sans-serif" }}>
      {(["Default", "Hover*", "Focused*", "Disabled"] as const).map((state) => (
        <div key={state} style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "11px", color: "#6b7280" }}>{state}</span>
          <Button
            label="Button CTA"
            hierarchy="primary"
            disabled={state === "Disabled"}
          />
        </div>
      ))}
      <p style={{ width: "100%", fontSize: "12px", color: "#9ca3af", margin: 0 }}>
        * Hover and Focused states are triggered by mouse / keyboard interaction respectively.
      </p>
    </div>
  ),
};

/**
 * Side-by-side comparison of all interactive states for the destructive button.
 */
export const DestructiveStates: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "24px", fontFamily: "Inter, sans-serif" }}>
      {["Default", "Disabled"].map((state) => (
        <div key={state} style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "11px", color: "#6b7280" }}>{state}</span>
          <Button
            label="Button CTA"
            hierarchy="primary"
            destructive
            disabled={state === "Disabled"}
          />
        </div>
      ))}
    </div>
  ),
};

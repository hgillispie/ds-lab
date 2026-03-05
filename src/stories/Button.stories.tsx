import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

/**
 * The `Button` component is the primary interactive element for user actions.
 *
 * ### Variants
 * - **Hierarchy**: `primary` (filled) or `secondary-gray` (outlined)
 * - **Size**: `md` (14px) or `lg` (16px)
 * - **Destructive**: uses cyan tones to signal a dangerous or irreversible action
 * - **Trailing Icon**: optional circle icon rendered after the label
 *
 * ### States
 * Default, Hover, Focused, Disabled – all handled via CSS with correct
 * color tokens from the Figma design.
 *
 * ### Accessibility
 * - Uses a native `<button>` element for full keyboard and screen-reader support
 * - `aria-disabled` is set when `disabled` is `true`
 * - Focus ring is always visible (`:focus-visible`)
 * - Icons are hidden from assistive technology (`aria-hidden`)
 */
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Primary UI component for user interaction. Supports multiple sizes, hierarchies, destructive variants, and an optional trailing icon.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["md", "lg"],
      description: "Controls the padding and font size of the button.",
      table: { defaultValue: { summary: "md" } },
    },
    hierarchy: {
      control: "select",
      options: ["primary", "secondary-gray"],
      description:
        "Visual emphasis level. `primary` is filled; `secondary-gray` is outlined.",
      table: { defaultValue: { summary: "primary" } },
    },
    trailingIcon: {
      control: "boolean",
      description: "When true, renders a circle icon after the label.",
      table: { defaultValue: { summary: "false" } },
    },
    destructive: {
      control: "boolean",
      description:
        "Applies a cyan destructive color scheme to signal irreversible actions.",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Disables the button and applies muted styles.",
      table: { defaultValue: { summary: "false" } },
    },
    label: {
      control: "text",
      description: "Text content displayed inside the button.",
      table: { defaultValue: { summary: "Button CTA" } },
    },
  },
  args: {
    onClick: fn(),
    label: "Button CTA",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default ────────────────────────────────────────────────────────────────

/** The default primary button — the highest-emphasis action on a page. */
export const Default: Story = {
  args: {
    hierarchy: "primary",
    size: "md",
    label: "Button CTA",
  },
};

// ─── Hierarchy ───────────────────────────────────────────────────────────────

/** Filled button with a dark navy background — highest visual weight. */
export const Primary: Story = {
  name: "Primary",
  args: { hierarchy: "primary", size: "md" },
};

/** Outlined button with a gray border — medium visual weight. */
export const SecondaryGray: Story = {
  name: "Secondary Gray",
  args: { hierarchy: "secondary-gray", size: "md" },
};

// ─── Sizes ───────────────────────────────────────────────────────────────────

/** Medium size — 14px font, 10px × 16px padding. */
export const SizeMd: Story = {
  name: "Size: Medium",
  args: { size: "md", hierarchy: "primary" },
};

/** Large size — 16px font, 10px × 18px padding. */
export const SizeLg: Story = {
  name: "Size: Large",
  args: { size: "lg", hierarchy: "primary" },
};

// ─── States ──────────────────────────────────────────────────────────────────

/** Disabled state — muted colors, `not-allowed` cursor, no pointer events. */
export const Disabled: Story = {
  args: { disabled: true, hierarchy: "primary" },
};

/** Disabled secondary-gray variant. */
export const DisabledSecondaryGray: Story = {
  name: "Disabled: Secondary Gray",
  args: { disabled: true, hierarchy: "secondary-gray" },
};

// ─── Destructive ─────────────────────────────────────────────────────────────

/**
 * Destructive primary — cyan-filled button for irreversible actions.
 * Use sparingly: deleting records, revoking access, etc.
 */
export const DestructivePrimary: Story = {
  name: "Destructive: Primary",
  args: { destructive: true, hierarchy: "primary" },
};

/**
 * Destructive secondary-gray — cyan border + text on white background.
 * Lower emphasis than the filled destructive variant.
 */
export const DestructiveSecondaryGray: Story = {
  name: "Destructive: Secondary Gray",
  args: { destructive: true, hierarchy: "secondary-gray" },
};

/** Disabled destructive primary. */
export const DestructivePrimaryDisabled: Story = {
  name: "Destructive Primary: Disabled",
  args: { destructive: true, hierarchy: "primary", disabled: true },
};

/** Disabled destructive secondary-gray. */
export const DestructiveSecondaryGrayDisabled: Story = {
  name: "Destructive Secondary Gray: Disabled",
  args: {
    destructive: true,
    hierarchy: "secondary-gray",
    disabled: true,
  },
};

// ─── With Trailing Icon ───────────────────────────────────────────────────────

/** Primary button with a trailing circle icon. */
export const WithTrailingIcon: Story = {
  name: "With Trailing Icon",
  args: { trailingIcon: true, hierarchy: "primary" },
};

/** Secondary-gray button with a trailing circle icon. */
export const SecondaryGrayWithIcon: Story = {
  name: "Secondary Gray with Trailing Icon",
  args: { trailingIcon: true, hierarchy: "secondary-gray" },
};

/** Destructive primary with trailing icon. */
export const DestructiveWithIcon: Story = {
  name: "Destructive with Trailing Icon",
  args: { trailingIcon: true, hierarchy: "primary", destructive: true },
};

// ─── All Variants ─────────────────────────────────────────────────────────────

type VariantGroup = {
  heading: string;
  buttons: Array<React.ComponentProps<typeof Button>>;
};

const VARIANT_GROUPS: VariantGroup[] = [
  {
    heading: "Primary — md",
    buttons: [
      { size: "md", hierarchy: "primary" },
      { size: "md", hierarchy: "primary", trailingIcon: true },
      { size: "md", hierarchy: "primary", disabled: true },
      { size: "md", hierarchy: "primary", trailingIcon: true, disabled: true },
    ],
  },
  {
    heading: "Primary Destructive — md",
    buttons: [
      { size: "md", hierarchy: "primary", destructive: true },
      { size: "md", hierarchy: "primary", destructive: true, trailingIcon: true },
      { size: "md", hierarchy: "primary", destructive: true, disabled: true },
      { size: "md", hierarchy: "primary", destructive: true, trailingIcon: true, disabled: true },
    ],
  },
  {
    heading: "Secondary Gray — md",
    buttons: [
      { size: "md", hierarchy: "secondary-gray" },
      { size: "md", hierarchy: "secondary-gray", trailingIcon: true },
      { size: "md", hierarchy: "secondary-gray", disabled: true },
      { size: "md", hierarchy: "secondary-gray", trailingIcon: true, disabled: true },
    ],
  },
  {
    heading: "Secondary Gray Destructive — md",
    buttons: [
      { size: "md", hierarchy: "secondary-gray", destructive: true },
      { size: "md", hierarchy: "secondary-gray", destructive: true, trailingIcon: true },
      { size: "md", hierarchy: "secondary-gray", destructive: true, disabled: true },
      { size: "md", hierarchy: "secondary-gray", destructive: true, trailingIcon: true, disabled: true },
    ],
  },
  {
    heading: "Primary — lg",
    buttons: [
      { size: "lg", hierarchy: "primary" },
      { size: "lg", hierarchy: "primary", trailingIcon: true },
      { size: "lg", hierarchy: "primary", disabled: true },
      { size: "lg", hierarchy: "primary", trailingIcon: true, disabled: true },
    ],
  },
  {
    heading: "Primary Destructive — lg",
    buttons: [
      { size: "lg", hierarchy: "primary", destructive: true },
      { size: "lg", hierarchy: "primary", destructive: true, trailingIcon: true },
      { size: "lg", hierarchy: "primary", destructive: true, disabled: true },
      { size: "lg", hierarchy: "primary", destructive: true, trailingIcon: true, disabled: true },
    ],
  },
  {
    heading: "Secondary Gray — lg",
    buttons: [
      { size: "lg", hierarchy: "secondary-gray" },
      { size: "lg", hierarchy: "secondary-gray", trailingIcon: true },
      { size: "lg", hierarchy: "secondary-gray", disabled: true },
      { size: "lg", hierarchy: "secondary-gray", trailingIcon: true, disabled: true },
    ],
  },
  {
    heading: "Secondary Gray Destructive — lg",
    buttons: [
      { size: "lg", hierarchy: "secondary-gray", destructive: true },
      { size: "lg", hierarchy: "secondary-gray", destructive: true, trailingIcon: true },
      { size: "lg", hierarchy: "secondary-gray", destructive: true, disabled: true },
      { size: "lg", hierarchy: "secondary-gray", destructive: true, trailingIcon: true, disabled: true },
    ],
  },
];

/**
 * All 64 button variants from the Figma design displayed in organised groups.
 *
 * Each row shows: Default · Default+Icon · Disabled · Disabled+Icon
 */
export const AllVariants: Story = {
  name: "All Variants",
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "32px",
        fontFamily: "Inter, -apple-system, sans-serif",
        maxWidth: "760px",
      }}
    >
      {VARIANT_GROUPS.map((group) => (
        <section key={group.heading}>
          <h3
            style={{
              margin: "0 0 16px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#6B7280",
            }}
          >
            {group.heading}
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              alignItems: "center",
            }}
          >
            {group.buttons.map((props, i) => (
              <Button key={i} label="Button CTA" {...props} />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

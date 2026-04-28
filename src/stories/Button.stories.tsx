/**
 * Button.stories.tsx
 *
 * Storybook story file for the Nexus Design System Button component.
 *
 * This file covers all 64 variants derived from the Figma component set:
 *   Size (md | lg) × Hierarchy (primary | secondary-gray)
 *   × Destructive (false | true) × Icon (none | trailing)
 *   × State (default | hover | focused | disabled)
 *
 * Stories are organized into three tiers:
 *   1. Default — fully interactive playground with Controls panel
 *   2. Named variant stories — one story per meaningful combination,
 *      used for focused documentation and snapshot testing
 *   3. AllVariants — a single visual reference grid showing every
 *      hierarchy × destructive group across all size/icon columns
 *
 * Hover and focus states are driven entirely by CSS (:hover, :focus-visible)
 * and are interactive in the canvas — no forced-state prop is needed.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import { Button } from "./Button";

// ---------------------------------------------------------------------------
// Meta — shared configuration applied to every story in this file
// ---------------------------------------------------------------------------

/**
 * `meta` defines the Storybook metadata for the Button component.
 *
 * - `title` places it under "Design System > Button" in the sidebar.
 * - `tags: ["autodocs"]` generates a full prop-table docs page automatically.
 * - `argTypes` configures the Controls panel — each entry maps a prop to a
 *   specific control widget (select, boolean, text) and adds inline docs.
 * - `args` sets shared defaults inherited by every story; individual stories
 *   can override any of these values.
 */
const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    // Center the button in the canvas for single-variant stories.
    // AllVariants overrides this with "padded" to accommodate the full grid.
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
    // size — drives padding and font size; md is the default for most UI contexts
    size: {
      control: "select",
      options: ["md", "lg"],
      description: "Controls button size — md uses 14px text, lg uses 16px text",
      table: { defaultValue: { summary: "md" } },
    },
    // hierarchy — determines the overall visual weight of the button
    // "primary" = filled background; "secondary-gray" = white bg with gray border
    hierarchy: {
      control: "select",
      options: ["primary", "secondary-gray"],
      description:
        "Visual weight — primary uses a filled background, secondary-gray uses a bordered style",
      table: { defaultValue: { summary: "primary" } },
    },
    // destructive — switches the color palette to the cyan accent theme (#06B6D4)
    // This is the design system's convention for high-consequence actions
    destructive: {
      control: "boolean",
      description: "Applies the cyan destructive color theme",
      table: { defaultValue: { summary: "false" } },
    },
    // icon — when set to "trailing", renders a decorative circle SVG after the label
    icon: {
      control: "select",
      options: ["none", "trailing"],
      description: "Position of the icon relative to the label",
      table: { defaultValue: { summary: "none" } },
    },
    // disabled — prevents interaction and reduces visual contrast via CSS :disabled
    disabled: {
      control: "boolean",
      description: "Disables the button, preventing interaction",
      table: { defaultValue: { summary: "false" } },
    },
    // label — the visible button text; mapped to a textarea control for easy editing
    label: {
      control: "text",
      description: "The text displayed inside the button",
    },
    // onClick is wired to Storybook's action logger so clicks appear in the Actions panel
    onClick: { action: "clicked" },
  },
  // Shared default args — every story inherits these unless it overrides them
  args: {
    label: "Button CTA",
    onClick: fn(), // fn() wraps the handler so call counts appear in the Actions panel
  },
} satisfies Meta<typeof Button>;

export default meta;

// StoryObj<typeof meta> gives us type-safe `args` scoped to the Button's prop interface
type Story = StoryObj<typeof meta>;

/* ============================================================
   DEFAULT — Interactive playground
   The Controls panel exposes every prop so reviewers can
   explore all combinations without switching stories.
   ============================================================ */

/**
 * The fully interactive default story. Use the Controls panel below
 * to adjust any prop and see the result live in the canvas.
 */
export const Default: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    destructive: false,
    icon: "none",
    disabled: false,
  },
};

/* ============================================================
   PRIMARY — Non-destructive hierarchy
   Dark navy (#0F172A) background, white text.
   Hover → slightly darker (#0C1427)
   Focus → navy + 4px ring (#E2E8F0)
   Disabled → muted slate (#CBD5E1)
   ============================================================ */

/**
 * Default medium primary button — the most common button in the system.
 * Use this for the principal call-to-action on any given screen.
 */
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

/**
 * Large primary button — 16px text with slightly wider horizontal padding (18px).
 * Use in hero sections or wherever a more prominent CTA is needed.
 */
export const PrimaryLarge: Story = {
  name: "Primary — Large",
  args: {
    hierarchy: "primary",
    destructive: false,
    size: "lg",
    icon: "none",
  },
};

/**
 * Primary button with a trailing circle icon.
 * The icon inherits `currentColor` so it always matches the label's contrast.
 */
export const PrimaryWithIcon: Story = {
  name: "Primary — With Trailing Icon",
  args: {
    hierarchy: "primary",
    destructive: false,
    size: "md",
    icon: "trailing",
  },
};

/**
 * Disabled primary button. Rendered with reduced contrast (#CBD5E1 background)
 * and `cursor: not-allowed`. Both `disabled` and `aria-disabled` are set so
 * assistive technologies announce the state correctly.
 */
export const PrimaryDisabled: Story = {
  name: "Primary — Disabled",
  args: {
    hierarchy: "primary",
    destructive: false,
    size: "md",
    disabled: true,
  },
};

/* ============================================================
   PRIMARY DESTRUCTIVE — Cyan accent theme
   Filled cyan (#06B6D4) background, white text.
   Hover → darker cyan (#0891B2)
   Focus → cyan + 4px ring (#CFFAFE)
   Disabled → pale cyan (#A5F3FC), white text
   ============================================================ */

/**
 * Destructive primary button — uses the cyan accent color palette.
 * In this design system "destructive" maps to the brand accent (cyan),
 * not the conventional red. Reserve for actions with significant consequence.
 */
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

/**
 * Large destructive primary button — same cyan palette at 16px text size.
 */
export const PrimaryDestructiveLarge: Story = {
  name: "Primary — Destructive Large",
  args: {
    hierarchy: "primary",
    destructive: true,
    size: "lg",
    icon: "none",
  },
};

/**
 * Destructive primary button with a trailing icon.
 * The icon stroke color is driven by `currentColor`, so it stays white
 * on the filled cyan background.
 */
export const PrimaryDestructiveWithIcon: Story = {
  name: "Primary — Destructive With Trailing Icon",
  args: {
    hierarchy: "primary",
    destructive: true,
    size: "md",
    icon: "trailing",
  },
};

/**
 * Disabled destructive primary — pale cyan (#A5F3FC) background.
 * Visually communicates "unavailable destructive action" while remaining
 * distinguishable from a disabled standard primary.
 */
export const PrimaryDestructiveDisabled: Story = {
  name: "Primary — Destructive Disabled",
  args: {
    hierarchy: "primary",
    destructive: true,
    size: "md",
    disabled: true,
  },
};

/* ============================================================
   SECONDARY GRAY — Non-destructive hierarchy
   White background, gray border (#D5D7DA), dark text (#414651).
   Hover → off-white (#FAFAFA) bg, darker text (#252B37)
   Focus → white bg + 4px ring (#F5F5F5)
   Disabled → white bg, faded border (#E9EAEB), muted text (#D5D7DA)
   ============================================================ */

/**
 * Secondary gray button — a lower-emphasis alternative to primary.
 * Use alongside a primary button for secondary or cancel-style actions.
 */
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

/**
 * Large secondary gray button — matches the `lg` primary in height and
 * font size for use in mixed-size button groups.
 */
export const SecondaryGrayLarge: Story = {
  name: "Secondary Gray — Large",
  args: {
    hierarchy: "secondary-gray",
    destructive: false,
    size: "lg",
    icon: "none",
  },
};

/**
 * Secondary gray button with a trailing icon.
 * The icon stroke inherits the dark text color (#414651) to stay legible
 * on the white/light background.
 */
export const SecondaryGrayWithIcon: Story = {
  name: "Secondary Gray — With Trailing Icon",
  args: {
    hierarchy: "secondary-gray",
    destructive: false,
    size: "md",
    icon: "trailing",
  },
};

/**
 * Disabled secondary gray — nearly invisible border (#E9EAEB) and
 * muted text (#D5D7DA) signal that the action is not currently available.
 */
export const SecondaryGrayDisabled: Story = {
  name: "Secondary Gray — Disabled",
  args: {
    hierarchy: "secondary-gray",
    destructive: false,
    size: "md",
    disabled: true,
  },
};

/* ============================================================
   SECONDARY GRAY DESTRUCTIVE — Cyan accent on bordered style
   White background, cyan border (#67E8F9), cyan text (#0891B2).
   Hover → light cyan bg (#ECFEFF), darker text (#0E7490)
   Focus → white bg + 4px ring (#CFFAFE)
   Disabled → white bg, pale cyan border (#A5F3FC), pale text (#67E8F9)
   ============================================================ */

/**
 * Secondary gray with destructive theming — combines the outlined style
 * with the cyan accent palette. Use when a destructive action needs to
 * appear less dominant than a filled destructive button.
 */
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

/**
 * Large secondary gray destructive — same cyan outlined style at 16px text.
 */
export const SecondaryGrayDestructiveLarge: Story = {
  name: "Secondary Gray — Destructive Large",
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
    size: "lg",
    icon: "none",
  },
};

/**
 * Secondary gray destructive with a trailing icon.
 * Icon stroke color matches the cyan text (#0891B2) via `currentColor`.
 */
export const SecondaryGrayDestructiveWithIcon: Story = {
  name: "Secondary Gray — Destructive With Trailing Icon",
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
    size: "md",
    icon: "trailing",
  },
};

/**
 * Disabled secondary gray destructive — all cyan values shift to their
 * lightest tones (#A5F3FC border, #67E8F9 text) to indicate unavailability.
 */
export const SecondaryGrayDestructiveDisabled: Story = {
  name: "Secondary Gray — Destructive Disabled",
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
    size: "md",
    disabled: true,
  },
};

/* ============================================================
   ALL VARIANTS — Comprehensive visual reference grid
   ============================================================ */

/**
 * `variantGrid` defines the four top-level hierarchy × destructive groups
 * that appear as labelled sections in the AllVariants story.
 * Each entry is rendered as its own titled block with Default and Disabled rows.
 */
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

/**
 * `columnConfigs` defines the four columns shown within each variant group:
 * md/lg size combined with no-icon/trailing-icon position.
 * The `label` is used as the column header text in the grid.
 */
const columnConfigs = [
  { size: "md" as const, icon: "none" as const, label: "md · No Icon" },
  { size: "lg" as const, icon: "none" as const, label: "lg · No Icon" },
  { size: "md" as const, icon: "trailing" as const, label: "md · Trailing Icon" },
  { size: "lg" as const, icon: "trailing" as const, label: "lg · Trailing Icon" },
];

/**
 * AllVariants renders a complete 4×2 grid for each of the four
 * hierarchy × destructive groups, giving 32 unique visual tokens
 * (16 enabled + 16 disabled).
 *
 * Hover and focus states are CSS-driven and fully interactive in the canvas —
 * mouse over any button to see the hover state; tab to it for the focus ring.
 *
 * Layout note: `layout: "padded"` is used instead of "centered" so the
 * full-width grid has room to breathe without being clipped.
 */
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
      {/* Scoped styles for the variant grid layout — kept inline to avoid
          polluting the global stylesheet used by other stories. */}
      <style>{`
        .all-variants-wrapper {
          font-family: Inter, -apple-system, sans-serif;
          padding: 32px;
          background: #fff;
          min-width: 800px;
        }
        /* Each hierarchy × destructive block */
        .variant-group {
          margin-bottom: 40px;
        }
        /* Section label above each group (e.g. "PRIMARY — DESTRUCTIVE") */
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
        /* Column header row (md · No Icon, lg · No Icon, etc.) */
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
        /* A single row of four buttons (Default or Disabled) */
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
        /* Center each button within its grid cell */
        .variant-cell {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* Stretch buttons to fill their column so widths are consistent */
        .all-variants-wrapper .btn {
          width: 100%;
          max-width: 180px;
        }
      `}</style>

      {/* Render one labelled section per hierarchy × destructive combination */}
      {variantGrid.map(({ group, hierarchy, destructive }) => (
        <div key={group} className="variant-group">
          <p className="variant-group-title">{group}</p>

          {/* Column headers: md/lg × no-icon/trailing-icon */}
          <div className="variant-column-headers">
            {columnConfigs.map(({ label }) => (
              <div key={label} className="variant-column-header">{label}</div>
            ))}
          </div>

          {/* Row 1: Default (enabled) state for this group */}
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

          {/* Row 2: Disabled state — same size/icon columns, `disabled` prop set */}
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

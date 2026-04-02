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
The **Button** component is the primary interactive element in the Nexus Design System.

### Variants
- **Size**: \`md\` (14px) or \`lg\` (16px)
- **Hierarchy**: \`primary\` (solid) or \`secondary-gray\` (outlined)
- **Destructive**: When \`true\`, switches the color scheme to cyan/teal to signal a key action
- **Icon**: \`none\` or \`trailing\` (circle icon placed after the label)

### States
All states (hover, focus-visible, disabled) are handled automatically via CSS.

### Accessibility
- Uses a native \`<button>\` element for full keyboard and screen-reader support
- Focus ring is visible on keyboard navigation (\`:focus-visible\`)
- \`disabled\` prop disables interaction and applies reduced-opacity styling
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["md", "lg"],
      description: "Controls the font size and padding of the button",
      table: { defaultValue: { summary: "md" } },
    },
    hierarchy: {
      control: "select",
      options: ["primary", "secondary-gray"],
      description: "Visual weight of the button",
      table: { defaultValue: { summary: "primary" } },
    },
    destructive: {
      control: "boolean",
      description:
        "Applies the destructive (cyan) color scheme — for key or warning actions",
      table: { defaultValue: { summary: "false" } },
    },
    icon: {
      control: "select",
      options: ["none", "trailing"],
      description: "Position of the icon relative to the label",
      table: { defaultValue: { summary: "none" } },
    },
    label: {
      control: "text",
      description: "Text content of the button",
      table: { defaultValue: { summary: "Button CTA" } },
    },
    disabled: {
      control: "boolean",
      description: "Disables the button and applies the disabled styling",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ============================================================
   Individual variant stories
   ============================================================ */

/** Default primary button — the most common call-to-action style. */
export const Default: Story = {
  args: {
    label: "Button CTA",
    size: "md",
    hierarchy: "primary",
  },
};

/** Large primary button — use when extra visual weight is needed. */
export const Large: Story = {
  args: {
    label: "Button CTA",
    size: "lg",
    hierarchy: "primary",
  },
};

/** Secondary (outlined) button — use for secondary actions alongside a primary button. */
export const SecondaryGray: Story = {
  args: {
    label: "Button CTA",
    size: "md",
    hierarchy: "secondary-gray",
  },
};

/** Primary button with the destructive (cyan) color — highlights a key or irreversible action. */
export const Destructive: Story = {
  args: {
    label: "Button CTA",
    size: "md",
    hierarchy: "primary",
    destructive: true,
  },
};

/** Secondary outlined button with the destructive (cyan) color scheme. */
export const SecondaryDestructive: Story = {
  args: {
    label: "Button CTA",
    size: "md",
    hierarchy: "secondary-gray",
    destructive: true,
  },
};

/** Primary button with a trailing circle icon. */
export const WithTrailingIcon: Story = {
  args: {
    label: "Button CTA",
    size: "md",
    hierarchy: "primary",
    icon: "trailing",
  },
};

/** Secondary button with a trailing circle icon. */
export const SecondaryWithTrailingIcon: Story = {
  args: {
    label: "Button CTA",
    size: "md",
    hierarchy: "secondary-gray",
    icon: "trailing",
  },
};

/** Disabled primary button — interaction is blocked and styling is dimmed. */
export const DisabledPrimary: Story = {
  args: {
    label: "Button CTA",
    size: "md",
    hierarchy: "primary",
    disabled: true,
  },
};

/** Disabled secondary button. */
export const DisabledSecondary: Story = {
  args: {
    label: "Button CTA",
    size: "md",
    hierarchy: "secondary-gray",
    disabled: true,
  },
};

/* ============================================================
   All Variants overview story
   ============================================================ */

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontFamily: "Inter, sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#6b7280",
      margin: "0 0 12px",
      gridColumn: "1 / -1",
    }}
  >
    {children}
  </p>
);

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, auto)",
      gap: "12px 24px",
      alignItems: "center",
      justifyItems: "start",
    }}
  >
    {children}
  </div>
);

/**
 * Complete overview of every button variant and state from the Figma design.
 * Use this as a visual reference for all supported combinations.
 */
export const AllVariants: Story = {
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 40,
        padding: 32,
        fontFamily: "Inter, sans-serif",
        background: "#fff",
      }}
    >
      {/* ── Primary / Non-destructive ── */}
      <section>
        <SectionLabel>Primary — Default</SectionLabel>
        <Grid>
          <Button size="md" hierarchy="primary" label="Button CTA" />
          <Button size="md" hierarchy="primary" icon="trailing" label="Button CTA" />
          <Button size="lg" hierarchy="primary" label="Button CTA" />
          <Button size="lg" hierarchy="primary" icon="trailing" label="Button CTA" />
        </Grid>
      </section>

      <section>
        <SectionLabel>Primary — Disabled</SectionLabel>
        <Grid>
          <Button size="md" hierarchy="primary" label="Button CTA" disabled />
          <Button size="md" hierarchy="primary" icon="trailing" label="Button CTA" disabled />
          <Button size="lg" hierarchy="primary" label="Button CTA" disabled />
          <Button size="lg" hierarchy="primary" icon="trailing" label="Button CTA" disabled />
        </Grid>
      </section>

      {/* ── Primary / Destructive ── */}
      <section>
        <SectionLabel>Primary Destructive — Default</SectionLabel>
        <Grid>
          <Button size="md" hierarchy="primary" destructive label="Button CTA" />
          <Button size="md" hierarchy="primary" destructive icon="trailing" label="Button CTA" />
          <Button size="lg" hierarchy="primary" destructive label="Button CTA" />
          <Button size="lg" hierarchy="primary" destructive icon="trailing" label="Button CTA" />
        </Grid>
      </section>

      <section>
        <SectionLabel>Primary Destructive — Disabled</SectionLabel>
        <Grid>
          <Button size="md" hierarchy="primary" destructive label="Button CTA" disabled />
          <Button size="md" hierarchy="primary" destructive icon="trailing" label="Button CTA" disabled />
          <Button size="lg" hierarchy="primary" destructive label="Button CTA" disabled />
          <Button size="lg" hierarchy="primary" destructive icon="trailing" label="Button CTA" disabled />
        </Grid>
      </section>

      {/* ── Secondary gray / Non-destructive ── */}
      <section>
        <SectionLabel>Secondary Gray — Default</SectionLabel>
        <Grid>
          <Button size="md" hierarchy="secondary-gray" label="Button CTA" />
          <Button size="md" hierarchy="secondary-gray" icon="trailing" label="Button CTA" />
          <Button size="lg" hierarchy="secondary-gray" label="Button CTA" />
          <Button size="lg" hierarchy="secondary-gray" icon="trailing" label="Button CTA" />
        </Grid>
      </section>

      <section>
        <SectionLabel>Secondary Gray — Disabled</SectionLabel>
        <Grid>
          <Button size="md" hierarchy="secondary-gray" label="Button CTA" disabled />
          <Button size="md" hierarchy="secondary-gray" icon="trailing" label="Button CTA" disabled />
          <Button size="lg" hierarchy="secondary-gray" label="Button CTA" disabled />
          <Button size="lg" hierarchy="secondary-gray" icon="trailing" label="Button CTA" disabled />
        </Grid>
      </section>

      {/* ── Secondary gray / Destructive ── */}
      <section>
        <SectionLabel>Secondary Gray Destructive — Default</SectionLabel>
        <Grid>
          <Button size="md" hierarchy="secondary-gray" destructive label="Button CTA" />
          <Button size="md" hierarchy="secondary-gray" destructive icon="trailing" label="Button CTA" />
          <Button size="lg" hierarchy="secondary-gray" destructive label="Button CTA" />
          <Button size="lg" hierarchy="secondary-gray" destructive icon="trailing" label="Button CTA" />
        </Grid>
      </section>

      <section>
        <SectionLabel>Secondary Gray Destructive — Disabled</SectionLabel>
        <Grid>
          <Button size="md" hierarchy="secondary-gray" destructive label="Button CTA" disabled />
          <Button size="md" hierarchy="secondary-gray" destructive icon="trailing" label="Button CTA" disabled />
          <Button size="lg" hierarchy="secondary-gray" destructive label="Button CTA" disabled />
          <Button size="lg" hierarchy="secondary-gray" destructive icon="trailing" label="Button CTA" disabled />
        </Grid>
      </section>
    </div>
  ),
};

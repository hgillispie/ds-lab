import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

import { Button } from "./Button";

const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile button component supporting two sizes (`md`, `lg`), two hierarchies (`primary`, `secondary-gray`), a destructive mode, an optional trailing icon, and all interactive states. Use Inter font throughout.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["md", "lg"],
      description: "Size of the button — affects font size and padding.",
    },
    hierarchy: {
      control: "select",
      options: ["primary", "secondary-gray"],
      description:
        "`primary` is a filled button. `secondary-gray` is outlined with a white background.",
    },
    destructive: {
      control: "boolean",
      description:
        "Applies the destructive (cyan) color palette to signal danger.",
    },
    icon: {
      control: "select",
      options: ["none", "trailing"],
      description: "Position of the icon relative to the label.",
    },
    label: {
      control: "text",
      description: "Text displayed inside the button.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button and applies the disabled visual state.",
    },
  },
  args: {
    onClick: fn(),
    label: "Button CTA",
    size: "md",
    hierarchy: "primary",
    destructive: false,
    icon: "none",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------
   Core Variants
------------------------------------------------------- */

/** Default primary button — the main call-to-action style. */
export const Primary: Story = {
  args: {
    hierarchy: "primary",
    size: "md",
  },
};

/** Large primary button. */
export const PrimaryLarge: Story = {
  args: {
    hierarchy: "primary",
    size: "lg",
  },
};

/** Secondary gray button — outlined style for secondary actions. */
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

/* -------------------------------------------------------
   Destructive Variants
------------------------------------------------------- */

/** Primary destructive — use for irreversible or dangerous actions. */
export const PrimaryDestructive: Story = {
  args: {
    hierarchy: "primary",
    destructive: true,
  },
};

/** Secondary gray destructive — outlined danger button. */
export const SecondaryGrayDestructive: Story = {
  args: {
    hierarchy: "secondary-gray",
    destructive: true,
  },
};

/* -------------------------------------------------------
   Icon Variants
------------------------------------------------------- */

/** Primary button with a trailing icon. */
export const WithTrailingIcon: Story = {
  args: {
    hierarchy: "primary",
    icon: "trailing",
  },
};

/** Secondary gray with a trailing icon. */
export const SecondaryWithTrailingIcon: Story = {
  args: {
    hierarchy: "secondary-gray",
    icon: "trailing",
  },
};

/** Primary destructive with a trailing icon. */
export const DestructiveWithTrailingIcon: Story = {
  args: {
    hierarchy: "primary",
    destructive: true,
    icon: "trailing",
  },
};

/* -------------------------------------------------------
   Disabled States
------------------------------------------------------- */

/** Disabled primary button. */
export const Disabled: Story = {
  args: {
    hierarchy: "primary",
    disabled: true,
  },
};

/** Disabled secondary gray button. */
export const SecondaryGrayDisabled: Story = {
  args: {
    hierarchy: "secondary-gray",
    disabled: true,
  },
};

/** Disabled destructive primary button. */
export const DestructiveDisabled: Story = {
  args: {
    hierarchy: "primary",
    destructive: true,
    disabled: true,
  },
};

/* -------------------------------------------------------
   All Variants — Comprehensive Overview
------------------------------------------------------- */

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontFamily: "Inter, sans-serif",
      fontSize: "11px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "#9ca3af",
      margin: "0 0 12px",
    }}
  >
    {children}
  </p>
);

const Row = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      alignItems: "center",
      marginBottom: "8px",
    }}
  >
    {children}
  </div>
);

const Section = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div style={{ marginBottom: "32px" }}>
    <SectionLabel>{label}</SectionLabel>
    {children}
  </div>
);

/**
 * Complete overview of every variant, size, icon, and state combination.
 * Mirrors the Figma component set exactly.
 */
export const AllVariants: Story = {
  parameters: {
    layout: "padded",
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Every combination of hierarchy × destructive × size × icon × state.",
      },
    },
  },
  render: () => (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "24px" }}>
      {/* PRIMARY — md */}
      <Section label="Primary · Medium">
        <Row>
          <Button hierarchy="primary" size="md" label="Button CTA" />
          <Button
            hierarchy="primary"
            size="md"
            label="Button CTA"
            icon="trailing"
          />
        </Row>
        <Row>
          <Button
            hierarchy="primary"
            size="md"
            label="Button CTA"
            disabled
          />
          <Button
            hierarchy="primary"
            size="md"
            label="Button CTA"
            icon="trailing"
            disabled
          />
        </Row>
      </Section>

      {/* PRIMARY — lg */}
      <Section label="Primary · Large">
        <Row>
          <Button hierarchy="primary" size="lg" label="Button CTA" />
          <Button
            hierarchy="primary"
            size="lg"
            label="Button CTA"
            icon="trailing"
          />
        </Row>
        <Row>
          <Button
            hierarchy="primary"
            size="lg"
            label="Button CTA"
            disabled
          />
          <Button
            hierarchy="primary"
            size="lg"
            label="Button CTA"
            icon="trailing"
            disabled
          />
        </Row>
      </Section>

      {/* SECONDARY GRAY — md */}
      <Section label="Secondary Gray · Medium">
        <Row>
          <Button hierarchy="secondary-gray" size="md" label="Button CTA" />
          <Button
            hierarchy="secondary-gray"
            size="md"
            label="Button CTA"
            icon="trailing"
          />
        </Row>
        <Row>
          <Button
            hierarchy="secondary-gray"
            size="md"
            label="Button CTA"
            disabled
          />
          <Button
            hierarchy="secondary-gray"
            size="md"
            label="Button CTA"
            icon="trailing"
            disabled
          />
        </Row>
      </Section>

      {/* SECONDARY GRAY — lg */}
      <Section label="Secondary Gray · Large">
        <Row>
          <Button hierarchy="secondary-gray" size="lg" label="Button CTA" />
          <Button
            hierarchy="secondary-gray"
            size="lg"
            label="Button CTA"
            icon="trailing"
          />
        </Row>
        <Row>
          <Button
            hierarchy="secondary-gray"
            size="lg"
            label="Button CTA"
            disabled
          />
          <Button
            hierarchy="secondary-gray"
            size="lg"
            label="Button CTA"
            icon="trailing"
            disabled
          />
        </Row>
      </Section>

      {/* DESTRUCTIVE PRIMARY — md */}
      <Section label="Destructive Primary · Medium">
        <Row>
          <Button
            hierarchy="primary"
            size="md"
            destructive
            label="Button CTA"
          />
          <Button
            hierarchy="primary"
            size="md"
            destructive
            label="Button CTA"
            icon="trailing"
          />
        </Row>
        <Row>
          <Button
            hierarchy="primary"
            size="md"
            destructive
            label="Button CTA"
            disabled
          />
          <Button
            hierarchy="primary"
            size="md"
            destructive
            label="Button CTA"
            icon="trailing"
            disabled
          />
        </Row>
      </Section>

      {/* DESTRUCTIVE PRIMARY — lg */}
      <Section label="Destructive Primary · Large">
        <Row>
          <Button
            hierarchy="primary"
            size="lg"
            destructive
            label="Button CTA"
          />
          <Button
            hierarchy="primary"
            size="lg"
            destructive
            label="Button CTA"
            icon="trailing"
          />
        </Row>
        <Row>
          <Button
            hierarchy="primary"
            size="lg"
            destructive
            label="Button CTA"
            disabled
          />
          <Button
            hierarchy="primary"
            size="lg"
            destructive
            label="Button CTA"
            icon="trailing"
            disabled
          />
        </Row>
      </Section>

      {/* DESTRUCTIVE SECONDARY GRAY — md */}
      <Section label="Destructive Secondary Gray · Medium">
        <Row>
          <Button
            hierarchy="secondary-gray"
            size="md"
            destructive
            label="Button CTA"
          />
          <Button
            hierarchy="secondary-gray"
            size="md"
            destructive
            label="Button CTA"
            icon="trailing"
          />
        </Row>
        <Row>
          <Button
            hierarchy="secondary-gray"
            size="md"
            destructive
            label="Button CTA"
            disabled
          />
          <Button
            hierarchy="secondary-gray"
            size="md"
            destructive
            label="Button CTA"
            icon="trailing"
            disabled
          />
        </Row>
      </Section>

      {/* DESTRUCTIVE SECONDARY GRAY — lg */}
      <Section label="Destructive Secondary Gray · Large">
        <Row>
          <Button
            hierarchy="secondary-gray"
            size="lg"
            destructive
            label="Button CTA"
          />
          <Button
            hierarchy="secondary-gray"
            size="lg"
            destructive
            label="Button CTA"
            icon="trailing"
          />
        </Row>
        <Row>
          <Button
            hierarchy="secondary-gray"
            size="lg"
            destructive
            label="Button CTA"
            disabled
          />
          <Button
            hierarchy="secondary-gray"
            size="lg"
            destructive
            label="Button CTA"
            icon="trailing"
            disabled
          />
        </Row>
      </Section>
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import React from "react";

/**
 * Button component from the Nexus Design System
 * 
 * Buttons allow users to take actions and make choices with a single tap.
 * They communicate calls to action to the user and allow users to interact with pages in various ways.
 * 
 * ## Usage Guidelines
 * 
 * - Use **Primary** buttons for the main action on a page
 * - Use **Secondary Gray** buttons for secondary actions
 * - Set **destructive** to true for irreversible actions (deletes, removals)
 * - Add **icon** for actions that benefit from visual reinforcement
 * - Use **md** size for most interfaces, **lg** for prominent CTAs
 * 
 * ## Accessibility
 * 
 * - All buttons include proper ARIA attributes
 * - Disabled state uses `aria-disabled` for screen readers
 * - Focus states meet WCAG 2.1 contrast requirements
 * - Icons are marked as `aria-hidden` to avoid duplication
 */
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A flexible button component supporting multiple variants, sizes, and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["md", "lg"],
      description: "Button size variant",
      table: {
        type: { summary: '"md" | "lg"' },
        defaultValue: { summary: '"md"' },
      },
    },
    hierarchy: {
      control: "select",
      options: ["primary", "secondary-gray"],
      description: "Visual hierarchy style",
      table: {
        type: { summary: '"primary" | "secondary-gray"' },
        defaultValue: { summary: '"primary"' },
      },
    },
    icon: {
      control: "boolean",
      description: "Shows a trailing icon",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    destructive: {
      control: "boolean",
      description: "Destructive action styling (uses cyan accent colors)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "Button text content",
    },
  },
  args: { 
    onClick: fn(),
    children: "Button CTA",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    disabled: false,
  },
};

export const PrimaryMedium: Story = {
  name: "Primary / Medium",
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
  },
};

export const PrimaryLarge: Story = {
  name: "Primary / Large",
  args: {
    size: "lg",
    hierarchy: "primary",
    icon: false,
    destructive: false,
  },
};

export const PrimaryWithIcon: Story = {
  name: "Primary / With Icon",
  args: {
    size: "md",
    hierarchy: "primary",
    icon: true,
    destructive: false,
  },
};

export const SecondaryGray: Story = {
  name: "Secondary Gray / Medium",
  args: {
    size: "md",
    hierarchy: "secondary-gray",
    icon: false,
    destructive: false,
  },
};

export const SecondaryGrayLarge: Story = {
  name: "Secondary Gray / Large",
  args: {
    size: "lg",
    hierarchy: "secondary-gray",
    icon: false,
    destructive: false,
  },
};

export const SecondaryGrayWithIcon: Story = {
  name: "Secondary Gray / With Icon",
  args: {
    size: "md",
    hierarchy: "secondary-gray",
    icon: true,
    destructive: false,
  },
};

export const DestructivePrimary: Story = {
  name: "Destructive / Primary",
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: true,
  },
};

export const DestructivePrimaryWithIcon: Story = {
  name: "Destructive / Primary / With Icon",
  args: {
    size: "md",
    hierarchy: "primary",
    icon: true,
    destructive: true,
  },
};

export const DestructiveSecondaryGray: Story = {
  name: "Destructive / Secondary Gray",
  args: {
    size: "md",
    hierarchy: "secondary-gray",
    icon: false,
    destructive: true,
  },
};

export const DestructiveSecondaryGrayWithIcon: Story = {
  name: "Destructive / Secondary Gray / With Icon",
  args: {
    size: "md",
    hierarchy: "secondary-gray",
    icon: true,
    destructive: true,
  },
};

export const Disabled: Story = {
  name: "Disabled State",
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    disabled: true,
  },
};

export const DisabledWithIcon: Story = {
  name: "Disabled / With Icon",
  args: {
    size: "md",
    hierarchy: "primary",
    icon: true,
    destructive: false,
    disabled: true,
  },
};

export const DisabledDestructive: Story = {
  name: "Disabled / Destructive",
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: true,
    disabled: true,
  },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => {
    const Container = ({ children }: { children: React.ReactNode }) => (
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "32px",
        padding: "24px",
        maxWidth: "1200px",
      }}>
        {children}
      </div>
    );

    const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
      <div>
        <h3 style={{ 
          fontFamily: "Inter, sans-serif", 
          fontSize: "14px", 
          fontWeight: 600,
          marginBottom: "16px",
          color: "#414651",
        }}>
          {label}
        </h3>
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap",
          gap: "16px",
        }}>
          {children}
        </div>
      </div>
    );

    return (
      <Container>
        <Row label="Primary - Default State">
          <Button size="md" hierarchy="primary">Button CTA</Button>
          <Button size="md" hierarchy="primary" icon>Button CTA</Button>
          <Button size="lg" hierarchy="primary">Button CTA</Button>
          <Button size="lg" hierarchy="primary" icon>Button CTA</Button>
        </Row>

        <Row label="Primary - Destructive">
          <Button size="md" hierarchy="primary" destructive>Button CTA</Button>
          <Button size="md" hierarchy="primary" destructive icon>Button CTA</Button>
          <Button size="lg" hierarchy="primary" destructive>Button CTA</Button>
          <Button size="lg" hierarchy="primary" destructive icon>Button CTA</Button>
        </Row>

        <Row label="Secondary Gray - Default State">
          <Button size="md" hierarchy="secondary-gray">Button CTA</Button>
          <Button size="md" hierarchy="secondary-gray" icon>Button CTA</Button>
          <Button size="lg" hierarchy="secondary-gray">Button CTA</Button>
          <Button size="lg" hierarchy="secondary-gray" icon>Button CTA</Button>
        </Row>

        <Row label="Secondary Gray - Destructive">
          <Button size="md" hierarchy="secondary-gray" destructive>Button CTA</Button>
          <Button size="md" hierarchy="secondary-gray" destructive icon>Button CTA</Button>
          <Button size="lg" hierarchy="secondary-gray" destructive>Button CTA</Button>
          <Button size="lg" hierarchy="secondary-gray" destructive icon>Button CTA</Button>
        </Row>

        <Row label="Disabled States">
          <Button size="md" hierarchy="primary" disabled>Button CTA</Button>
          <Button size="md" hierarchy="primary" icon disabled>Button CTA</Button>
          <Button size="md" hierarchy="primary" destructive disabled>Button CTA</Button>
          <Button size="md" hierarchy="secondary-gray" disabled>Button CTA</Button>
          <Button size="md" hierarchy="secondary-gray" destructive disabled>Button CTA</Button>
        </Row>
      </Container>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A comprehensive view of all button variants, sizes, and states.",
      },
    },
  },
};

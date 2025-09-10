import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

// Meta configuration for the Button component
const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A comprehensive button component with multiple variants, sizes, and states.
Based on the design system with support for primary/secondary hierarchies, 
destructive actions, optional icons, and various interactive states.

## Features
- Multiple sizes (md, lg)
- Hierarchy variants (primary, secondary-gray)
- Destructive action support 
- Optional trailing icon
- Interactive states (default, hover, focused, disabled)
- Full accessibility support
- TypeScript interfaces
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["md", "lg"],
      description: "Button size - controls padding and font size",
    },
    hierarchy: {
      control: { type: "select" },
      options: ["primary", "secondary-gray"],
      description: "Button hierarchy - visual importance and styling",
    },
    icon: {
      control: { type: "boolean" },
      description: "Whether to show a trailing icon",
    },
    destructive: {
      control: { type: "boolean" },
      description: "Whether this is a destructive action (uses cyan/teal colors)",
    },
    state: {
      control: { type: "select" },
      options: ["default", "hover", "focused", "disabled"],
      description: "Button state - affects styling and interactivity",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether button is disabled",
    },
    children: {
      control: { type: "text" },
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

// Default story
export const Default: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    state: "default",
  },
};

// Primary variants
export const PrimaryMedium: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    state: "default",
  },
};

export const PrimaryLarge: Story = {
  args: {
    size: "lg",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    state: "default",
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: true,
    destructive: false,
    state: "default",
  },
};

// Destructive variants
export const DestructivePrimary: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: true,
    state: "default",
  },
};

export const DestructivePrimaryWithIcon: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: true,
    destructive: true,
    state: "default",
  },
};

// Secondary gray variants
export const SecondaryGray: Story = {
  args: {
    size: "md",
    hierarchy: "secondary-gray",
    icon: false,
    destructive: false,
    state: "default",
  },
};

export const SecondaryGrayWithIcon: Story = {
  args: {
    size: "md",
    hierarchy: "secondary-gray",
    icon: true,
    destructive: false,
    state: "default",
  },
};

export const DestructiveSecondaryGray: Story = {
  args: {
    size: "md",
    hierarchy: "secondary-gray",
    icon: false,
    destructive: true,
    state: "default",
  },
};

// State variants
export const HoverState: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    state: "hover",
  },
};

export const FocusedState: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    state: "focused",
  },
};

export const DisabledState: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    state: "disabled",
  },
};

export const DisabledProp: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    disabled: true,
  },
};

// Comprehensive showcase story showing all variants
export const AllVariants: Story = {
  render: () => {
    const sizes = ['md', 'lg'] as const;
    const hierarchies = ['primary', 'secondary-gray'] as const;
    const iconOptions = [false, true] as const;
    const destructiveOptions = [false, true] as const;
    const states = ['default', 'hover', 'focused', 'disabled'] as const;

    return (
      <div style={{ 
        display: 'grid', 
        gap: '16px', 
        padding: '24px',
        maxWidth: '1200px'
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          All Button Variants
        </h3>
        
        {sizes.map(size => (
          <div key={size} style={{ marginBottom: '32px' }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '500', textTransform: 'capitalize' }}>
              Size: {size}
            </h4>
            
            {hierarchies.map(hierarchy => (
              <div key={hierarchy} style={{ marginBottom: '24px' }}>
                <h5 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '500', textTransform: 'capitalize' }}>
                  {hierarchy.replace('-', ' ')}
                </h5>
                
                {destructiveOptions.map(destructive => (
                  <div key={String(destructive)} style={{ marginBottom: '16px' }}>
                    <h6 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '400', color: '#666' }}>
                      {destructive ? 'Destructive' : 'Normal'}
                    </h6>
                    
                    {iconOptions.map(icon => (
                      <div key={String(icon)} style={{ marginBottom: '12px' }}>
                        <span style={{ fontSize: '11px', color: '#888', marginBottom: '4px', display: 'block' }}>
                          {icon ? 'With Icon' : 'No Icon'}
                        </span>
                        
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          {states.map(state => (
                            <Button
                              key={state}
                              size={size}
                              hierarchy={hierarchy}
                              icon={icon}
                              destructive={destructive}
                              state={state}
                            >
                              {state}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'A comprehensive showcase of all button variants, sizes, hierarchies, and states.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    size: "md",
    hierarchy: "primary",
    icon: false,
    destructive: false,
    state: "default",
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive button example - use the controls below to test different combinations.',
      },
    },
  },
};

// Usage examples
export const UsageExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Form Actions</h4>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button hierarchy="primary" size="md">Save Changes</Button>
          <Button hierarchy="secondary-gray" size="md">Cancel</Button>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Destructive Actions</h4>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button hierarchy="primary" destructive size="md">Delete Item</Button>
          <Button hierarchy="secondary-gray" destructive size="md">Remove</Button>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>With Icons</h4>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button hierarchy="primary" icon size="md">Continue</Button>
          <Button hierarchy="secondary-gray" icon size="md">Learn More</Button>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Different Sizes</h4>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button hierarchy="primary" size="md">Medium</Button>
          <Button hierarchy="primary" size="lg">Large</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Common usage patterns and examples showing buttons in context.',
      },
    },
  },
};
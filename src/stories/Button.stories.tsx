import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

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

    return React.createElement('div', { 
      style: { 
        display: 'grid', 
        gap: '16px', 
        padding: '24px',
        maxWidth: '1200px'
      }
    }, [
      React.createElement('h3', { 
        key: 'title',
        style: { margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }
      }, 'All Button Variants'),
      
      ...sizes.map(size => 
        React.createElement('div', { 
          key: size, 
          style: { marginBottom: '32px' }
        }, [
          React.createElement('h4', {
            key: 'size-title',
            style: { margin: '0 0 16px 0', fontSize: '16px', fontWeight: '500', textTransform: 'capitalize' }
          }, `Size: ${size}`),
          
          ...hierarchies.map(hierarchy =>
            React.createElement('div', {
              key: hierarchy,
              style: { marginBottom: '24px' }
            }, [
              React.createElement('h5', {
                key: 'hierarchy-title',
                style: { margin: '0 0 12px 0', fontSize: '14px', fontWeight: '500', textTransform: 'capitalize' }
              }, hierarchy.replace('-', ' ')),
              
              ...destructiveOptions.map(destructive =>
                React.createElement('div', {
                  key: String(destructive),
                  style: { marginBottom: '16px' }
                }, [
                  React.createElement('h6', {
                    key: 'destructive-title',
                    style: { margin: '0 0 8px 0', fontSize: '12px', fontWeight: '400', color: '#666' }
                  }, destructive ? 'Destructive' : 'Normal'),
                  
                  ...iconOptions.map(icon =>
                    React.createElement('div', {
                      key: String(icon),
                      style: { marginBottom: '12px' }
                    }, [
                      React.createElement('span', {
                        key: 'icon-label',
                        style: { fontSize: '11px', color: '#888', marginBottom: '4px', display: 'block' }
                      }, icon ? 'With Icon' : 'No Icon'),
                      
                      React.createElement('div', {
                        key: 'buttons-row',
                        style: { display: 'flex', gap: '8px', flexWrap: 'wrap' }
                      }, states.map(state =>
                        React.createElement(Button, {
                          key: state,
                          size: size,
                          hierarchy: hierarchy,
                          icon: icon,
                          destructive: destructive,
                          state: state
                        }, state)
                      ))
                    ])
                  )
                ])
              )
            ])
          )
        ])
      )
    ]);
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
  render: () => React.createElement('div', { 
    style: { display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }
  }, [
    React.createElement('div', { key: 'form-actions' }, [
      React.createElement('h4', { 
        key: 'title',
        style: { margin: '0 0 12px 0' }
      }, 'Form Actions'),
      React.createElement('div', { 
        key: 'buttons',
        style: { display: 'flex', gap: '12px' }
      }, [
        React.createElement(Button, { 
          key: 'save',
          hierarchy: "primary", 
          size: "md" 
        }, 'Save Changes'),
        React.createElement(Button, { 
          key: 'cancel',
          hierarchy: "secondary-gray", 
          size: "md" 
        }, 'Cancel')
      ])
    ]),
    
    React.createElement('div', { key: 'destructive-actions' }, [
      React.createElement('h4', { 
        key: 'title',
        style: { margin: '0 0 12px 0' }
      }, 'Destructive Actions'),
      React.createElement('div', { 
        key: 'buttons',
        style: { display: 'flex', gap: '12px' }
      }, [
        React.createElement(Button, { 
          key: 'delete',
          hierarchy: "primary", 
          destructive: true, 
          size: "md" 
        }, 'Delete Item'),
        React.createElement(Button, { 
          key: 'remove',
          hierarchy: "secondary-gray", 
          destructive: true, 
          size: "md" 
        }, 'Remove')
      ])
    ]),
    
    React.createElement('div', { key: 'with-icons' }, [
      React.createElement('h4', { 
        key: 'title',
        style: { margin: '0 0 12px 0' }
      }, 'With Icons'),
      React.createElement('div', { 
        key: 'buttons',
        style: { display: 'flex', gap: '12px' }
      }, [
        React.createElement(Button, { 
          key: 'continue',
          hierarchy: "primary", 
          icon: true, 
          size: "md" 
        }, 'Continue'),
        React.createElement(Button, { 
          key: 'learn',
          hierarchy: "secondary-gray", 
          icon: true, 
          size: "md" 
        }, 'Learn More')
      ])
    ]),
    
    React.createElement('div', { key: 'different-sizes' }, [
      React.createElement('h4', { 
        key: 'title',
        style: { margin: '0 0 12px 0' }
      }, 'Different Sizes'),
      React.createElement('div', { 
        key: 'buttons',
        style: { display: 'flex', gap: '12px', alignItems: 'center' }
      }, [
        React.createElement(Button, { 
          key: 'medium',
          hierarchy: "primary", 
          size: "md" 
        }, 'Medium'),
        React.createElement(Button, { 
          key: 'large',
          hierarchy: "primary", 
          size: "lg" 
        }, 'Large')
      ])
    ])
  ]),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Common usage patterns and examples showing buttons in context.',
      },
    },
  },
};

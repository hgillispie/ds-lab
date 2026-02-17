import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

/**
 * Button component from the Nexus Design System
 * 
 * Buttons allow users to take actions and make choices with a single tap.
 * This component supports multiple variants, sizes, and states to fit different use cases.
 */
const meta = {
  title: 'Nexus/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible button component with primary and secondary hierarchies, ' +
          'support for trailing icons, and both standard and destructive (accent) color schemes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: 'Button size variant',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    hierarchy: {
      control: 'select',
      options: ['primary', 'secondary-gray'],
      description: 'Visual hierarchy of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    icon: {
      control: 'boolean',
      description: 'Whether to show a trailing icon',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    destructive: {
      control: 'boolean',
      description: 'Use destructive (cyan/accent) color scheme',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focused', 'disabled'],
      description: 'Button state (for demo purposes)',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description: 'Button label text',
      table: {
        defaultValue: { summary: 'Button CTA' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: { 
    onClick: fn(),
    label: 'Button CTA',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button with primary hierarchy and medium size
 */
export const Default: Story = {
  args: {
    size: 'md',
    hierarchy: 'primary',
    icon: false,
    destructive: false,
  },
};

/**
 * Primary medium button - the standard call-to-action button
 */
export const PrimaryMedium: Story = {
  args: {
    size: 'md',
    hierarchy: 'primary',
    icon: false,
    destructive: false,
  },
};

/**
 * Primary medium button with trailing icon
 */
export const PrimaryMediumWithIcon: Story = {
  args: {
    size: 'md',
    hierarchy: 'primary',
    icon: true,
    destructive: false,
  },
};

/**
 * Primary large button
 */
export const PrimaryLarge: Story = {
  args: {
    size: 'lg',
    hierarchy: 'primary',
    icon: false,
    destructive: false,
  },
};

/**
 * Primary large button with trailing icon
 */
export const PrimaryLargeWithIcon: Story = {
  args: {
    size: 'lg',
    hierarchy: 'primary',
    icon: true,
    destructive: false,
  },
};

/**
 * Destructive (accent/cyan) medium button for important actions
 */
export const DestructiveMedium: Story = {
  args: {
    size: 'md',
    hierarchy: 'primary',
    icon: false,
    destructive: true,
  },
};

/**
 * Destructive medium button with trailing icon
 */
export const DestructiveMediumWithIcon: Story = {
  args: {
    size: 'md',
    hierarchy: 'primary',
    icon: true,
    destructive: true,
  },
};

/**
 * Destructive large button
 */
export const DestructiveLarge: Story = {
  args: {
    size: 'lg',
    hierarchy: 'primary',
    icon: false,
    destructive: true,
  },
};

/**
 * Secondary gray medium button for less prominent actions
 */
export const SecondaryGrayMedium: Story = {
  args: {
    size: 'md',
    hierarchy: 'secondary-gray',
    icon: false,
    destructive: false,
  },
};

/**
 * Secondary gray medium button with trailing icon
 */
export const SecondaryGrayMediumWithIcon: Story = {
  args: {
    size: 'md',
    hierarchy: 'secondary-gray',
    icon: true,
    destructive: false,
  },
};

/**
 * Secondary gray large button
 */
export const SecondaryGrayLarge: Story = {
  args: {
    size: 'lg',
    hierarchy: 'secondary-gray',
    icon: false,
    destructive: false,
  },
};

/**
 * Secondary gray destructive medium button
 */
export const SecondaryGrayDestructiveMedium: Story = {
  args: {
    size: 'md',
    hierarchy: 'secondary-gray',
    icon: false,
    destructive: true,
  },
};

/**
 * Secondary gray destructive medium button with trailing icon
 */
export const SecondaryGrayDestructiveMediumWithIcon: Story = {
  args: {
    size: 'md',
    hierarchy: 'secondary-gray',
    icon: true,
    destructive: true,
  },
};

/**
 * Disabled primary button
 */
export const DisabledPrimary: Story = {
  args: {
    size: 'md',
    hierarchy: 'primary',
    icon: false,
    destructive: false,
    disabled: true,
  },
};

/**
 * Disabled destructive button
 */
export const DisabledDestructive: Story = {
  args: {
    size: 'md',
    hierarchy: 'primary',
    icon: false,
    destructive: true,
    disabled: true,
  },
};

/**
 * Disabled secondary gray button
 */
export const DisabledSecondaryGray: Story = {
  args: {
    size: 'md',
    hierarchy: 'secondary-gray',
    icon: false,
    destructive: false,
    disabled: true,
  },
};

/**
 * Focused state example (for demo purposes)
 */
export const FocusedState: Story = {
  args: {
    size: 'md',
    hierarchy: 'primary',
    icon: true,
    destructive: false,
    state: 'focused',
  },
};

/**
 * Hover state example (for demo purposes)
 */
export const HoverState: Story = {
  args: {
    size: 'md',
    hierarchy: 'primary',
    icon: true,
    destructive: false,
    state: 'hover',
  },
};

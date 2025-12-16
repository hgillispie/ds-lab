import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

/**
 * The Button component is a versatile UI element that supports multiple sizes,
 * hierarchies, and states. It can be used for primary actions, secondary actions,
 * and destructive operations with consistent styling across your application.
 *
 * ## Features
 * - Two sizes: Medium (md) and Large (lg)
 * - Two hierarchies: Primary and Secondary Gray
 * - Destructive variant for dangerous actions
 * - Optional trailing icon
 * - Disabled state support
 * - Full keyboard navigation support
 * - Focus ring for accessibility
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A production-ready button component with comprehensive variant support for the Nexus Design System.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    hierarchy: {
      control: 'select',
      options: ['primary', 'secondary-gray'],
      description: 'The visual hierarchy of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    destructive: {
      control: 'boolean',
      description: 'Whether this is a destructive action (uses cyan color scheme)',
      table: {
        defaultValue: { summary: false },
      },
    },
    icon: {
      control: 'select',
      options: ['none', 'trailing'],
      description: 'Whether to show a trailing icon',
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button CTA',
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
    destructive: false,
    icon: 'none',
  },
};

/**
 * Primary button - the main call-to-action style
 */
export const Primary: Story = {
  args: {
    hierarchy: 'primary',
    size: 'md',
  },
};

/**
 * Primary destructive button for dangerous actions
 */
export const PrimaryDestructive: Story = {
  args: {
    hierarchy: 'primary',
    destructive: true,
    size: 'md',
  },
};

/**
 * Secondary gray button for less prominent actions
 */
export const SecondaryGray: Story = {
  args: {
    hierarchy: 'secondary-gray',
    size: 'md',
  },
};

/**
 * Secondary gray destructive button
 */
export const SecondaryGrayDestructive: Story = {
  args: {
    hierarchy: 'secondary-gray',
    destructive: true,
    size: 'md',
  },
};

/**
 * Medium size button (default)
 */
export const MediumSize: Story = {
  args: {
    size: 'md',
    hierarchy: 'primary',
  },
};

/**
 * Large size button
 */
export const LargeSize: Story = {
  args: {
    size: 'lg',
    hierarchy: 'primary',
  },
};

/**
 * Button with trailing icon
 */
export const WithIcon: Story = {
  args: {
    icon: 'trailing',
    hierarchy: 'primary',
  },
};

/**
 * Destructive button with icon
 */
export const DestructiveWithIcon: Story = {
  args: {
    icon: 'trailing',
    hierarchy: 'primary',
    destructive: true,
  },
};

/**
 * Disabled button state
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    hierarchy: 'primary',
  },
};

/**
 * Disabled destructive button
 */
export const DisabledDestructive: Story = {
  args: {
    disabled: true,
    hierarchy: 'primary',
    destructive: true,
  },
};

/**
 * Disabled secondary button
 */
export const DisabledSecondary: Story = {
  args: {
    disabled: true,
    hierarchy: 'secondary-gray',
  },
};

/**
 * All primary variants showcased together
 */
export const AllPrimaryVariants: Story = {
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, auto)',
      gap: '24px',
      alignItems: 'center',
      padding: '20px',
    };

    const labelStyle = {
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      fontWeight: 600,
      color: '#414651',
      textAlign: 'center' as const,
      marginBottom: '8px',
    };

    const groupStyle = {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '8px',
    };

    return (
      <div style={containerStyle}>
        <div style={groupStyle}>
          <div style={labelStyle}>Default</div>
          <Button hierarchy="primary" size="md">
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Hover</div>
          <Button hierarchy="primary" size="md" className="hover-preview">
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Focused</div>
          <Button hierarchy="primary" size="md" className="focus-preview">
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Disabled</div>
          <Button hierarchy="primary" size="md" disabled>
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>With Icon</div>
          <Button hierarchy="primary" size="md" icon="trailing">
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Destructive</div>
          <Button hierarchy="primary" size="md" destructive>
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Large</div>
          <Button hierarchy="primary" size="lg">
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Large + Icon</div>
          <Button hierarchy="primary" size="lg" icon="trailing">
            Button CTA
          </Button>
        </div>
      </div>
    );
  },
};

/**
 * All secondary gray variants showcased together
 */
export const AllSecondaryVariants: Story = {
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, auto)',
      gap: '24px',
      alignItems: 'center',
      padding: '20px',
    };

    const labelStyle = {
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      fontWeight: 600,
      color: '#414651',
      textAlign: 'center' as const,
      marginBottom: '8px',
    };

    const groupStyle = {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '8px',
    };

    return (
      <div style={containerStyle}>
        <div style={groupStyle}>
          <div style={labelStyle}>Default</div>
          <Button hierarchy="secondary-gray" size="md">
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Hover</div>
          <Button hierarchy="secondary-gray" size="md" className="hover-preview">
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Focused</div>
          <Button hierarchy="secondary-gray" size="md" className="focus-preview">
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Disabled</div>
          <Button hierarchy="secondary-gray" size="md" disabled>
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>With Icon</div>
          <Button hierarchy="secondary-gray" size="md" icon="trailing">
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Destructive</div>
          <Button hierarchy="secondary-gray" size="md" destructive>
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Large</div>
          <Button hierarchy="secondary-gray" size="lg">
            Button CTA
          </Button>
        </div>

        <div style={groupStyle}>
          <div style={labelStyle}>Large + Icon</div>
          <Button hierarchy="secondary-gray" size="lg" icon="trailing">
            Button CTA
          </Button>
        </div>
      </div>
    );
  },
};

/**
 * Complete showcase of all 64 button variants from the design system
 */
export const AllVariants: Story = {
  render: () => {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '32px',
      padding: '20px',
      maxWidth: '1200px',
    };

    const sectionStyle = {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '16px',
    };

    const titleStyle = {
      fontFamily: 'Inter, sans-serif',
      fontSize: '18px',
      fontWeight: 600,
      color: '#0F172A',
      marginBottom: '8px',
    };

    const rowStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
    };

    return (
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Primary - Medium Size</h3>
          <div style={rowStyle}>
            <Button hierarchy="primary" size="md">
              Button CTA
            </Button>
            <Button hierarchy="primary" size="md" destructive>
              Button CTA
            </Button>
            <Button hierarchy="primary" size="md" icon="trailing">
              Button CTA
            </Button>
            <Button hierarchy="primary" size="md" destructive icon="trailing">
              Button CTA
            </Button>
          </div>
          <div style={rowStyle}>
            <Button hierarchy="primary" size="md" disabled>
              Button CTA
            </Button>
            <Button hierarchy="primary" size="md" destructive disabled>
              Button CTA
            </Button>
            <Button hierarchy="primary" size="md" icon="trailing" disabled>
              Button CTA
            </Button>
            <Button hierarchy="primary" size="md" destructive icon="trailing" disabled>
              Button CTA
            </Button>
          </div>
        </div>

        <div style={sectionStyle}>
          <h3 style={titleStyle}>Primary - Large Size</h3>
          <div style={rowStyle}>
            <Button hierarchy="primary" size="lg">
              Button CTA
            </Button>
            <Button hierarchy="primary" size="lg" destructive>
              Button CTA
            </Button>
            <Button hierarchy="primary" size="lg" icon="trailing">
              Button CTA
            </Button>
            <Button hierarchy="primary" size="lg" destructive icon="trailing">
              Button CTA
            </Button>
          </div>
          <div style={rowStyle}>
            <Button hierarchy="primary" size="lg" disabled>
              Button CTA
            </Button>
            <Button hierarchy="primary" size="lg" destructive disabled>
              Button CTA
            </Button>
            <Button hierarchy="primary" size="lg" icon="trailing" disabled>
              Button CTA
            </Button>
            <Button hierarchy="primary" size="lg" destructive icon="trailing" disabled>
              Button CTA
            </Button>
          </div>
        </div>

        <div style={sectionStyle}>
          <h3 style={titleStyle}>Secondary Gray - Medium Size</h3>
          <div style={rowStyle}>
            <Button hierarchy="secondary-gray" size="md">
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="md" destructive>
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="md" icon="trailing">
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="md" destructive icon="trailing">
              Button CTA
            </Button>
          </div>
          <div style={rowStyle}>
            <Button hierarchy="secondary-gray" size="md" disabled>
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="md" destructive disabled>
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="md" icon="trailing" disabled>
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="md" destructive icon="trailing" disabled>
              Button CTA
            </Button>
          </div>
        </div>

        <div style={sectionStyle}>
          <h3 style={titleStyle}>Secondary Gray - Large Size</h3>
          <div style={rowStyle}>
            <Button hierarchy="secondary-gray" size="lg">
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="lg" destructive>
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="lg" icon="trailing">
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="lg" destructive icon="trailing">
              Button CTA
            </Button>
          </div>
          <div style={rowStyle}>
            <Button hierarchy="secondary-gray" size="lg" disabled>
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="lg" destructive disabled>
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="lg" icon="trailing" disabled>
              Button CTA
            </Button>
            <Button hierarchy="secondary-gray" size="lg" destructive icon="trailing" disabled>
              Button CTA
            </Button>
          </div>
        </div>
      </div>
    );
  },
};
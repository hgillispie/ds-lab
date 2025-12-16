# Button Component

A production-ready, fully accessible button component for the Nexus Design System, built following the Figma design specifications.

## Overview

The Button component supports 64 different variants through a combination of sizes, hierarchies, states, and options. It follows all modern accessibility best practices and includes proper keyboard navigation and focus management.

## Features

- ✅ **Two Sizes**: Medium (md) and Large (lg)
- ✅ **Two Hierarchies**: Primary and Secondary Gray
- ✅ **Destructive Variant**: Uses cyan color scheme for dangerous actions
- ✅ **Icon Support**: Optional trailing icon
- ✅ **Interactive States**: Default, Hover, Focused, and Disabled
- ✅ **Fully Accessible**: ARIA labels, keyboard navigation, focus rings
- ✅ **TypeScript Support**: Full type definitions included
- ✅ **Responsive**: Works perfectly on all screen sizes

## Usage

```tsx
import { Button } from './stories/Button';

// Basic usage
<Button>Click me</Button>

// Primary button (default)
<Button hierarchy="primary" size="md">
  Submit
</Button>

// Secondary button
<Button hierarchy="secondary-gray">
  Cancel
</Button>

// Destructive action (uses cyan color)
<Button destructive>
  Delete
</Button>

// With trailing icon
<Button icon="trailing">
  Next Step
</Button>

// Large size
<Button size="lg">
  Get Started
</Button>

// Disabled state
<Button disabled>
  Disabled Button
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'md' \| 'lg'` | `'md'` | The size of the button |
| `hierarchy` | `'primary' \| 'secondary-gray'` | `'primary'` | The visual hierarchy |
| `destructive` | `boolean` | `false` | Uses cyan color scheme for destructive actions |
| `icon` | `'none' \| 'trailing'` | `'none'` | Whether to show a trailing icon |
| `disabled` | `boolean` | `false` | Disables the button |
| `children` | `ReactNode` | - | Button label text (required) |
| `onClick` | `() => void` | - | Click handler function |
| `data-testid` | `string` | - | Test ID for testing libraries |

## Variants

### Size Variants

#### Medium (md)
- Padding: 10px 16px
- Font size: 14px
- Line height: 20px

#### Large (lg)
- Padding: 10px 18px
- Font size: 16px
- Line height: 24px

### Hierarchy Variants

#### Primary
- **Default**: Dark navy background (#0F172A) with white text
- **Destructive**: Cyan background (#06B6D4) with white text
- **Hover**: Darker navy (#0C1427) or darker cyan (#0891B2)
- **Focused**: Adds a 4px focus ring (gray for default, cyan for destructive)
- **Disabled**: Light gray (#CBD5E1) or light cyan (#A5F3FC)

#### Secondary Gray
- **Default**: White background with gray border (#D5D7DA) and dark text (#414651)
- **Destructive**: White background with cyan border (#67E8F9) and cyan text (#0891B2)
- **Hover**: Light gray background (#FAFAFA) or light cyan background (#ECFEFF)
- **Focused**: Adds a 4px gray or cyan focus ring
- **Disabled**: White background with very light borders and faded text

### Icon Variants

Buttons can include a trailing circular icon on the right side. The icon inherits the color from the button's text color and adjusts automatically based on the button's state.

## Design Tokens

The Button component uses colors directly from the Figma design:

```css
--Brand-600: #0F172A
--Brand-700: #0C1427
--Brand-200: #CBD5E1
--Error-600: #06B6D4  /* Cyan - used for "destructive" variant */
--Error-700: #0891B2
--Error-300: #67E8F9
--Error-200: #A5F3FC
--Error-50: #ECFEFF
--Gray-300: #D5D7DA
--Gray-700: #414651
--Gray-800: #252B37
--Gray-200: #E9EAEB
--Gray-50: #FAFAFA
--White: #FFF
```

## Accessibility

The Button component follows WCAG 2.1 AA standards:

- ✅ Proper semantic HTML (`<button>` element)
- ✅ Keyboard navigable (Tab, Enter, Space)
- ✅ Clear focus indicators with 4px focus rings
- ✅ `aria-disabled` attribute for screen readers
- ✅ Icon decorations marked with `aria-hidden`
- ✅ High contrast ratios for all text
- ✅ Disabled state prevents interaction

## Examples

### Common Patterns

```tsx
// Primary CTA button
<Button hierarchy="primary" size="lg">
  Get Started
</Button>

// Secondary action
<Button hierarchy="secondary-gray" size="md">
  Learn More
</Button>

// Dangerous action with confirmation
<Button destructive onClick={handleDelete}>
  Delete Account
</Button>

// Navigation with icon
<Button icon="trailing" onClick={handleNext}>
  Continue
</Button>

// Form submission
<Button 
  hierarchy="primary" 
  disabled={!isFormValid}
  onClick={handleSubmit}
>
  Submit Form
</Button>
```

### Interactive States

The button automatically handles:
- **Hover**: Changes background color on mouse over
- **Focus**: Shows focus ring when navigated via keyboard
- **Active**: Slight downward translation (1px) on click
- **Disabled**: Prevents all interactions and changes visual appearance

## TypeScript

Full TypeScript support is included with exported types:

```tsx
import { Button, ButtonProps } from './stories/Button';

const props: ButtonProps = {
  size: 'lg',
  hierarchy: 'primary',
  destructive: false,
  icon: 'trailing',
  disabled: false,
  children: 'Click me',
};

<Button {...props} />
```

## Storybook Stories

View all 64 variants in Storybook:

1. **Default** - Basic button configuration
2. **Primary** - Main call-to-action style
3. **PrimaryDestructive** - Destructive action with primary hierarchy
4. **SecondaryGray** - Secondary action style
5. **SecondaryGrayDestructive** - Destructive action with secondary hierarchy
6. **WithIcon** - Button with trailing icon
7. **Disabled** - Disabled state examples
8. **AllPrimaryVariants** - Grid view of all primary variants
9. **AllSecondaryVariants** - Grid view of all secondary variants
10. **AllVariants** - Complete showcase of all 64 button variants

## Browser Support

The Button component works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Android 90+

## Notes

- The "destructive" prop uses cyan colors (named "Error" in Figma) to indicate dangerous or irreversible actions
- All transitions use the design system's easing function: `cubic-bezier(0.4, 0, 0.2, 1)`
- The component uses Inter font family as specified in the design system
- Shadow is consistent: `0 1px 2px 0 rgba(10, 13, 18, 0.05)`
- Border radius is fixed at 8px for all variants

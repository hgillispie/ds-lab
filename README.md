# Taskbox Design System

A comprehensive React design system built with TypeScript, Storybook, and design tokens. This system provides a complete set of components, patterns, and guidelines for building modern web applications. The design system is actively maintained and optimized for both developer experience and end-user accessibility.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Yarn (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/hgillispie/ds-lab.git
cd ds-lab

# Install dependencies
yarn install
# or
npm install
```

### Development Commands

```bash
# Start Storybook for component development and documentation
yarn storybook
# or
npm run storybook

# Build Storybook for production
yarn build-storybook
# or
npm run build-storybook

# Start the main React app (if needed)
yarn dev
# or
npm run dev

# Build the main app
yarn build
# or
npm run build

# Preview the built app
yarn preview
# or
npm run preview
```

### Builder.io Fusion Integration

This project is configured to work with Builder.io Fusion for AI-powered development:

```bash
# Start Builder.io Fusion (requires proper configuration)
npx builder.io@latest fusion

# Launch Builder.io visual editor
npx builder.io@latest launch --serverUrl http://localhost:6006
```

**Note**: Make sure Storybook is running on port 6006 before launching Builder.io.

## 📚 Documentation

### Storybook (Interactive Documentation)
- **Local Development**: Run `yarn storybook` and visit `http://localhost:6006`
- **Component Library**: All components with live examples, props, and usage guidelines
- **Design Tokens**: Color palettes, typography scales, and spacing systems

### Design System Documentation
- **[Design Tokens](DESIGN-TOKENS.md)** - Color, typography, and spacing guidelines
- **[Font Standards](FONT_STANDARDS.md)** - Typography and font usage
- **[Layout Components](LAYOUT_COMPONENTS.md)** - Layout patterns and components
- **[Agent Guidelines](AGENTS.md)** - AI agent development guidelines

## 📖 Component Documentation

### 🎨 Core Design System Components

#### [`Button`](src/stories/Button.stories.ts)
**Purpose**: Primary user actions and interactions
**When to use**: For any clickable action like submit, save, delete, navigate

```tsx
// Primary action
<Button variant="primary" size="lg">Create Project</Button>

// Secondary action
<Button variant="secondary" size="md">Cancel</Button>

// Destructive action
<Button variant="destructive" size="md">Delete Account</Button>
```

#### [`Header`](src/stories/Header.stories.ts)
**Purpose**: Page headers with navigation and actions
**When to use**: As the main header for application pages

```tsx
<Header
  user={{
    name: "John Doe",
    loggedIn: true,
    onLogin: () => {},
    onLogout: () => {}
  }}
/>
```

#### [`Page`](src/stories/Page.stories.ts)
**Purpose**: Page layout and structure
**When to use**: As the foundation for all application pages

```tsx
<Page
  title="Dashboard"
  subtitle="Welcome to your application"
>
  {/* Page content */}
</Page>
```

## 🎨 Design Tokens

All design tokens are defined in [`design-tokens.tokens.midnight.json`](design-tokens.tokens.midnight.json) and include:

### Colors
```json
{
  "colorprimary": "#0a0e1b",
  "colorprimarytext": "#0a0e1b", 
  "colorsuccess": "#059669",
  "colorwarning": "#e8b4a2",
  "colorerror": "#fa5252",
  "colorinfo": "#00d9ff",
  "colortext": "#171717",
  "colortextsecondary": "#525252",
  "colorbgcontainer": "#ffffff",
  "colorbgbase": "#fafafa"
}
```

### Typography Scale
Built on **Open Sans font family** with semantic scaling:

- **Display**: `display-2xl` (36px) to `display-xs` (24px)
- **Text**: `text-xl` (20px) to `text-xs` (12px)
- Proper line heights and letter spacing included

### Spacing & Layout
- Consistent 8px grid system
- Responsive breakpoints: `sm: 768px`, `md: 1024px`, `lg: 1280px`, `xl: 1440px`

## 🛠 Development Setup

### File Structure

```
src/
├── stories/           # Component implementations and stories
│   ├── *.tsx         # Component source files
│   ├── *.css         # Component styles
│   ├── *.stories.ts  # Storybook stories
│   └── assets/       # Images and icons
├── components/        # Additional components
├── assets/           # Fonts and other assets
├── index.css         # Global styles
└── main.tsx          # App entry point

.storybook/           # Storybook configuration
├── main.ts          # Storybook main config
├── preview.ts       # Storybook preview config
├── theme.ts         # Custom Storybook theme
└── manager.ts       # Storybook manager config

design-tokens.tokens.midnight.json  # Design tokens
builder.config.json                 # Builder.io configuration
```

### Development Workflow

1. **Start Storybook**: `yarn storybook`
2. **Create/Edit Components**: Add components in `src/stories/`
3. **Add Stories**: Create Storybook stories for each component
4. **Test Components**: Use Storybook's interactive features
5. **Build**: `yarn build-storybook` for production

## 🔧 Builder.io Fusion Configuration

This project includes Builder.io Fusion configuration for AI-powered development:

- **`builder.config.json`**: Main configuration file
- **`.builderrules`**: AI agent development rules
- **`.builderignore`**: Files to ignore during AI processing

### Fusion Setup

1. Ensure you're logged into Builder.io: `npx builder.io@latest login`
2. Start Storybook: `yarn storybook`
3. Run Fusion: `npx builder.io@latest fusion`

## 📖 External References

### Design Inspiration
- **[Untitled UI](https://untitledui.com/)** - Original Figma design system
- **[Open Sans Font](https://fonts.google.com/specimen/Open+Sans)** - Typography foundation

### Technical Documentation
- **[Storybook](https://storybook.js.org/)** - Component documentation
- **[React](https://react.dev/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool

### Accessibility
- **[WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)** - All components follow AA standards
- **[ARIA Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)** - Proper semantic markup

## 🎯 Best Practices

### Component Development
1. **Use TypeScript** for all components
2. **Create Storybook stories** for all variants
3. **Follow design tokens** for colors, typography, and spacing
4. **Test accessibility** with keyboard navigation and screen readers
5. **Ensure responsive design** works on all screen sizes

### Builder Fusion Optimization
1. **Use consistent naming** for components and props
2. **Include comprehensive documentation** in stories
3. **Follow the established patterns** in existing components
4. **Test with real data** to ensure components scale properly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Add your component with tests and stories
4. Submit a pull request

### Component Checklist
- [ ] TypeScript interfaces exported
- [ ] Comprehensive Storybook stories
- [ ] Accessibility testing completed
- [ ] Responsive design verified
- [ ] Design tokens used consistently

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🆘 Support

- **Documentation**: Run `yarn storybook` for local docs
- **Issues**: [GitHub Issues](https://github.com/hgillispie/ds-lab/issues)
- **Builder.io**: [Builder.io Documentation](https://www.builder.io/c/docs)

---

**Built with ❤️ for Builder Fusion AI-powered development**

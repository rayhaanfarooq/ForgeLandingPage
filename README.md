# Forge Website

A beautiful, stunning, and responsive landing page for Forge - Opinionated Git workflows with AI-generated tests.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **MagicUI** - Beautiful UI components
- **Lucide React** - Icons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- ✨ Beautiful animated hero section with gradient text
- 🎨 MagicUI components for stunning visual effects
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Smooth animations and transitions
- 🎯 Clear call-to-actions
- 📊 Feature showcase with interactive cards
- 🔄 Before/After comparison section

## Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx      # Main landing page component
│   └── ui/                   # UI components (MagicUI)
│       ├── animated-gradient-text.tsx
│       ├── border-beam.tsx
│       ├── grid-pattern.tsx
│       ├── magic-card.tsx
│       └── meteors.tsx
├── lib/
│   └── utils.ts              # Utility functions
├── App.tsx                   # Root component
├── main.tsx                  # Entry point
└── index.css                 # Global styles
```

## Customization

The landing page is fully customizable. You can:

- Modify colors in `tailwind.config.js`
- Update content in `src/components/LandingPage.tsx`
- Add new sections or components
- Customize animations and effects

## License

MIT



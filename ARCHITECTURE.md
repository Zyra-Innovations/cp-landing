# Architecture & Folder Structure

## 🏗️ Project Architecture

```
╔════════════════════════════════════════════════════════════╗
║                    Landing Page Stack                       ║
╚════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────┐
│                    Frontend Layer                           │
├─────────────────────────────────────────────────────────────┤
│  React 18 (UI Library)                                      │
│  ├─ Functional Components                                   │
│  ├─ React Hooks (useState, useEffect)                       │
│  └─ Context API (optional for state)                        │
└─────────────────────────────────────────────────────────────┘
                           │
┌─────────────────────────────────────────────────────────────┐
│              Styling & UI Layer                             │
├─────────────────────────────────────────────────────────────┤
│  Tailwind CSS 3 (Utility-first CSS)                        │
│  ├─ Responsive design (Mobile-first)                        │
│  ├─ Custom animations & keyframes                           │
│  ├─ Custom components & utilities                           │
│  └─ Dark mode support                                       │
│                                                              │
│  Framer Motion (Animation Library)                          │
│  ├─ Component animations                                    │
│  ├─ Scroll-triggered animations                             │
│  ├─ Gesture animations                                      │
│  └─ Staggered animations                                    │
└─────────────────────────────────────────────────────────────┘
                           │
┌─────────────────────────────────────────────────────────────┐
│            Component Library                                │
├─────────────────────────────────────────────────────────────┤
│  Lucide React (Icons - 1000+ icons)                         │
│  React Router DOM (Multi-page navigation)                   │
└─────────────────────────────────────────────────────────────┘
                           │
┌─────────────────────────────────────────────────────────────┐
│           Build & Development                               │
├─────────────────────────────────────────────────────────────┤
│  Vite 5.0 (Build tool)                                      │
│  ├─ HMR (Hot Module Replacement)                            │
│  ├─ Code splitting                                          │
│  ├─ Minification                                            │
│  └─ Optimized production build                              │
│                                                              │
│  PostCSS + Autoprefixer (CSS Processing)                    │
│  ESLint (Code Linting)                                      │
└─────────────────────────────────────────────────────────────┘
```

## 📂 Complete Folder Structure

```
e:\event\COMPANY/
│
├── public/                       # Static assets (unchanged by build)
│   └── vite.svg                 # Vite logo (example, add your assets here)
│
├── src/                         # Source code
│   │
│   ├── components/              # Reusable UI components
│   │   ├── Button.jsx          # Primary button component
│   │   ├── Card.jsx            # Card wrapper component
│   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   └── SectionWrapper.jsx   # Section layout wrapper
│   │
│   ├── sections/                # Page sections (full-width sections)
│   │   ├── Hero.jsx            # Hero/landing section
│   │   ├── Features.jsx        # Features showcase
│   │   ├── About.jsx           # Company about section
│   │   ├── Services.jsx        # Services offered
│   │   ├── Testimonials.jsx    # Customer testimonials/reviews
│   │   ├── CTA.jsx             # Call-to-action section
│   │   └── Footer.jsx          # Footer with links & contact
│   │
│   ├── App.jsx                 # Root component (imports sections)
│   ├── index.css               # Global styles & Tailwind imports
│   └── main.jsx                # Entry point (React root)
│
├── node_modules/               # Dependencies (auto-generated)
│
├── dist/                       # Production build output (auto-generated)
│
├── index.html                  # HTML template (Vite entry)
├── package.json               # Dependencies & scripts
├── package-lock.json          # Locked dependency versions
│
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS plugins config
├── .eslintrc.json             # ESLint rules
│
├── .gitignore                 # Git ignore patterns
├── README.md                  # Full documentation
├── QUICK_START.md             # Quick start guide (this file)
├── COMPONENTS_GUIDE.md        # Detailed component reference
└── ARCHITECTURE.md            # This file - Architecture overview
```

## 🔄 Component Hierarchy

```
App.jsx (Root)
│
├─ Navbar
│  ├─ Button
│  └─ Menu items (navigation links)
│
├─ Hero
│  ├─ Button (Primary & Secondary)
│  └─ Animated background elements
│
├─ Features
│  └─ Card[] (6 feature cards)
│     └─ Icon + Title + Description
│
├─ About
│  └─ Button
│     
├─ Services
│  └─ Card[] (6 service cards)
│
├─ Testimonials
│  ├─ Card[] (testimonials)
│  ├─ Navigation buttons
│  └─ Statistics section
│
├─ CTA
│  ├─ Form (email input)
│  └─ Button
│
└─ Footer
   ├─ Links (4 sections)
   └─ Social links
```

## 🎯 Data Flow

```
┌──────────────────┐
│   App.jsx        │
│  (State & Scroll)│
└────────┬─────────┘
         │ scrollPosition prop
         ▼
┌──────────────────┐          ┌──────────────────┐
│     Navbar       │          │  Sections[]      │
│  (Header Menu)   │          │  (Page Content)  │
└──────────────────┘          └────────┬─────────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
                    ▼                  ▼                  ▼
           ┌──────────────┐    ┌──────────────┐   ┌──────────────┐
           │  Components  │    │   Cards[]    │   │   Icons      │
           │   (Button,   │    │   (Reusable) │   │  (lucide-    │
           │    Card)     │    │              │   │   react)     │
           └──────────────┘    └──────────────┘   └──────────────┘
```

## 🎨 Styling Architecture

```
index.css
├─ Tailwind Imports
│  ├─ @tailwind base     (Reset + Elements)
│  ├─ @tailwind components (Class utilities)
│  └─ @tailwind utilities (Responsive utilities)
│
├─ Custom Scrollbar
├─ Smooth Scroll Behavior
│
├─ @layer base
│  ├─ body { ... }
│  ├─ h1-h6 { ... }
│  └─ button { ... }
│
├─ @layer components
│  ├─ .btn-primary
│  ├─ .btn-secondary
│  ├─ .section-padding
│  ├─ .container-max
│  ├─ .text-gradient
│  ├─ .card-hover
│  └─ .glass-effect
│
└─ @layer utilities
   └─ (Tailwind utilities)
```

## 📦 Dependency Tree

```
company-landing-page
│
├── react@18.2.0
│  └─ react-dom@18.2.0      # DOM rendering
│
├── tailwindcss@3.3.6       # CSS utility framework
│  └─ postcss@8.4.31        # CSS processing
│     └─ autoprefixer@10.4.16 (Auto browser prefixes)
│
├── vite@5.0.8              # Build tool
│  └─ @vitejs/plugin-react  # React + JSX support
│
├── framer-motion@10.16.4   # Animation library
│
├── lucide-react@0.292.0    # Icon library
│
├── react-router-dom@6.20.0 # Multi-page navigation
│
└── Development Dependencies
   ├─ @types/react          # TypeScript types
   ├─ @types/react-dom      # TypeScript types
   ├─ eslint                # Code linting
   └─ eslint-plugin-react   # React linting rules
```

## 🌐 File Purpose Overview

| File | Purpose |
|------|---------|
| `index.html` | HTML entry point - Vite processes this |
| `src/main.jsx` | React app initialization |
| `src/App.jsx` | Root component - orchestrates layout |
| `src/index.css` | Global styles + Tailwind imports |
| `vite.config.js` | Vite build configuration |
| `tailwind.config.js` | Tailwind customization |
| `postcss.config.js` | PostCSS plugins (Tailwind, Autoprefixer) |
| `package.json` | Dependencies & npm scripts |

## 🚀 Build & Runtime Flow

```
Development:
  package.json
  └─ npm run dev
     └─ vite
        ├─ Serves index.html
        ├─ Compiles JSX via @vitejs/plugin-react
        ├─ Processes CSS via Tailwind & PostCSS
        ├─ HMR (Hot reload on save)
        └─ http://localhost:5173

Production:
  package.json
  └─ npm run build
     └─ vite build
        ├─ Compile React → JavaScript
        ├─ Process CSS (Tailwind, Autoprefixer, Minify)
        ├─ Bundle & split code
        ├─ Minify JavaScript
        ├─ Optimize assets
        └─ Output to /dist folder
```

## 📱 Responsive Design System

```
Breakpoints (Tailwind CSS):
┌─────────────────────────────────────────┐
│ Mobile    │ Tablet   │ Desktop          │
│ <640px    │ 768px+   │ 1024px+          │
│ (default) │ (md:)    │ (lg:)            │
└─────────────────────────────────────────┘

Example usage:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
         ├─ 1 column on mobile
         ├─ 2 columns on tablet
         └─ 3 columns on desktop
```

## 🎬 Animation System

```
Framer Motion Animations:

1. Page Load Animations
   └─ Navbar slides down
   └─ Hero text stagger
   
2. Scroll Triggered
   └─ whileInView={{ animate when visible }}
   
3. Hover Effects
   └─ whileHover={{ scale, y, etc }}
   
4. Tap/Click Effects
   └─ whileTap={{ scale }}
   
5. Staggered Animations
   └─ staggerChildren for lists
```

## 🔐 Security & Performance

```
Security:
├─ No hardcoded secrets (use .env)
├─ CSP headers ready
├─ XSS prevention via React
└─ Framework security updates

Performance:
├─ Code splitting by Vite
├─ CSS purging by Tailwind
├─ Image optimization (next step)
├─ Lazy loading on scroll
├─ Minified production build
└─ Optimized animation performance
```

## 📊 Component Reusability

```
High Reusability (Core Libraries):
├─ Button      → Used in: Navbar, Hero, CTA, Sections
├─ Card        → Used in: Features, Services, Testimonials
├─ SectionWrapper → Used in: All sections
└─ Icons       → Used in: All sections

Medium Reusability (Modular):
├─ Form inputs → Subscription form in CTA
├─ Testimonial item → Carousel in Testimonials
└─ Link items → Navigation, Footers

Unique (Section Specific):
├─ Hero banner
├─ Analytics cards
└─ Footer structure
```

## 🔧 Extension Points

```
Ready to Extend:
├─ Add new sections → Create /src/sections/NewSection.jsx
├─ Add new components → Create /src/components/New.jsx
├─ Add new colors → Extend tailwind.config.js
├─ Add form handling → Integrate service (Formspree, etc)
├─ Add multi-page → Setup React Router in App.jsx
├─ Add dark mode → Add dark: classes to components
├─ Add database → Add API calls via fetch/axios
└─ Add state management → Add Redux/Zustand if needed
```

## 🎯 Best Practices Implemented

✅ Functional components with hooks  
✅ Component composition & reusability  
✅ Semantic HTML  
✅ Mobile-first responsive design  
✅ Accessibility (ARIA, keyboard navigation)  
✅ Performance optimizations  
✅ Clean code structure  
✅ JSDoc comments  
✅ Error boundaries ready  
✅ Environment variables ready  

---

**This architecture is scalable, maintainable, and production-ready! 🚀**

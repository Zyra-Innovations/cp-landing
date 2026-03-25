# Components Guide

This document provides a detailed overview of all reusable components and sections.

## 🧩 Reusable Components

### Button Component
**File**: `src/components/Button.jsx`

A versatile button component with multiple variants and sizes.

**Props**:
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'` (default: 'primary')
- `size`: `'sm' | 'md' | 'lg'` (default: 'md')
- `children`: React node (button text)
- `onClick`: Function to call on click
- `disabled`: Boolean (default: false)
- `href`: String (optional - renders as link instead)
- `className`: Additional Tailwind classes

**Usage**:
```jsx
import Button from '@/components/Button'

<Button variant="primary" size="lg">
  Get Started
</Button>

<Button variant="outline" href="#contact">
  Learn More
</Button>
```

**Variants**:
- **primary**: Blue background, hover shadow effect
- **secondary**: Purple background
- **outline**: Border only, fills on hover
- **ghost**: Text only, minimal styling

---

### Card Component
**File**: `src/components/Card.jsx`

A reusable card container with optional image and animations.

**Props**:
- `children`: React node (card content)
- `className`: Additional Tailwind classes
- `hover`: Boolean (default: true - enables hover animation)
- `image`: String (optional image URL)

**Usage**:
```jsx
import Card from '@/components/Card'

<Card>
  <h3>Feature Title</h3>
  <p>Feature description</p>
</Card>

<Card image="/feature.png" className="p-0">
  {/* Custom content */}
</Card>
```

**Features**:
- Automatic fade-in animation on viewport entry
- Hover scale and shadow effects
- Image support with overlay
- Responsive padding

---

### SectionWrapper Component
**File**: `src/components/SectionWrapper.jsx`

Provides consistent layout and spacing for page sections.

**Props**:
- `children`: React node (section content)
- `id`: String (for navigation, e.g., "features")
- `title`: String (optional section heading)
- `subtitle`: String (optional section subheading)
- `bgColor`: String (Tailwind class, default: 'bg-white')
- `className`: Additional Tailwind classes

**Usage**:
```jsx
import SectionWrapper from '@/components/SectionWrapper'

<SectionWrapper
  id="features"
  title="Our Features"
  subtitle="Everything you need"
  bgColor="bg-gray-50"
>
  {/* Grid or content */}
</SectionWrapper>
```

**Features**:
- Consistent padding (section-padding)
- Max-width container
- Animated title and subtitle
- Multiple background colors

---

### Navbar Component
**File**: `src/components/Navbar.jsx`

Sticky navigation bar with mobile menu and animations.

**Props**:
- `scrollPosition`: Number (current scroll Y position)

**Features**:
- Sticky positioning
- Logo with gradient text
- Desktop menu with smooth links
- Mobile hamburger menu
- CTA button
- Dynamic background on scroll
- Mobile menu animation

**Customization**:
Edit the `menuItems` array to change navigation:
```jsx
const menuItems = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  // Add more items...
]
```

---

## 📄 Section Components

### Hero Section
**File**: `src/sections/Hero.jsx`

Eye-catching hero section with animations.

**Features**:
- Animated background blobs
- Staggered text animations
- Badge element
- Dual CTA buttons (Primary + Secondary)
- Trust badges
- Product mockup placeholder
- Fully responsive

**Customization**:
- Change headline in the `<h1>` tag
- Update subheading in the `<p>` tag
- Modify buttons text and links
- Replace mockup with actual product image

---

### Features Section
**File**: `src/sections/Features.jsx`

Grid of 6 feature cards with icons.

**Features**:
- Icon-based design (lucide-react icons)
- Responsive 3-column grid
- Card hover animations
- Icon background gradients

**To Add/Modify Features**:
```jsx
const features = [
  {
    id: 1,
    icon: Sparkles,
    title: 'Feature Title',
    description: 'Feature description text...',
  },
  // Add more...
]
```

**Available Icons**:
- `Sparkles`, `Zap`, `Shield`, `Users`, `TrendingUp`, `Globe`
- See lucide-react docs for more: https://lucide.dev

---

### About Section
**File**: `src/sections/About.jsx`

Company information with image and benefits list.

**Features**:
- Two-column layout (responsive)
- Benefits list with checkmarks
- Company description
- Image placeholder on right
- CTA button

**Customization**:
- Update company story text
- Modify benefits list
- Replace image placeholder

---

### Services Section
**File**: `src/sections/Services.jsx`

6 service cards with icons and descriptions.

**Features**:
- Icon rotation on hover
- Service cards with descriptions
- "Learn more" links
- Staggered animation on scroll

**To Customize**:
Edit the `services` array:
```jsx
const services = [
  {
    id: 1,
    icon: Code2,
    title: 'Web Development',
    description: 'Description...',
  },
  // ...
]
```

---

### Testimonials Section
**File**: `src/sections/Testimonials.jsx`

Customer reviews with carousel on mobile.

**Features**:
- Desktop: 2-column grid
- Mobile: Carousel with navigation
- Star ratings
- Avatar emojis
- Statistics section
- Indicators/dots

**To Add Testimonials**:
```jsx
const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    role: 'CEO, Company',
    avatar: '👩‍💼',
    content: 'Amazing review text...',
    rating: 5,
  },
  // ...
]
```

---

### CTA Section
**File**: `src/sections/CTA.jsx`

Conversion-focused call-to-action section.

**Features**:
- Gradient background
- Email subscription form
- Form validation
- Success message
- Feature highlights
- Responsive layout

**Customization**:
- Change form copy
- Modify submit handler
- Update feature highlights

---

### Footer Section
**File**: `src/sections/Footer.jsx`

Comprehensive footer with links and contact info.

**Features**:
- 4-column link sections
- Contact information
- Social media links
- Copyright information
- Auto-updating year

**To Customize**:
Edit the `sections` object for footer links:
```jsx
const sections = {
  Product: ['Features', 'Pricing', ...],
  Company: ['About', 'Blog', ...],
  // ...
}
```

---

## 🎨 Custom Tailwind Utilities

All custom utilities are defined in `src/index.css`:

### Button Classes
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling

### Layout Classes
- `.section-padding` - Padding for sections
- `.container-max` - Max-width container

### Effects Classes
- `.text-gradient` - Gradient text effect
- `.card-hover` - Card hover animations
- `.glass-effect` - Glassmorphism effect

---

## 🔧 Common Customization Tasks

### Change Color Scheme
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#0084ff', // Change your primary color
    600: '#0073e6',
    // ...
  },
}
```

### Add New Section
1. Create `src/sections/NewSection.jsx`
2. Import in `App.jsx`
3. Add to JSX between other sections

### Update Fonts
In `tailwind.config.js`:
```js
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
}
```

### Add Images
1. Place images in `public/` folder
2. Reference with `/image-name.jpg`

```jsx
<img src="/logo.png" alt="Logo" />
```

### Add Form Integration
For contact forms, use services like:
- **Formspree**: `https://formspree.io`
- **EmailJS**: `https://www.emailjs.com`
- **Basin**: `https://usebasin.com`

Example with Formspree:
```jsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="email" name="email" required />
  <button type="submit">Subscribe</button>
</form>
```

---

## 🎬 Animation Libraries

### Framer Motion
- Used throughout for component animations
- Key animations: `whileHover`, `whileTap`, `whileInView`
- Staggered animations for lists

### Lucide React Icons
- Icon library used for all SVG icons
- Easy to swap icons
- 1000+ available icons

---

## 📱 Responsive Breakpoints

```
Mobile:  320px - 767px
Tablet:  768px - 1023px
Desktop: 1024px+
```

Tailwind prefix usage:
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

---

## ✅ Best Practices

1. **Component Naming**: PascalCase for components
2. **Props Destructuring**: Always destructure props
3. **Keys in Lists**: Always provide unique keys
4. **Comments**: Add JSDoc comments for complex logic
5. **Accessibility**: Use semantic HTML and ARIA labels
6. **Performance**: Lazy load sections with `whileInView`
7. **Consistency**: Keep spacing and sizing consistent

---

## 🚀 Performance Tips

1. **Image Optimization**: Use modern formats (WebP)
2. **Code Splitting**: Vite handles automatically
3. **Lazy Loading**: Sections animate on viewport entry
4. **CSS Purging**: Tailwind removes unused styles in production
5. **Minification**: Automatic in production build

---

## 📚 Useful Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **Lucide Icons**: https://lucide.dev
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev

---

## 🐛 Troubleshooting

**Animations not working?**
- Check Framer Motion is installed: `npm list framer-motion`
- Ensure `viewport={{ once: true }}` is set correctly

**Styles not applying?**
- Clear Tailwind cache: Delete `.next` folder if exists
- Rebuild: `npm run build`

**Icons not showing?**
- Verify correct import: `import { IconName } from 'lucide-react'`
- Check icon name spelling at lucide.dev

**Mobile menu not working?**
- Check state management in Navbar.jsx
- Verify onClick handlers are properly wired

---

**Happy Building! 🎉**

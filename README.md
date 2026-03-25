# Company Landing Page

A modern, high-converting landing page built with **React**, **Tailwind CSS**, and **Vite**.

## 🚀 Features

- **Modern Stack**: React 18 + Vite + Tailwind CSS 3
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Smooth Animations**: Framer Motion for engaging interactions
- **High Performance**: Fast load times with optimized assets
- **SEO Ready**: Semantic HTML and meta tags
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Dark Mode Ready**: Easy to extend with dark theme support
- **Component-Based**: Reusable components (Button, Card, SectionWrapper)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx       # CTA button component
│   ├── Card.jsx         # Card component with hover effects
│   ├── Navbar.jsx       # Navigation with mobile menu
│   └── SectionWrapper.jsx # Layout wrapper for sections
├── sections/            # Page sections
│   ├── Hero.jsx         # Hero section with CTA
│   ├── Features.jsx     # Feature cards
│   ├── About.jsx        # Company information
│   ├── Services.jsx     # Services offered
│   ├── Testimonials.jsx # Customer reviews
│   ├── CTA.jsx          # Call-to-action section
│   └── Footer.jsx       # Footer with links
├── App.jsx              # Main app component
├── index.css            # Global styles + Tailwind
└── main.jsx             # Entry point

public/                  # Static assets
tailwind.config.js       # Tailwind configuration
vite.config.js          # Vite configuration
postcss.config.js       # PostCSS configuration
package.json            # Dependencies

```

## 📋 Sections Included

### 1. **Navbar**
- Sticky top navigation
- Logo and menu items
- "Get Started" CTA button
- Mobile hamburger menu
- Smooth scroll effect on navigation

### 2. **Hero Section**
- Bold headline with gradient text
- Subheading and description
- Primary and secondary CTA buttons
- Animated background elements
- Trust badges

### 3. **Features Section**
- 6 feature cards with icons
- Icons from lucide-react
- Responsive grid layout
- Hover animations

### 4. **About Section**
- Company description
- Mission and vision
- Key benefits list
- Image placeholder
- Call-to-action button

### 5. **Services Section**
- 6 service cards
- Icon-based design
- Description and CTA links
- Responsive grid

### 6. **Testimonials Section**
- Customer reviews with avatars
- Star ratings
- Desktop grid + mobile carousel
- Navigation controls
- Statistics section

### 7. **CTA Section**
- Strong conversion-focused headline
- Email subscription form
- Feature highlights
- Gradient background

### 8. **Footer**
- Company information
- Navigation links (Product, Company, Resources, Legal)
- Contact details
- Social media links
- Copyright information

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 16+ and npm or yarn
- Modern browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone or download the project**
   ```bash
   cd "e:\event\COMPANY"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Update Company Information
Edit the content in:
- **Navbar**: `src/components/Navbar.jsx` - Update logo and menu items
- **Hero**: `src/sections/Hero.jsx` - Update headline and CTA text
- **About**: `src/sections/About.jsx` - Update company description
- **Footer**: `src/sections/Footer.jsx` - Update contact info and links

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#your-color', // Change primary color
    600: '#your-color',
    // ...
  },
  secondary: {
    500: '#your-color', // Change secondary color
    // ...
  },
}
```

### Add Your Logo
Replace the text logo in `Navbar.jsx`:
```jsx
<img src="/logo.png" alt="Logo" className="h-8" />
```

### Update Testimonials
Edit the `testimonials` array in `src/sections/Testimonials.jsx`:
```jsx
const testimonials = [
  {
    name: 'Client Name',
    role: 'Job Title, Company',
    avatar: '👤', // Use emoji or image
    content: 'Testimonial text...',
    rating: 5,
  },
  // ...
]
```

### Add More Features/Services
Simply add new objects to the `features` or `services` arrays in respective files.

## 🚀 Performance Optimizations

- **Code Splitting**: Vite automatically handles code splitting
- **Image Optimization**: Replace placeholder images with optimized assets
- **Minification**: Production build is minified automatically
- **CSS Purging**: Tailwind removes unused styles in production
- **Lazy Loading**: Components load on demand

## 📱 Responsive Design

The layout is fully responsive:
- **Mobile**: 320px and up
- **Tablet**: 768px (md breakpoint)
- **Desktop**: 1024px (lg breakpoint)

Tailwind breakpoints used:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Proper heading hierarchy
- Color contrast ratios meet WCAG AA standards
- Keyboard navigation support
- Focus management

## 🎬 Animations

Uses **Framer Motion** for:
- Fade-in and slide animations
- Hover effects on cards and buttons
- Scroll animations (appeared on viewport)
- Carousel transitions
- Staggered animations

## 📦 Dependencies

- **React 18**: UI library
- **Vite**: Build tool
- **Tailwind CSS 3**: Utility-first CSS
- **Framer Motion 10**: Animation library
- **lucide-react**: Icon library
- **React Router DOM**: For multi-page navigation (optional)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 SEO Best Practices

- Semantic HTML
- Meta tags in `index.html`
- Proper heading structure
- Image alt text
- Fast loading times
- Mobile-friendly design

## 🔧 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 📝 Adding Pages

To add multi-page routing:

1. Create new section/page component
2. Import React Router
3. Setup routing in App.jsx:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### GitHub Pages
Update `vite.config.js`:
```js
export default {
  base: '/repo-name/',
  // ...
}
```

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips

1. **Replace Icons**: Swap lucide-react icons with any other icon library
2. **Add Dark Mode**: Use Tailwind's dark mode utilities
3. **Contact Form**: Integrate with services like Formspree or EmailJS
4. **Analytics**: Add Google Analytics or Plausible
5. **Newsletter**: Use Mailchimp or ConvertKit integration

## 🤝 Contributing

Feel free to fork, modify, and use this for your projects!

## 📧 Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ for modern web development**

# Company Landing Page

A modern, high-converting landing page built with **React**, **Tailwind CSS**, and **Vite**.

The project now includes multi-page routing, a contact form with SMTP delivery, smoother animations, and updated navigation/CTA behavior.

## 🚀 Features

- **Modern Stack**: React 18 + Vite + Tailwind CSS 3
- **Multi-Page Routing**: Home, About, Blog, Contact, and Careers pages with React Router
- **Updated Navigation**: Active link highlighting, home logo link, and route-based CTA buttons
- **Contact Form SMTP Delivery**: Backend email submission through Express and Nodemailer
- **Smoother Animations**: Performance-tuned Framer Motion interactions and scroll handling
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **High Performance**: GPU-friendly animation updates and optimized rendering behavior
- **Accessibility**: Keyboard-friendly navigation and semantic markup
- **Component-Based**: Reusable components and shared animation utilities

## ✨ What Was Added

- New pages for `Home`, `About`, `Blog`, `Contact`, and `Careers`
- React Router setup for full page navigation
- Navbar logo now returns to the home page
- CTA buttons now route to the contact page
- Footer updated with route links and cleaned-up contact details
- SMTP-powered contact form with loading, success, and error states
- Express backend for sending email through an SMTP provider
- Development proxy so the frontend can talk to the backend during local development
- Animation and scroll performance improvements for smoother interactions
- `.env.example` file for SMTP configuration

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx       # CTA button component
│   ├── Card.jsx         # Card component with hover effects
│   ├── Navbar.jsx       # Navigation with mobile menu
│   └── SectionWrapper.jsx # Layout wrapper for sections
├── pages/               # Routed pages
│   ├── Home.jsx         # Landing page composition
│   ├── AboutPage.jsx    # About page wrapper
│   ├── BlogPage.jsx     # Blog placeholder page
│   ├── ContactPage.jsx  # SMTP contact form page
│   └── CareersPage.jsx  # Careers page
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
├── utils/               # Shared helpers
│   └── animations.js    # Framer Motion presets
└── main.jsx             # Entry point

public/                  # Static assets
server.js                # Express SMTP API
.env.example             # SMTP environment template
tailwind.config.js       # Tailwind configuration
vite.config.js          # Vite configuration
postcss.config.js       # PostCSS configuration
package.json            # Dependencies

```

## 📋 Sections Included

### 1. **Navbar**
- Sticky top navigation
- Logo links back to the home page
- Active route highlighting
- "Get Started" CTA button routes to Contact
- Mobile hamburger menu
- Smooth scroll behavior

### 2. **Hero Section**
- Bold headline with gradient text
- Subheading and description
- Primary CTA routes to the contact page
- Secondary CTA button for demo viewing
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
- Routed CTA behavior

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
- Conversion-focused call to action
- Feature highlights
- Gradient background

### 8. **Footer**
- Company information
- Route links for About, Blog, Contact, and Careers
- Navigation links (Product, Company, Resources, Legal)
- Contact details
- Social media links
- Copyright information

### 9. **Contact Page**
- Contact form with name, email, and message fields
- Loading, success, and error states
- SMTP-backed email delivery

### 10. **Careers Page**
- Sample job listings
- Company and contact links

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

  The dev script runs both the Vite frontend and the SMTP API backend.

4. **Build for production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

### SMTP Contact Form Setup

1. Copy `.env.example` to `.env`
2. Fill in your SMTP provider values
3. Restart the dev server after saving the file

Required variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `MAIL_TO`
- `PORT` (defaults to `3001`)

Use your own SMTP credentials and app password. The `.env.example` file shows the required shape of the configuration.

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
- Scroll animations triggered on viewport entry
- Carousel transitions
- Staggered animations
- Smoother scroll handling and GPU-friendly motion updates

## 📦 Dependencies

- **React 18**: UI library
- **Vite**: Build tool
- **Tailwind CSS 3**: Utility-first CSS
- **Framer Motion 10**: Animation library
- **lucide-react**: Icon library
- **React Router DOM**: Multi-page navigation
- **Express**: SMTP API server
- **Nodemailer**: SMTP email delivery
- **dotenv**: Environment variable loading
- **cors**: Cross-origin request handling
- **concurrently**: Runs frontend and backend together

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
npm run dev       # Start frontend and SMTP backend together
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 📝 Adding Pages

The app already includes these routes:

- `/` Home
- `/about` About
- `/blog` Blog
- `/contact` Contact
- `/careers` Careers

If you want to add another page, create a component in `src/pages/`, add a route in `src/App.jsx`, and include it in the navigation if needed.

## 🔗 Route Behavior

- Navbar logo returns to the home page
- Active nav items are highlighted automatically
- Hero and header CTAs route to the contact page
- Footer company links navigate to the routed pages

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

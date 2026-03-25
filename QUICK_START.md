# Quick Start Guide

## ⚡ 5-Minute Setup

### 1. Project is Already Running!
The development server is running at:
👉 **http://localhost:5173/**

Your landing page is live and ready to view.

### 2. File Structure Overview
```
e:\event\COMPANY/
├── src/                          # Source code
│   ├── components/               # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Navbar.jsx
│   │   └── SectionWrapper.jsx
│   ├── sections/                 # Page sections
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx                   # Main component
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── public/                       # Static files
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── vite.config.js               # Vite config
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
├── README.md                    # Full documentation
└── COMPONENTS_GUIDE.md          # Component reference
```

---

## 🎯 Quick Customization (Next Steps)

### Change Your Company Name
1. Open `src/components/Navbar.jsx` (Line 24)
   ```jsx
   <motion.a href="#" className="text-2xl font-bold text-gradient cursor-pointer">
     Company  // ← Change this
   </motion.a>
   ```

2. Open `src/sections/Footer.jsx` (Line 26)
   ```jsx
   <h3 className="text-2xl font-bold text-white mb-3">Company</h3>
   ```

3. Update footer contact info (Line 39)
   ```jsx
   { icon: Mail, text: 'your-email@company.com' },
   { icon: Phone, text: '+1 (555) 123-4567' },
   { icon: MapPin, text: 'Your Address' },
   ```

### Update Hero Headline
Open `src/sections/Hero.jsx` (Line 47)
```jsx
<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
  Your Headline Here  // ← Update this
  <br />
  <span className="text-gradient">Your Subheadline</span>
</h1>
```

### Change Primary Color
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    50: '#f0f9ff',   // Light background
    500: '#YOUR_COLOR',  // Main color
    600: '#YOUR_COLOR',  // Hover color
    // ... rest of shades
  },
}
```

**Quick color suggestions:**
- Blue: `#0ea5e9`
- Green: `#10b981`
- Purple: `#8b5cf6`
- Pink: `#ec4899`
- Red: `#ef4444`

### Add Your Logo
1. Place logo image in `public/logo.png`
2. Update `Navbar.jsx` (Line 24):
   ```jsx
   <motion.a href="#" className="cursor-pointer">
     <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
   </motion.a>
   ```

### Update Testimonials
Edit `src/sections/Testimonials.jsx` (Line 7):
```jsx
const testimonials = [
  {
    id: 1,
    name: 'Your Client Name',
    role: 'CEO, Company Name',
    avatar: '👤', // Use emoji or replace with image
    content: 'Their testimonial text here...',
    rating: 5,
  },
  // Add more...
]
```

### Modify Features
Edit `src/sections/Features.jsx` (Line 15):
```jsx
const features = [
  {
    id: 1,
    icon: Sparkles,      // Change icon from lucide-react
    title: 'Feature Name',
    description: 'Feature description...',
  },
  // Add more...
]
```

---

## 🔗 Available Icons

All icons from [lucide-react](https://lucide.dev):

**Common icons available:**
```
Sparkles, Zap, Shield, Users, TrendingUp, Globe,
Code2, Palette, Smartphone, Database, Headphones,
BarChart3, Play, ArrowRight, Menu, X, Mail, Phone,
MapPin, Github, Linkedin, Twitter, Star, ChevronLeft,
ChevronRight, CheckCircle2, and 1000+ more!
```

To see all: Visit https://lucide.dev

---

## 🚀 Commands Reference

```bash
# Start development server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 📱 Testing Responsive Design

### In VS Code:
1. Open the landing page
2. Press **F12** to open DevTools
3. Click device toggle icon (mobile phone icon) in top-left
4. Choose device or custom dimensions

### Test breakpoints:
- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1920px (Full screen)

---

## 🎨 Color Customization Cheat Sheet

**Change Primary Color** (most used):
1. `tailwind.config.js` → Primary color values
2. Updates button, links, badges, gradients

**Change Secondary Color** (accents):
1. `tailwind.config.js` → Secondary color values
2. Updates CTA section gradient, secondary buttons

**Dark Mode** (optional):
1. Add `dark` class to `<html>` tag
2. Use `dark:` prefix in Tailwind classes
3. Example: `bg-white dark:bg-dark-900`

---

## 💾 Save & Auto-Reload

The development server has **Hot Module Replacement (HMR)**:
- Save any file (Ctrl+S)
- Browser auto-refreshes instantly
- No manual refresh needed!

---

## 🌐 Deployment Ready

Your project is ready to deploy to:

### **Vercel** (Recommended)
```bash
npm install -g vercel
vercel
# Follow prompts - it's that easy!
```

### **Netlify**
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

### **GitHub Pages**
```bash
# Update vite.config.js base
npm run build
# Push to GitHub and enable Pages
```

---

## 📚 Full Documentation

For complete details, see:
- **README.md** - Full setup & customization
- **COMPONENTS_GUIDE.md** - Component reference

---

## ✨ Next Steps

1. ✅ **Customize content** - Update headlines, descriptions
2. ✅ **Change colors** - Update brand colors in Tailwind config
3. ✅ **Add logo** - Place in public/ folder
4. ✅ **Update testimonials** - Add real customer reviews
5. ✅ **Connect contact form** - Integrate with Formspree or EmailJS
6. ✅ **Test responsiveness** - Use DevTools mobile view
7. ✅ **Deploy** - Push to Vercel or Netlify

---

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Page not loading | Check http://localhost:5173/ in browser |
| Styles not applying | Save file and wait for HMR refresh |
| Icons not showing | Verify correct import from lucide-react |
| Colors look wrong | Check tailwind.config.js color values |
| Mobile menu not working | Check scrollPosition prop in Navbar |

---

## 📞 Common Integrations

### Add Contact Form
**Option 1: SimpleForm (No coding)**
- Visit https://www.simpleform.io
- Create form
- Add form endpoint to component

**Option 2: Formspree (Easy)**
```jsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="email" name="email" required />
  <button type="submit">Subscribe</button>
</form>
```

### Add Analytics
**Google Analytics:**
```jsx
// Add to index.html before closing </head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Newsletter Signup
Use: Mailchimp, ConvertKit, or Substack
- Get form embed code
- Add to CTA section

---

## 🎁 Bonus Tips

1. **Custom Font**: Add to `index.html` → `<head>`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
   ```
   Then update in `tailwind.config.js`:
   ```js
   fontFamily: { sans: ['Poppins', 'system-ui'] }
   ```

2. **Smooth Scroll**: Already built-in via CSS
   ```css
   html { scroll-behavior: smooth; }
   ```

3. **SEO Meta Tags**: Update in `index.html`:
   ```html
   <meta name="description" content="Your company description">
   <meta name="keywords" content="keyword1, keyword2">
   ```

---

**You're all set! 🚀 Start customizing and building your amazing landing page!**

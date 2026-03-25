# Deployment Guide

Complete guide for deploying your landing page to production.

## 🚀 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All content customized (company name, colors, text)
- [ ] Contact info updated (email, phone, address)
- [ ] Logo uploaded to `public/` folder
- [ ] All links point to correct URLs
- [ ] Images optimized and placed in `public/`
- [ ] Meta tags updated in `index.html`
- [ ] Contact form integrated (Formspree, EmailJS, etc)
- [ ] Analytics code added (Google Analytics, etc)
- [ ] Build completes without errors: `npm run build`
- [ ] Production build tested: `npm run preview`

---

## 📋 Production Build

First, create the production build:

```bash
npm run build
```

This creates a `dist/` folder with:
- Minified HTML, CSS, JavaScript
- Optimized assets
- Removed source maps
- Ready for deployment

**Verify build succeeded:**
```bash
npm run preview
```

Should show: `http://localhost:5173/` with your site working perfectly.

---

## 🎯 Deployment Options

Choose your preferred hosting platform below:

---

## 1️⃣ **Vercel** (Recommended - Easiest)

### Why Vercel?
- Optimized for React & Vite
- Automatic deployments from Git
- Free tier with generous limits
- Fast global CDN
- Built-in analytics

### Step-by-Step:

**Option A: Using CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts - it's automated!

**Option B: Using GitHub**
1. Push code to GitHub
2. Go to https://vercel.com
3. Import GitHub repository
4. Click "Deploy"
5. Done! ✨

**Environment Variables:**
```bash
vercel env add API_KEY value
vercel env add API_URL value
```

**Access Site:**
```
https://your-project.vercel.app
```

---

## 2️⃣ **Netlify** (Popular Alternative)

### Why Netlify?
- Simple drag-and-drop deployment
- Git-based automatic deployments
- Excellent free tier
- Built-in form handling
- Edge functions support

### Step-by-Step:

**Option A: Drag & Drop (Quickest)**
1. Build: `npm run build`
2. Go to https://app.netlify.com
3. Authorize with GitHub
4. Drag `dist/` folder → Netlify
5. Done! 🎉

**Option B: Using Git**
1. Push code to GitHub
2. Go to https://app.netlify.com
3. Click "New site from Git"
4. Select GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

**Add Custom Domain:**
1. Go to Site settings
2. Domain management
3. Add custom domain
4. Follow DNS setup
5. SSL auto-enabled

---

## 3️⃣ **GitHub Pages** (Free, Simple)

### Why GitHub Pages?
- Free hosting
- Integrated with GitHub
- Great for portfolios
- No build configuration needed

### Step-by-Step:

1. **Update vite.config.js:**
   ```js
   export default {
     base: '/your-repo-name/', // ← Add your repo name
     // ... rest of config
   }
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Create GitHub Action:**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy

   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-artifact@v2
           with:
             name: dist
             path: dist
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Enable Pages:**
   - Go to repo → Settings → Pages
   - Source: `gh-pages` branch
   - Click Save

5. **Access Site:**
   ```
   https://your-username.github.io/your-repo-name
   ```

---

## 4️⃣ **AWS Amplify** (Scalable)

### Why AWS Amplify?
- Powerful AWS ecosystem
- Auto-scaling
- Global CDN
- Custom domains
- Great for larger projects

### Step-by-Step:

1. **Install Amplify CLI:**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize:**
   ```bash
   amplify init
   ```

3. **Add hosting:**
   ```bash
   amplify add hosting
   ```
   Select: `Hosting with Amazon CloudFront and S3`

4. **Deploy:**
   ```bash
   amplify publish
   ```

5. **Access Site:**
   Your custom URL will be provided

---

## 5️⃣ **Azure Static Web Apps**

### Why Azure?
- Integrated with Azure ecosystem
- Excellent for enterprise
- Built-in authentication
- Global CDN

### Step-by-Step:

1. **Go to Azure Portal**
2. Create "Static Web App" resource
3. Select GitHub repository
4. Build settings:
   - App location: `/`
   - API location: (leave empty)
   - Output location: `dist`
5. Click "Create"
6. Azure automatically deploys

**Access Site:**
```
https://your-name.azurestaticapps.net
```

---

## 6️⃣ **Traditional Hosting (cPanel, Bluehost, etc)**

### Step-by-Step:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload via FTP:**
   - Connect via FTP client (FileZilla, WinSCP)
   - Upload all files from `dist/` folder
   - Place in `public_html/` or `www/` directory

3. **Configure .htaccess** (for client-side routing):
   Create `.htaccess` in your root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Visit your domain**

---

## 🔒 Custom Domain Setup

### Add Custom Domain:

**Vercel:**
1. Settings → Domains
2. Add domain
3. Update DNS records
4. SSL auto-configured

**Netlify:**
1. Domain settings
2. Add custom domain
3. Update DNS records
4. SSL auto-configured

**GitHub Pages:**
1. Create `CNAME` file in `public/`
2. Add: `yourdomain.com`
3. Update DNS records
4. Enable HTTPS in repo settings

**DNS Records to Set (All Hosts):**
```
Type: A
Name: @
Value: <hosting-provider-ip>
TTL: 3600

OR

Type: CNAME
Name: www
Value: <hosting-provider-domain>
TTL: 3600
```

---

## 📊 Analytics Setup

### Google Analytics:

1. **Create GA property:**
   - Go to https://analytics.google.com
   - Create property for your domain
   - Get Measurement ID

2. **Add to index.html:**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

3. **Replace `GA_MEASUREMENT_ID` with your ID**

### Plausible Analytics (Privacy-Focused):

1. Create account on https://plausible.io
2. Add to `index.html`:
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
   ```

---

## 🔧 Environment Variables

### For Production APIs:

Create `.env.production`:
```env
VITE_API_URL=https://api.yourdomain.com
VITE_API_KEY=your_production_key
```

Use in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🐛 Troubleshooting Deployment

| Problem | Solution |
|---------|----------|
| Build fails | Run `npm run build` locally to see errors |
| Blank page | Check browser console for errors |
| Routes not working | Ensure `.htaccess` or SPA routing is configured |
| Slow site | Optimize images, enable CDN |
| Forms not submitting | Check form service integration (Formspree, etc) |
| 404 on page refresh | Enable SPA routing on your host |

---

## ✅ Deployment Verification

After deploying, verify:

- [ ] Site loads at custom domain
- [ ] All navigation links work
- [ ] Mobile responsive (test on phone)
- [ ] Contact form works
- [ ] Images load correctly
- [ ] No console errors (F12 → Console)
- [ ] Analytics tracking works
- [ ] Page speed acceptable (use PageSpeed Insights)

### Test Tools:
- **Page Speed:** https://pagespeed.web.dev
- **Mobile Test:** https://search.google.com/test/mobile-friendly
- **SSL Check:** https://www.sslshopper.com/ssl-checker.html
- **Performance:** https://www.webpagetest.org

---

## 🚀 Post-Deployment Tips

1. **Monitor Performance:**
   - Set up uptime monitoring
   - Monitor error rates
   - Track conversion metrics

2. **Regular Updates:**
   - Update content regularly
   - Get latest security patches
   - Update dependencies: `npm update`

3. **Backup:**
   - Keep source code safe on GitHub
   - Backup database if applicable
   - Store API keys securely

4. **SEO:**
   - Submit sitemap to Google Search Console
   - Set up Search Console
   - Implement structured data

5. **Security:**
   - Enable HTTPS (automatic with most hosts)
   - Set security headers
   - Regular security audits

---

## 📞 Quick Support

**Vercel Issues:** https://vercel.com/support  
**Netlify Issues:** https://support.netlify.com  
**GitHub Issues:** https://github.com/support  
**AWS Support:** https://aws.amazon.com/support

---

## 🎉 You're Deployed!

Congratulations on launching your landing page! 

**Next Steps:**
1. Monitor analytics
2. Gather user feedback
3. Iterate and improve
4. Celebrate success! 🎊

---

**Happy deploying! 🚀**

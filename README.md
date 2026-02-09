# Quantum IPTV Player Website

Professional landing page and legal documentation for Quantum IPTV Player Android app.

## 📁 Project Structure

```
├── index.html          # Main landing page
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Service
├── disclaimer.html     # Legal Disclaimer
├── styles.css          # Main stylesheet
├── legal.css           # Legal pages stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)
- Your custom domain (optional)

### Step 1: Push to GitHub

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit: Quantum IPTV Player website"
```

2. Create a new repository on GitHub (e.g., `quantum-iptv-website`)

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/quantum-iptv-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Other (static site)
   - **Root Directory:** ./
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty)
5. Click "Deploy"

#### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and select your project settings

### Step 3: Connect Custom Domain

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `quantumiptvplayer.com`)
4. Follow Vercel's instructions to update your DNS records:
   - **Type:** A Record
   - **Name:** @ (or your subdomain)
   - **Value:** 76.76.21.21 (Vercel's IP)
   
   OR
   
   - **Type:** CNAME
   - **Name:** www (or your subdomain)
   - **Value:** cname.vercel-dns.com

5. Wait for DNS propagation (can take up to 48 hours, usually much faster)

## 🔧 Configuration

### Update Email Addresses

Before deploying, update the following email addresses in all HTML files:

- `support@quantumiptvplayer.com` → Your support email
- `privacy@quantumiptvplayer.com` → Your privacy email
- `legal@quantumiptvplayer.com` → Your legal email
- `abuse@quantumiptvplayer.com` → Your abuse reports email

### Update Play Store Link

Once your app is published on Google Play Store, update the download links in `index.html`:

```html
<a href="https://play.google.com/store/apps/details?id=YOUR_APP_ID" class="btn btn-primary">
```

### Add App Screenshots

Replace the screenshot placeholders in `index.html` with actual app screenshots:

1. Take screenshots of your app (recommended size: 1080x2340 for 9:19.5 aspect ratio)
2. Optimize images for web (use tools like TinyPNG)
3. Replace the `.screenshot-placeholder` divs with actual images:

```html
<img src="screenshots/profile-setup.png" alt="Profile Setup" class="screenshot">
```

## 📱 Google Play Store Requirements

This website provides all required pages for Play Store submission:

- ✅ **Landing Page** - Professional app showcase
- ✅ **Privacy Policy** - GDPR and CCPA compliant
- ✅ **Terms of Service** - Comprehensive legal terms
- ✅ **Disclaimer** - Clear content responsibility statement

### Important Notes for Play Store

1. **Privacy Policy URL:** Use `https://yourdomain.com/privacy.html`
2. **Website URL:** Use `https://yourdomain.com`
3. **Support Email:** Update to your actual support email
4. **Content Rating:** Recommended Teen (13+) due to potential mature IPTV content

## 🎨 Customization

### Colors

The website uses a dark theme with green accents. To change colors, update these CSS variables in `styles.css`:

```css
/* Primary colors */
Background: #121212
Surface: #1E1E1E
Accent: #4CAF50
Text Primary: #FFFFFF
Text Secondary: #B3B3B3
```

### Fonts

The website uses Inter font from Google Fonts. To change:

1. Update the Google Fonts link in HTML files
2. Update `font-family` in `styles.css`

## 🔒 Legal Compliance

### GDPR Compliance (EU)
- ✅ Privacy Policy includes data collection, usage, and user rights
- ✅ Clear consent mechanisms
- ✅ Data deletion procedures outlined

### CCPA Compliance (California)
- ✅ Privacy Policy includes California-specific rights
- ✅ No personal data sale (explicitly stated)
- ✅ Opt-out mechanisms provided

### Copyright Protection
- ✅ Disclaimer clearly states app is player-only
- ✅ No content provided or hosted
- ✅ User responsibility for content legality emphasized

## 📊 Analytics (Optional)

To add Google Analytics:

1. Create a Google Analytics account
2. Add tracking code before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Testing

Before deploying, test:

- ✅ All navigation links work
- ✅ Responsive design on mobile, tablet, desktop
- ✅ All legal pages are accessible
- ✅ Email links work correctly
- ✅ Smooth scrolling functions properly
- ✅ No console errors

## 📞 Support

For questions or issues with the website:
- Email: support@quantumiptvplayer.com

## 📄 License

This website template is provided for Quantum IPTV Player. Customize as needed for your project.

---

**Last Updated:** February 8, 2024

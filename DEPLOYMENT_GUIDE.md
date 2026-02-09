# Quick Deployment Guide

## 🚀 Deploy to Vercel in 5 Minutes

### Step 1: Prepare Your Files

Before deploying, update these items:

1. **Email Addresses** - Replace placeholder emails in all HTML files:
   - `support@quantumiptvplayer.com`
   - `privacy@quantumiptvplayer.com`
   - `legal@quantumiptvplayer.com`
   - `abuse@quantumiptvplayer.com`

2. **Company Information** - Update in `terms.html`:
   - Business address (if applicable)
   - Jurisdiction/governing law

### Step 2: Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Quantum IPTV Player website"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/quantum-iptv-website.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your `quantum-iptv-website` repository
5. Click "Deploy" (no configuration needed!)

Your site will be live at: `https://your-project-name.vercel.app`

### Step 4: Connect Your Domain

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `quantumiptvplayer.com`)
3. Update DNS records at your domain registrar:

**Option A: A Record**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Option B: CNAME Record**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. Wait 5-60 minutes for DNS propagation

### Step 5: Update Play Store Listing

Once deployed, add these URLs to your Google Play Console:

- **Website:** `https://yourdomain.com`
- **Privacy Policy:** `https://yourdomain.com/privacy.html`
- **Support Email:** Your actual support email

## ✅ Checklist Before Going Live

- [ ] All email addresses updated
- [ ] Company/jurisdiction information updated
- [ ] Domain connected and working
- [ ] All pages load correctly
- [ ] Mobile responsive design tested
- [ ] All links work (especially legal pages)
- [ ] SSL certificate active (automatic with Vercel)

## 🔄 Making Updates

After initial deployment, any changes you push to GitHub will automatically deploy:

```bash
# Make your changes, then:
git add .
git commit -m "Update content"
git push
```

Vercel will automatically rebuild and deploy in ~30 seconds.

## 📱 For Play Store Submission

Your website now provides all required documentation:

1. **Privacy Policy URL:** `https://yourdomain.com/privacy.html`
2. **Terms of Service URL:** `https://yourdomain.com/terms.html`
3. **Website URL:** `https://yourdomain.com`
4. **Support Contact:** Your support email

These URLs are required in the Google Play Console when submitting your app.

## 🎯 Next Steps

1. **Add Screenshots:** Replace placeholder screenshots with actual app images
2. **Update Play Store Link:** Once app is published, update download buttons
3. **Set Up Analytics:** Add Google Analytics (optional)
4. **Test Everything:** Check all pages on mobile and desktop
5. **Submit to Play Store:** Use the URLs from your deployed site

## 💡 Tips

- Vercel provides automatic HTTPS (SSL certificate)
- Changes deploy automatically from GitHub
- Use Vercel Analytics for free traffic insights
- Preview deployments are created for pull requests

## 🆘 Troubleshooting

**Domain not working?**
- Wait up to 48 hours for DNS propagation
- Verify DNS records are correct
- Check domain registrar settings

**Pages not loading?**
- Check file names are correct (case-sensitive)
- Verify all files are pushed to GitHub
- Check Vercel deployment logs

**Need help?**
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

**Estimated Time:** 15-30 minutes (excluding DNS propagation)

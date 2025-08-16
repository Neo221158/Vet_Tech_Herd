# Deployment Guide

This guide provides step-by-step instructions for deploying The Vet Tech Herd website.

## 🎯 Quick Deployment

### Option 1: GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial website deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The site will auto-deploy via the configured workflow

3. **Custom Domain (Optional)**
   - Add `CNAME` file with your domain
   - Configure DNS records with your provider

### Option 2: Manual Static Hosting

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Deploy the `out/` folder** to any static hosting provider:
   - Netlify
   - Vercel
   - AWS S3 + CloudFront
   - Firebase Hosting

## 🔧 Configuration

### Environment Setup

No environment variables required for the static build. All configuration is in:
- `next.config.ts` - Build configuration
- `src/data/*.json` - Content data

### Custom Domain

1. **Update sitemap URL** in `src/app/sitemap.ts`:
   ```typescript
   const baseUrl = 'https://yourdomain.com';
   ```

2. **Update robots.txt** in `src/app/robots.ts`:
   ```typescript
   sitemap: 'https://yourdomain.com/sitemap.xml'
   ```

3. **GitHub Pages CNAME**:
   - Update `.github/workflows/deploy.yml`
   - Change `cname: yourdomain.com`

## 📊 Pre-Deployment Checklist

### Content Verification
- [ ] Update all placeholder content
- [ ] Verify all links work correctly
- [ ] Check contact information is accurate
- [ ] Review event dates and details
- [ ] Validate job postings are current
- [ ] Test all forms work as expected

### Technical Verification
- [ ] Run `npm run build` successfully
- [ ] Test responsive design on mobile/tablet
- [ ] Verify SEO metadata is correct
- [ ] Check sitemap.xml generates properly
- [ ] Confirm all images load correctly
- [ ] Test navigation between all pages

### Performance Check
- [ ] Build size is reasonable (~100kB total)
- [ ] Pages load quickly
- [ ] No console errors in browser
- [ ] Forms submit without errors

## 🚀 GitHub Actions Deployment

### Workflow Configuration

The included workflow (`.github/workflows/deploy.yml`) automatically:

1. **Triggers** on push to `main` branch
2. **Installs** Node.js and dependencies
3. **Builds** the static site
4. **Deploys** to GitHub Pages

### Workflow Requirements

Ensure your repository has:
- [ ] Actions enabled (Settings → Actions)
- [ ] Pages source set to "GitHub Actions"
- [ ] Workflow permissions for GITHUB_TOKEN

### Custom Workflow

To modify the deployment:

1. **Edit** `.github/workflows/deploy.yml`
2. **Common changes**:
   - Change Node.js version
   - Add environment variables
   - Modify build commands
   - Change deployment target

## 🌐 Hosting Alternatives

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`
4. Deploy site

### Vercel
1. Import GitHub repository
2. Framework preset: Next.js
3. Build command: `npm run build`
4. Output directory: `out`

### AWS S3 + CloudFront
1. Build site locally: `npm run build`
2. Upload `out/` contents to S3 bucket
3. Configure CloudFront distribution
4. Update DNS records

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init hosting`
3. Build: `npm run build`
4. Deploy: `firebase deploy`

## 📝 Content Management

### Updating Content

All content is managed through JSON files in `src/data/`:

#### Adding New Events
1. Edit `src/data/events.json`
2. Add new event object with required fields
3. Commit and push changes

#### Adding New Jobs
1. Edit `src/data/jobs.json`
2. Add new job posting
3. Include proper `postedDate` for sorting

#### Adding New Resources
1. Edit `src/data/resources.json`
2. Categorize properly for filtering
3. Ensure external links are valid

### Content Guidelines

- **Images**: Add to `public/` folder, reference as `/image.jpg`
- **Links**: Use absolute URLs for external links
- **Dates**: Use YYYY-MM-DD format consistently
- **IDs**: Use unique, descriptive identifiers

## 🔧 Form Integration

### Current State
Forms are implemented with client-side validation and simulation. For production:

1. **Choose form handler**:
   - Formspree (recommended for static sites)
   - Netlify Forms
   - Custom API endpoint

2. **Update form components**:
   - Replace simulation code
   - Add proper error handling
   - Configure success redirects

### Formspree Integration Example

1. **Sign up** at formspree.io
2. **Create form** and get endpoint URL
3. **Update form component**:
   ```typescript
   const handleSubmit = async (formData) => {
     const response = await fetch('https://formspree.io/f/your-form-id', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     });
     // Handle response
   };
   ```

## 🔍 Monitoring & Analytics

### Recommended Additions

1. **Google Analytics 4**
   - Add tracking code to layout
   - Configure goals and events

2. **Google Search Console**
   - Verify domain ownership
   - Submit sitemap
   - Monitor search performance

3. **Performance Monitoring**
   - Lighthouse CI for automated testing
   - Core Web Vitals tracking

### Implementation

Add to `src/app/layout.tsx`:
```typescript
// Google Analytics
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
- **Node version**: Ensure Node.js 18+
- **Dependencies**: Run `npm ci` for clean install
- **TypeScript errors**: Check type definitions
- **Import paths**: Verify relative/absolute paths

#### Deployment Issues
- **GitHub Pages**: Check Actions tab for errors
- **404 errors**: Verify `trailingSlash: true` in config
- **Assets not loading**: Check public/ folder structure

#### Performance Issues
- **Large bundle size**: Analyze with `npm run build`
- **Slow loading**: Optimize images, review imports
- **JavaScript errors**: Check browser console

### Debug Steps

1. **Local testing**:
   ```bash
   npm run dev
   # Test all functionality
   ```

2. **Production build**:
   ```bash
   npm run build
   npm run start
   # Test production build locally
   ```

3. **Static export**:
   ```bash
   npm run build
   # Serve the out/ directory
   npx serve out
   ```

## 📞 Support

### Getting Help

1. **Documentation**: Check README.md and code comments
2. **Issues**: Create GitHub issues for bugs
3. **Community**: Ask in The Vet Tech Herd community
4. **Emergency**: Contact technical maintainer

### Maintenance

- **Regular updates**: Keep dependencies current
- **Content freshness**: Update events and jobs regularly
- **Security**: Monitor for vulnerability alerts
- **Performance**: Regular Lighthouse audits

---

## ✅ Deployment Complete!

Once deployed, your site will be available at:
- **GitHub Pages**: `https://username.github.io/repository-name`
- **Custom domain**: `https://yourdomain.com`

Remember to update DNS records if using a custom domain!
# Vercel Deployment Guide

## About Vercel Free Tier

✅ **Yes, Vercel's free tier can absolutely host this type of landing page!**

### What's Included in Vercel Free Tier:
- **100GB Bandwidth** per month
- **Unlimited Static Sites** (React, Vue, etc.)
- **Automatic HTTPS** with SSL certificates
- **Global CDN** for fast loading worldwide
- **Custom Domains** (bring your own domain)
- **Git Integration** (GitHub, GitLab, Bitbucket)
- **Preview Deployments** for every pull request
- **Analytics** (basic)

### Perfect for This Project Because:
- ✅ Static React site with no backend requirements
- ✅ Small bundle size with optimized assets
- ✅ Minimal bandwidth usage for landing pages
- ✅ Professional hosting with enterprise-level performance

## Deployment Steps

### 1. Environment Variables Setup
Create these environment variables in your Vercel dashboard:

```bash
VITE_VAPI_PUBLIC_KEY=your_vapi_public_key_here
VITE_GENERAL_ASSISTANT_ID=your_general_assistant_id_here  
VITE_PARAGON_HONDA_ASSISTANT_ID=e2e9e24a-87de-416c-a55d-89aff7ac1fff
```

### 2. Deploy to Vercel

#### Option A: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

#### Option B: Git Integration
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Automatic deployments on every push

#### Option C: Drag & Drop
1. Run `npm run build`
2. Drag the `dist` folder to Vercel dashboard

### 3. Custom Domain (Optional)
- Add your custom domain in Vercel dashboard
- Update DNS records as instructed
- SSL certificate auto-generated

### 4. Performance Optimizations Already Included
- ✅ Code splitting with Vite
- ✅ Asset optimization and compression
- ✅ Lazy loading for images
- ✅ Tree shaking for smaller bundles
- ✅ CSS optimization with Tailwind

## Routes Configuration

Your app supports these routes:
- `/` - Main landing page
- `/ParagonHonda` - Paragon Honda microsite
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service  
- `/cookies` - Cookie Policy

All routes will work correctly with Vercel's automatic SPA routing.

### 6. Testing
After deployment, test both routes:
- Main site functionality
- Paragon Honda specific features
- Voice AI integration with correct assistants

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_VAPI_PUBLIC_KEY` | Your Vapi public API key | `pub_12345...` |
| `VITE_GENERAL_ASSISTANT_ID` | General assistant ID | `asst_general_123` |
| `VITE_PARAGON_HONDA_ASSISTANT_ID` | Paragon Honda assistant ID | `asst_honda_456` |

## Troubleshooting

### Voice AI Not Working
1. Check environment variables are set correctly
2. Verify assistant IDs in Vapi dashboard
3. Check browser console for errors
4. Ensure microphone permissions are granted

### Domain Issues
1. Verify DNS propagation (can take up to 48 hours)
2. Check Vercel domain configuration
3. Ensure SSL certificate is active
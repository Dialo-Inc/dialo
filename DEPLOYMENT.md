# Deployment Guide

## Vercel Deployment with Custom Domain

### 1. GitHub Setup
1. Connect your Lovable project to GitHub (use the GitHub button in Lovable)
2. This creates a new repository with your project code
3. Clone the repository locally if needed

### 2. Environment Variables
Before deploying, set up your environment variables:

#### In Vercel Dashboard:
1. Go to your project settings → Environment Variables
2. Add these variables:
   - `VITE_VAPI_PUBLIC_KEY`: Your Vapi public key
   - `VITE_GENERAL_ASSISTANT_ID`: Assistant ID for main landing page
   - `VITE_PARAGON_HONDA_ASSISTANT_ID`: Assistant ID for Paragon Honda page

#### For Local Development:
1. Copy `.env.example` to `.env.local`
2. Fill in your actual values

### 3. Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm ci`

### 4. Custom Domain Setup
1. In Vercel project settings, go to "Domains"
2. Add your custom domain: `dialo.com`
3. Configure DNS at your domain registrar:
   - Add A record pointing to Vercel's IP
   - Add CNAME for www subdomain
4. Vercel will automatically handle SSL certificates

### 5. Route Configuration
The app automatically supports:
- `dialo.com/` → General landing page (Index component)
- `dialo.com/ParagonHonda` → Paragon Honda microsite

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
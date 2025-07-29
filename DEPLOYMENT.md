# 🚀 GitHub Actions Deployment Guide

This guide shows you how to deploy your SecurePass AI project using GitHub Actions to different platforms.

## 📋 Prerequisites

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/securepass-ai.git
   git push -u origin main
   ```

2. **Get a Google Gemini API Key** from [Google AI Studio](https://aistudio.google.com/app/apikey)

## 🎯 Deployment Options

### Option 1: GitHub Pages (Recommended for Free Hosting)

#### Setup Steps:

1. **Enable GitHub Pages**:
   - Go to your repository → Settings → Pages
   - Source: "GitHub Actions"

2. **Add Secrets**:
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add: `GEMINI_API_KEY` with your Google Gemini API key

3. **Deploy**:
   - Push to `main` branch
   - The workflow in `.github/workflows/build.yml` will automatically deploy
   - Your site will be available at: `https://yourusername.github.io/securepass-ai`

#### Workflow File: `.github/workflows/build.yml`
✅ Already configured for GitHub Pages deployment

---

### Option 2: Vercel Deployment

#### Setup Steps:

1. **Get Vercel Token**:
   - Go to [Vercel Account Settings](https://vercel.com/account/tokens)
   - Create a new token

2. **Link Project to Vercel**:
   ```bash
   npm i -g vercel
   vercel login
   vercel link
   ```

3. **Add GitHub Secrets**:
   - `VERCEL_TOKEN`: Your Vercel token
   - `VERCEL_ORG_ID`: Found in `.vercel/project.json` after linking
   - `VERCEL_PROJECT_ID`: Found in `.vercel/project.json` after linking

4. **Enable Workflow**:
   - Rename `.github/workflows/deploy-vercel.yml.example` to `.github/workflows/deploy-vercel.yml`
   - Push to `main` branch

#### Workflow File: `.github/workflows/deploy-vercel.yml`
✅ Pre-configured for Vercel deployment

---

### Option 3: Netlify Deployment

#### Setup Steps:

1. **Get Netlify Tokens**:
   - Go to [Netlify User Settings](https://app.netlify.com/user/applications)
   - Generate a personal access token
   - Create a new site and get the Site ID

2. **Add GitHub Secrets**:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID
   - `GEMINI_API_KEY`: Your Google Gemini API key

3. **Enable Workflow**:
   - Rename `.github/workflows/deploy-netlify.yml.example` to `.github/workflows/deploy-netlify.yml`
   - Push to `main` branch

#### Workflow File: `.github/workflows/deploy-netlify.yml`
✅ Pre-configured for Netlify deployment

---

## 🔧 Environment Variables Setup

### For GitHub Pages:
- Add `GEMINI_API_KEY` in GitHub repository secrets

### For Vercel:
- Add environment variables in Vercel dashboard:
  - `VITE_GEMINI_API_KEY`

### For Netlify:
- Add environment variables in Netlify dashboard:
  - `VITE_GEMINI_API_KEY`

## 🎮 Manual Deployment Commands

### Build and Deploy Locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview

# Deploy to Vercel manually
npx vercel --prod

# Deploy to Netlify manually
npx netlify deploy --prod --dir=dist
```

## 🔄 Workflow Triggers

All workflows are triggered by:
- **Push to `main` branch**: Automatic deployment
- **Pull Requests**: Build testing (no deployment)

## 📊 Monitoring Deployments

1. **GitHub Actions**: Repository → Actions tab
2. **Vercel**: [Vercel Dashboard](https://vercel.com/dashboard)
3. **Netlify**: [Netlify Dashboard](https://app.netlify.com/)

## 🛠️ Troubleshooting

### Common Issues:

1. **Build Fails**: Check if all dependencies are properly listed in `package.json`
2. **Missing API Key**: Ensure `GEMINI_API_KEY` is added to secrets
3. **Deployment Fails**: Check workflow logs in GitHub Actions tab

### Debug Commands:
```bash
# Test build locally
npm run build

# Check environment variables
echo $GEMINI_API_KEY

# Lint workflows
npx github-actions-workflow-parser .github/workflows/
```

## 📈 Performance Tips

1. **Enable Build Caching**: Already configured in workflows
2. **Use Environment Variables**: For API keys and configuration
3. **Monitor Bundle Size**: Check build output for optimizations

---

Choose the deployment option that best fits your needs:
- **GitHub Pages**: Free, simple, perfect for open source
- **Vercel**: Fast, modern, great developer experience
- **Netlify**: Feature-rich, excellent for static sites

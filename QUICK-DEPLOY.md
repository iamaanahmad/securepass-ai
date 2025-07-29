# 🚀 Quick Deployment Guide

## Option 1: GitHub Pages (Easiest & Free)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/iamaanahmad/securepass-ai.git
git push -u origin main
```

### Step 2: Configure GitHub Repository
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Set Source to **"GitHub Actions"**

### Step 3: Add API Key Secret
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Name: `GEMINI_API_KEY`
4. Value: Your Google Gemini API key

### Step 4: Deploy
- Push any changes to `main` branch
- GitHub Actions will automatically build and deploy
- Your site will be live at: `https://iamaanahmad.github.io/securepass-ai`

---

## Option 2: Vercel (Fast & Professional)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
vercel login
vercel --prod
```

### Step 3: Add Environment Variable
In Vercel dashboard:
- Go to Project → Settings → Environment Variables
- Add: `VITE_GEMINI_API_KEY` = Your API key

---

## Option 3: Netlify (Feature Rich)

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Deploy
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Step 3: Add Environment Variable
In Netlify dashboard:
- Go to Site → Site settings → Environment variables
- Add: `VITE_GEMINI_API_KEY` = Your API key

---

## 🔑 Getting Your Google Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the generated key
4. Add it to your chosen platform's environment variables

---

## ✅ Verification

After deployment, test these features:
- [ ] Random password generation works
- [ ] AI passphrase generation works (requires API key)
- [ ] Copy to clipboard functions
- [ ] Responsive design on mobile
- [ ] Page loads quickly

---

**That's it! Your SecurePass AI is now live! 🎉**

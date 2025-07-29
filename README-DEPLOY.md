# SecurePass AI - Password Generator

A modern, secure password generator built with React, TypeScript, and powered by Google Gemini AI.

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/iamaanahmad/securepass-ai)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/iamaanahmad/securepass-ai)

## Features

- 🔐 **Random Password Generator**: Cryptographically secure passwords (8-32 characters)
- 🤖 **AI Memorable Passphrases**: Google Gemini-powered memorable passwords
- 📊 **Strength Indicator**: Real-time password strength feedback
- 📋 **One-Click Copy**: Easy clipboard integration
- 📱 **Fully Responsive**: Mobile-first design
- ⚡ **Fast & Secure**: Client-side generation, no data transmission
- 📈 **SEO Optimized**: High search engine visibility

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **AI**: Google Gemini API
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## Quick Start

1. Clone and install:
   ```bash
   git clone https://github.com/iamaanahmad/securepass-ai.git
   cd securepass-ai
   npm install
   ```

2. Set up environment:
   ```bash
   cp .env.example .env.local
   # Add your Google Gemini API key to .env.local
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

## Deployment

The project is ready for deployment on:
- **Vercel**: `vercel.json` included
- **Netlify**: `netlify.toml` included
- **GitHub Pages**: Build artifacts in `dist/`

For detailed documentation, see the full [README.md](./README.md).

## License

MIT License - see [LICENSE](./LICENSE) file.

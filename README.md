
# 🛡️ SecurePass AI: The Ultimate Password Generator

**SecurePass AI is a modern, feature-rich password generator built with React and powered by the Google Gemini API.** It provides a seamless experience for creating both highly random, secure passwords and memorable, AI-generated passphrases.

**[Try the Live Demo!](https://iamaanahmad.github.io/securepass-ai/) &lt;--**

![SecurePass AI Screenshot](https://i.ibb.co/Y7H7w5RP/image.png)

---

## ✨ Key Features

-   **🔐 Dual Generation Modes:**
    -   **Random Password Generator:** Create cryptographically secure passwords with customizable options.
        -   Adjustable length (8-32 characters).
        -   Toggle uppercase, lowercase, numbers, and symbols.
        -   Uses the browser's `crypto.getRandomValues` for true randomness.
    -   **🤖 AI Memorable Passphrase Generator:**
        -   Leverages **Google's Gemini API** to create strong, unique, and easy-to-remember passphrases based on a theme (e.g., "Space Exploration").
        -   A modern alternative to wordlists that is both creative and secure.
-   **📊 Strength Indicator:** Instant visual feedback on your password's strength, from "Too Weak" to "Very Strong".
-   **📋 One-Click Copy:** Easily copy the generated password to your clipboard.
-   **📱 Fully Responsive:** A clean, mobile-first design that looks and works great on any device.
-   **⚡ Fast & Secure:**
    -   Built with React and Vite for a lightning-fast user experience.
    -   **Random passwords are generated 100% on the client-side** and are never transmitted over the network. Your privacy is paramount.
-   **📈 SEO Optimized:** Carefully crafted content and meta-tags to rank high on search engines for relevant keywords.

---

## 🛠️ Tech Stack

-   **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
-   **AI Engine:** [Google Gemini API](https://ai.google.dev/) (`@google/genai`)
-   **Module Delivery:** Served via [esm.sh](https://esm.sh/) for fast, CDN-based module loading without a build step.
-   **Hosting:** Deployable on any static hosting platform (Vercel, Netlify, GitHub Pages, etc.).

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A **Google Gemini API Key**. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/iamaanahmad/securepass-ai.git
    cd securepass-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up your environment variables:**
    The AI Memorable Passphrase generator requires a Google Gemini API key.

    Create a file named `.env` in the root of your project and add your API key:
    ```
    API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
    ```
    *This file is included in `.gitignore` to ensure your key is not checked into source control.*

4.  **Run the development server:**
    Since this project is set up to run directly in the browser using import maps and a static server, you can use a simple tool like `serve` or VS Code's Live Server.

    ```bash
    # If you don't have 'serve' installed
    npm install -g serve

    # Run the server from the project root
    serve
    ```
    The application will be available at `http://localhost:3000` (or another port if `3000` is in use).

---

## 📂 Project Structure

The codebase is organized to be clean, scalable, and easy to navigate.

```
/
├── public/                  # Public assets (if any)
├── src/
│   ├── components/          # Reusable React components (PasswordDisplay, StrengthIndicator, etc.)
│   ├── hooks/               # Custom React hooks (usePasswordGenerator)
│   ├── services/            # API services (geminiService.ts)
│   ├── types/               # TypeScript type definitions (types.ts)
│   ├── App.tsx              # Main application component
│   └── index.tsx            # React entry point
├── .env.example             # Example environment file
├── index.html               # Main HTML file with import maps
└── README.md                # You are here!
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  **Fork the Project**
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

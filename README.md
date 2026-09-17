# 💬 Chat App

**A modern, responsive real-time chat interface built with React, Vite, and Tailwind CSS.**

 
## ✨ Features

* 💬 **Dynamic Layout System:** Responsive multi-column layout featuring an active user list, main chat container, and details panel that dynamically toggles based on user selection.
* 🎨 **Glassmorphic UI:** Modern visual aesthetics styled with Tailwind CSS, backdrop filters, rounded viewports, and custom borders.
* 🔐 **Authentication & Profile:** Dedicated views for user login, registration, and profile customization.
* ⚡ **Ultra-Fast Development:** Instant Hot Module Replacement (HMR) and optimized build setup powered by Vite.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | React.js (Hooks, Functional Components) |
| **Styling** | Tailwind CSS |
| **Bundler & Build Tool** | Vite |
| **Linting & Tooling** | Oxlint (`.oxlintrc.json`), ESLint |

---

## 📂 Project Structure

```text
Chat App/
├── client/
│   ├── public/             # Static public assets
│   ├── src/
│   │   ├── assets/         # App icons, vectors, and imagery
│   │   ├── components/     # Modular view components
│   │   │   ├── ChatContainer.jsx   # Active chat feed & message input
│   │   │   ├── RightSidebar.jsx    # User details & media panel
│   │   │   └── Sidebar.jsx         # Conversations list & search
│   │   ├── lib/
│   │   │   └── utils.js    # Utility and helper functions
│   │   ├── pages/          # Application views
│   │   │   ├── HomePage.jsx        # Core three-column chat dashboard
│   │   │   ├── LoginPage.jsx       # User authentication screen
│   │   │   └── ProfilePage.jsx     # User settings and profile management
│   │   ├── App.jsx         # Top-level routing and state container
│   │   ├── index.css       # Global styles and Tailwind directives
│   │   └── main.jsx        # Client entry point
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .oxlintrc.json
└── README.md
🚀 Getting Started
Prerequisites
Ensure you have Node.js (v18 or higher) and npm installed on your system.

Installation
Clone the repository:

Bash
git clone [https://github.com/your-username/chat-app.git](https://github.com/your-username/chat-app.git)
cd "Chat App/client"
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Access the application:
Open http://localhost:5173 in your browser.

📦 Build & Production
To compile an optimized static bundle for production:

Bash
npm run build
To preview the generated production build locally:

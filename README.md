[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/fcRde9Vj)
# Crypto App - React & Tailwind CSS Assignment

## 📋 Overview

In this assignment, you will build a crypto platform style frontend using **React.js** and **Tailwind CSS**. This project will help you practice component-based architecture, client-side routing, responsive design, and modern CSS utilities.

---

## 🚀 Getting Started

After accepting this assignment, follow these steps:

### 1. Clone Your Repository

```bash
git clone <your-repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

### Technical Requirements

- [ ] Use **React Router** for client-side navigation
- [ ] Use **functional components** with React hooks
- [ ] Create **reusable components** (Button, Card, CryptoCard, CryptoTable, etc.)
- [ ] Use **Tailwind CSS** for all styling (no external CSS frameworks)
- [ ] Implement **responsive design** (mobile, tablet, desktop)
- [ ] Use **React state management** (useState, useContext, or similar)
- [ ] Follow **proper file structure** and naming conventions
- [ ] Write **clean, readable code** with appropriate comments

---

## 📁 Project Structure

```
src/
├── components/      # Reusable React components
│   ├── common/      # Shared components (Button, Card, Input, Badge)
│   ├── layout/      # Layout components (Navbar, Footer, disclaimers)
│   └── crypto/      # Crypto-specific components (CryptoCard, PriceChart)
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── AssetDetail.jsx
│   ├── Learn.jsx
│   ├── SignIn.jsx
│   └── SignUp.jsx
├── data/            # Mock data and constants
├── App.jsx          # Main application with routing
├── main.jsx         # Application entry point
└── index.css        # Tailwind CSS imports
```

---

## 🎨 Design Reference

Use modern crypto platform examples as inspiration

- Overall layout and structure across all pages
- Consistent color scheme and typography
- Navigation flow between pages
- Responsive behavior on all screen sizes
- User interface patterns and interactions

---

## 💡 Helpful Resources

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Heroicons](https://heroicons.com/) - Free SVG icons
- [React Icons](https://react-icons.github.io/react-icons/) - Free SVG icons

---

## 🌐 Deployment on Netlify

You must deploy your completed project on **Netlify**.

- Use a neutral site name and subdomain (do not include `coinbase`).
- Keep the deployed title as `Crypto App | Student Project`.
- Keep warning/disclaimer UI visible in production.

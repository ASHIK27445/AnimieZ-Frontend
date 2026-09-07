# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # AnimieZ

  AnimieZ is a modern anime-inspired streetwear storefront built with React, TypeScript, Vite, and Tailwind CSS.

  ## Live Website

  [https://animie-z.vercel.app/](https://animie-z.vercel.app/)

  ## Features

  - Scroll-driven fashion hero sections
  - AnimieZ product and collection cards
  - Latest drops carousel with product navigation
  - Responsive navbar with announcement marquee
  - Cart, favourite, user, dropdown, and mobile menu icons
  - Animated product card stack using Framer Motion
  - Responsive dark editorial design with product imagery
  - Footer with story, contact, policy, FAQ, and social links

  ## Tech Stack

  - React 19
  - TypeScript
  - Vite
  - Tailwind CSS
  - Framer Motion
  - GSAP
  - Lucide React

  ## Getting Started

  ```bash
  npm install
  npm run dev
  ```

  ## Production Build

  ```bash
  npm run build
  npm run preview
  ```
      // Enable lint rules for React DOM

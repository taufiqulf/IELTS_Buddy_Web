# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Running locally in development mode

To get started run `npm install && npm run dev`:

    npm install
    npm run dev

How to fix regeneratorRuntime is not defined?

Solution
npm install --save regenerator-runtime

require import 'regenerator-runtime/runtime' at the top of the file that you're using async function

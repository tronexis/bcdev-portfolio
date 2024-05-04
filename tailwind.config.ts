import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-100": "rgb(var(--base-100-rgb))",
        "base-200": "rgb(var(--base-200-rgb))",
        "base-300": "rgb(var(--base-300-rgb))"
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.full-container': {
          width: theme('width.full'),
          height: theme('height.full'),
          overflow: 'auto'
        }
      })
    })

  ],
};
export default config;

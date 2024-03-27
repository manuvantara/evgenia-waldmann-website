import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: "1120px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Raleway Variable", fontFamily.sans],
      },
      fontSize: {
        xs: ["12px", "125%"],
        sm: ["14px", "125%"],
      },
      colors: {
        stromboli: {
          50: "hsl(156, 29%, 97%)",
          100: "hsl(155, 35%, 89%)",
          200: "hsl(156, 33%, 78%)",
          300: "hsl(158, 31%, 64%)",
          400: "hsl(159, 26%, 50%)",
          500: "hsl(161, 32%, 40%)",
          600: "hsl(163, 33%, 32%)",
          700: "hsl(163, 31%, 27%)",
          800: "hsl(165, 28%, 22%)",
          900: "hsl(164, 24%, 19%)",
          950: "hsl(166, 33%, 10%)",
        },
        reef: {
          50: "hsl(89, 84%, 95%)",
          100: "hsl(88, 78%, 89%)",
          200: "hsl(90, 77%, 78%)",
          300: "hsl(90, 74%, 67%)",
          400: "hsl(92, 68%, 55%)",
          500: "hsl(92, 70%, 44%)",
          600: "hsl(94, 74%, 35%)",
          700: "hsl(95, 68%, 27%)",
          800: "hsl(95, 60%, 23%)",
          900: "hsl(96, 53%, 20%)",
          950: "hsl(98, 69%, 10%)",
        },
        sun: {
          50: "hsl(48, 100%, 96%)",
          100: "hsl(50, 93%, 89%)",
          200: "hsl(49, 93%, 77%)",
          300: "hsl(48, 93%, 65%)",
          400: "hsl(45, 94%, 56%)",
          500: "hsl(39, 89%, 52%)",
          600: "hsl(33, 92%, 44%)",
          700: "hsl(27, 87%, 37%)",
          800: "hsl(24, 80%, 31%)",
          900: "hsl(23, 75%, 26%)",
          950: "hsl(22, 89%, 14%)",
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
};

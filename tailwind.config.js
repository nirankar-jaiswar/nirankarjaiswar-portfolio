// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            400: "#a78bfa",
            500: "#8b5cf6",
            600: "#7c3aed",
            700: "#6d28d9",
          },
          gray: {
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
          },
        },
        animation: {
          "bounce-slow": "bounce 3s infinite",
        },
        borderRadius: {
          lg: "0.5rem",
          md: "0.375rem",
          sm: "0.25rem",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
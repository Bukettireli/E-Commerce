/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // CRİTİK: Tailwind'in tarayacağı dosyalar
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
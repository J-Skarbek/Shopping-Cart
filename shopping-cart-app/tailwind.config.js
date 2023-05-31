/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage-hero': "url('./src/assets/editorialPhotos/homepage-hero.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}


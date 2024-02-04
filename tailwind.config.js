/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ff00b1",
        
"secondary": "#9a6500",
        
"accent": "#490cff",
        
"neutral": "#130d15",
        
"base-100": "#fcfcfc",
        
"info": "#0086d3",
        
"success": "#009c6c",
        
"warning": "#fcc600",
        
"error": "#f0004a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


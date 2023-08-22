/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
     colors:{
      primary : '#ffffff',
      secondary : '#00FFFF',
      tertiary : '#c4cfde'
     }, 
    extend: {
      screens: {
        'mobile':'400px',
         // => @media (min-width: 640px) { ... }
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}


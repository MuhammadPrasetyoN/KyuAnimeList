/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color:{
          primary: '#eeeeee',
          accent: '#ffc639',
          secondary: '#393e46',
          dark: '#222831',
          highlight: '#ff5722', 
          link: '#007bff',        
          background: '#f7f7f7',
          blue: '#3472f7',
          pink: '#fc51fc',
          darkblue: '#2a31f7',
          text: '#552aa3'
        }
      },
    },
  },
  plugins: [],
};

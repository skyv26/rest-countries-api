/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "element_dark_blue": "hsl(209, 23%, 22%)",
        "bgdark_very_dark_blue": "hsl(207, 26%, 17%)",
        "text_light_very_dark_blue": "hsl(200, 15%, 8%)",
        "input_light_dark_gray": "hsl(0, 0%, 52%)",
        "bglight_very_light_gray": "hsl(0, 0%, 98%)",
      },
      fontWeight: {
        "regular": 300,
        "semibold": 600,
        "extrabold": 800
      },
      fontFamily: {
        'nunito': ["Nunito Sans", "serif"]
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7102ef",
          secondary: "#7ceac4",
          accent: "#2e33ad",
          neutral: "#1D1E25",
          "base-100": "#FFFFFF",
          info: "#6A8DD7",
          success: "#19A388",
          warning: "#F9AF24",
          error: "#FB1326",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

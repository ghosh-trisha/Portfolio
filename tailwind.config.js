/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pl: ["Playwrite Deutschland Grundschrift" , "sans-serif"],
        mg: ["Margarine" , "sans-serif"],
        co: ["Concert One" , "sans-serif"],
        me: ["Merienda" , "sans-serif"],
        sm: ["Sawarabi Mincho" , "sans-serif"],
        ph: ["Patrick Hand" , "sans-serif"],
        po: ["Poetsen One" , "sans-serif"],
        ro: ["Roboto" , "sans-serif"],
        w: ["Wittgenstein" , "sans-serif"]
      },
    },
  },
  plugins: [],
}


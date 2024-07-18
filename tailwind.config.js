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
      textShadow: {
        'custom-light': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'custom-dark': '4px 4px 6px rgba(0, 0, 0, 0.4)',
        'custom-color': '3px 3px 5px rgba(255, 0, 0, 0.3)',
        'c2-purple' : '2px 2px 5px #C07ABE'
      },
      boxShadow: {
        // "c-purple":'0 0 20px #774069',
        "c-purple":'0 0 30px #FFFDD0',
        'c-gray': '-7px 33px 60px 10px #FFFDD0',
        'c2-purple' : '0px 0px 5px 1px #C07ABE',
        'c-img-card-purple': '-3px 10px 60px 10px #C07ABE',
        'c-img-card-purple-hover': '5px 20px 60px 12px #C07ABE',
        'c-img-card': '0 0px 0px 10px #94a3b8',
      },
      dropShadow:{
        "c-purple":'0 0 15px #FFFDD0',
        'c2-purple' : '2px 2px 5px #C07ABE',
      }
    },
  },
  plugins: [],
}


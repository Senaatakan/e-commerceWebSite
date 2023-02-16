/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      backgroundColor: theme => ({
        // 'brand-color' : '#0f52ba'
        'brand-color' : '#8b1a1a'
        //'brand-color' : '#CC3232'

    })

    },
  },
  plugins: [],
}

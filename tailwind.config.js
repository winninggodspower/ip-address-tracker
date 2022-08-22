module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/pattern-bg.png')",
      },
      colors: {
        'v-dark-grey': 'hsl(0, 0%, 17%)',
        'dark-grey': 'hsl(0, 0%, 59%)'
      },
    },
  },
  plugins: [],
}

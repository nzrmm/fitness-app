module.exports = {
  content: ['./index.html', './src/**/*.{vue, js}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          sm: '1rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        rose: '#FB1351',
        green: '#25AB75',
        yellow: '#FFE642',
      },
    },
  },
  plugins: [],
};

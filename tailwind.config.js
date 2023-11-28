/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // All Colors
      colors: {
        primaryColor: '#FAE3B6',
        buttonColor: '#FFD687',
        counterColor: '#FEECC8',
        sellerColor: '#CFA485',
        productPriceColor: '#C4C4C4',

      },
      // All Colors

      // All Containers
      maxWidth: {
        container: '1320px',
      },
      // All Containers

      // All Font Family
      fontFamily: {
        pop: ['Poppins'],
        frank: ['Frank Ruhl Libre'],
        pod: ['Podkova'],
      },
      // All Font Family

      // Z-Index
      zIndex: {
        z_1: '1',
        z_2: '2',
      },
      // Z-Index

    },
  },
  plugins: [],
}


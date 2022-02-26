module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily : {
         primary : ["'Poppins',san-serif"]
      },
      colors : {
        secondary : {
          100 : 'hsl(240, 78%, 98%)',
          200 : 'hsl(234, 14%, 74%)',
          300 : 'hsl(233, 13%, 49%)',
          400 : 'hsl(232, 13%, 33%)',
          500 : 'hsl(237, 63%, 64%)'
        }
       }
    },
  },
  plugins: [],
}
 
// hsl(236, 72%, 79%) to hsl(237, 63%, 64%)

// fontFamily : {
//   primary :["'Barlow', sans-serif"],
//   secondary : ["'Fraunces', serif;"]


// - Family: [Montserrat](https://fonts.google.com/specimen/Montserrat)
// - Weight: 700

// - Mobile: 375px
// - Desktop: 1440px
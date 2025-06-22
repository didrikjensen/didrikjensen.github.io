// // tailwind.config.cjs
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Bytt ut disse hex-kodene med dine egne!
//         'brand-darkest': '#2A3F3F',    // F.eks. for dypeste bakgrunn, footer
//         'brand-dark': '#5A4A3B',       // F.eks. for mørk tekst, overskrifter, mørkere aksenter
//         'brand-medium': '#7A9D89',     // F.eks. for primær/aksentfarge
//         'brand-light': '#B8C9B8',      // F.eks. for sekundær/lysere aksent, lys tekst på mørk bg
//         'brand-lighter': '#C4B090',    // F.eks. for hover-effekter, veldig lyse aksenter
//         'brand-lightest': '#E8E6DB',   // F.eks. for lyseste bakgrunn, hovedtekst på mørk bg
//         'footer-bg': '#354A3E',        // Ny mørkegrønn for footer
//         'footer-text': '#B8C9B8',

//         // Semantiske navn (gjør det enklere å bruke)
//         'bg-dark-section': '#2A3F3F',    // For mørke seksjonsbakgrunner
//         'bg-light-section': '#E8E6DB',   // For lyse seksjonsbakgrunner
//         'text-on-dark': '#E8E6DB',       // Lys tekst for mørke bakgrunner
//         'text-on-light': '#2A3F3F',      // Mørk tekst for lyse bakgrunner
//         'accent': '#7A9D89',             // Hovedaksentfarge
//         'accent-hover': '#B8C9B8',       // Hover for aksentfargen
//       },
//       // ... (dine andre theme.extend-innstillinger som fontFamily)
//     },
//   },
//   plugins: [],
// }

// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
'hero-bg'             : '#0B1C2C',    // Dyp blågrønn
'hero-lines'          : '#5A7F89',    // Støvet isblå

// Nøytrale for mørkt tema
'text-dark-primary'   : '#E5EEF4',    // Myk kald hvit
'text-dark-secondary' : '#CBDAE5',    // Dempet isgrå

// Nøytrale for lyst tema
'bg-light'            : '#F5F9FC',    // Kald off-white
// Alternativt: '#EDF4FA' for mer blåaktig
'text-light-primary'  : '#102027',    // Nesten svart, med hint av blått
'text-light-secondary': '#4D6670',    // Mørk blågrå

'brand-darkest'       : '#132A3B',    // Kullblå
'footer-ultimate-dark': '#0A1A25',    // Nesten svart-blå
'text-on-dark'        : '#E0F0FF',    // Klar, kald hvit
'text-footer'         : '#8FA6B2',    // Lys blågrå

// Aksentfarger
'accent-primary'      : '#5A7F89',    // Gjenspeiler hero-lines
'accent-primary-hover': '#6A9AA7',    // Lysere isblå

'accent-warm'         : '#CC7F6A',    // Dempet kobberrosa
'accent-warm-hover'   : '#D89882',    // Lysere kobberrosa

// UI-elementer
'button-bg'           : '#5A7F89',
'button-text'         : '#FFFFFF',
'button-hover-bg'     : '#6A9AA7',

'border-light'        : '#C8D8E0',
'border-dark'         : '#4D6670',




      },
      fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'], // Brødtekst
      heading: ['Space Grotesk', 'system-ui', 'sans-serif'], // Overskrifter
      mono: ['JetBrains Mono', 'monospace'], // For tech tags
      },
    },
  },
  plugins: [],
}
// PostCSS configuration file
// PostCSS processes CSS and applies plugins (like Tailwind) during the build process
export default {
  plugins: {
    // Tailwind CSS v4 PostCSS plugin: processes Tailwind directives (@tailwind base, etc.)
    // and converts them into actual CSS with utility classes
    '@tailwindcss/postcss': {},
    
    // Autoprefixer plugin: automatically adds vendor prefixes (like -webkit-, -moz-)
    // to CSS properties for better browser compatibility
    // Example: 'transform' becomes '-webkit-transform', '-moz-transform', etc.
    autoprefixer: {},
  },
}


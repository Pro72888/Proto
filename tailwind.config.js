/** @type {import('tailwindcss').Config} */
// Tailwind CSS configuration file
// This file tells Tailwind which files to scan for class names and allows customizing the theme
export default {
  // Content array: specifies which files Tailwind should scan for class names
  // Tailwind only generates CSS for classes it finds in these files (tree-shaking)
  content: [
    "./index.html",              // Scan the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS/TS/JSX/TSX files in src directory and subdirectories
  ],
  
  // Theme configuration: customize Tailwind's default theme
  theme: {
    // Extend: add new utilities without overriding Tailwind's defaults
    extend: {
      // Custom keyframes for animations
      keyframes: {
        // Define a fade-in animation that slides up while fading in
        'fade-in': {
          '0%': {                            // Start of animation (0%)
            opacity: '0',                    // Start invisible
            transform: 'translateY(-10px)',  // Start 10px above final position
          },
          '100%': {                          // End of animation (100%)
            opacity: '1',                    // End fully visible
            transform: 'translateY(0)',      // End at normal position (no translation)
          },
        },
      },
      
      // Custom animations: define how to use the keyframes
      animation: {
        // 'animate-fade-in' class will use the fade-in keyframes
        // Duration: 0.3s, Timing function: ease
        'fade-in': 'fade-in 0.3s ease',
      },
    },
  },
  
  // Plugins: add additional Tailwind functionality
  // Empty array means no additional plugins (we're using base Tailwind only)
  plugins: [],
}


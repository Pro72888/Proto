// Import Vite's configuration function
import { defineConfig } from 'vite'
// Import the React plugin for Vite (enables JSX and React features)
import react from '@vitejs/plugin-react'

// Export the Vite configuration
export default defineConfig({
  // Plugins array: tells Vite to use the React plugin
  // This allows Vite to understand and process .jsx files and React syntax
  plugins: [react()],
})


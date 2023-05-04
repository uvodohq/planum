import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-with-dom': ['react', 'react-dom'],
          'planum-core-framer': ['@uvodohq/planum', 'framer-motion'],
          'planum-phone': ['@uvodohq/planum-phone'],
          'planum-editor': ['@uvodohq/planum-editor'],
        },
      },
    },
  },
})

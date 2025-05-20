import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  css: {
    preprocessorOptions: {
      // optional if you're using SCSS too
    },
  },
  build: {
    lib: {
      entry: './src/components/index.ts',
      name: 'mb-react-ui-kit',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  }
})

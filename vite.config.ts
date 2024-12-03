import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const tanStackOpts = {
  routesDirectory: './client/routes',
  generatedRouteTree: './client/routeTree.gen.ts'
} as const

export default defineConfig({
  root: './client',
  plugins: [
    TanStackRouterVite(tanStackOpts),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client'),
    }
  },
  server: {
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1')
      }
    }
  }
})
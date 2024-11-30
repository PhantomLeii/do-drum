import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: './client',
  plugins: [
    TanStackRouterVite({ routesDirectory: './client/routes', generatedRouteTree: './client/routeTree.gen.ts' }),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client'),
    }
  },
  server: {
    port: 5000,
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      manifest: {
        name: "School books",
        short_name: "Books",
        icons: [
          {
            src: '/favicon-512.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        start_url: "/",
        display: "standalone",
        theme_color: "#e5d3b8",
        background_color: "#ffebcd"
      }
    })
  ],

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5555",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})

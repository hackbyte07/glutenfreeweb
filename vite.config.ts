import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
 
 
const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.png"],
  manifest: {
    name: "Glutenfree Jio",
    short_name: "Glutenfree Jio",
    description: "An app where you can find gluten free food Restaurants & Grocery Stores.",
    icons: [{
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180", type: "image/png",
      purpose: "apple touch icon"
    },
    {
      src: "/masked-icon.png",
      sizes: "225x225", type: "image/png",
      purpose: "any maskable"
    }],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait"
  }
};
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
})
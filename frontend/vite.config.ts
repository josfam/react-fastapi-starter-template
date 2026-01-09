import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate chunk for react-icons
        //   "react-icons": ["react-icons/fa", "react-icons/fa6"], // uncomment if react-icons is used
          // Separate chunk for motion
        //   motion: ["motion/react"], // uncomment for motion library if used
        },
      },
    },
  },
  // @ts-ignore - vitest 'test' config merged into Vite config causes type mismatch
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

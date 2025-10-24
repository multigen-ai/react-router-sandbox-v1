import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: true, // Disable HMR for E2B preview URLs
    cors: {
      origin: '*',
      credentials: false
    },
  },
  plugins: [react(), tailwindcss() as any], // eslint-disable-line @typescript-eslint/no-explicit-any
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

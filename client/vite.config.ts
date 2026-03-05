import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: true,
    cors: {
      origin: "*",
      credentials: false,
    },
    proxy: {
      "/api": {
        target: "http://localhost:8787",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    tailwindcss() as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    reactRouter(),
    tsconfigPaths(),
  ],
});

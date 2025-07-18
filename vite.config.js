import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@tabler/icons-react":
        "@tabler/icons-react/dist/cjs/tabler-icons-react.cjs",
    },
  },
});

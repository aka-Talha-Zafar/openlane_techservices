import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => ({
  plugins: [
    tsConfigPaths(),
    tanstackStart({ customViteReactPlugin: true }),
    viteReact(),
    tailwindcss(),
  ],
  define: {
    "import.meta.env.MODE": JSON.stringify(mode),
  },
}));

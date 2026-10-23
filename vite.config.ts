import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig(({ mode }) => ({
  plugins: [
    tsConfigPaths(),
    tanstackStart({ customViteReactPlugin: true }),
    nitro(),
    viteReact(),
    tailwindcss(),
  ],
  define: {
    "import.meta.env.MODE": JSON.stringify(mode),
  },
}));
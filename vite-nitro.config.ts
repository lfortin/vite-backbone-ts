// vite-nitro.config.ts
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [nitro()],
  nitro: {
    serverDir: "./server",
    renderer: {
      template: "./index-basic.html", // Path to HTML template file
    },
  },
  build: {
    rolldownOptions: {
      input: {
        main: "index-basic.html",
      },
    },
  },
  server: {
    open: "/index-basic.html",
  },
});

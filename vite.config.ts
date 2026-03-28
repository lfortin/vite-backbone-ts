// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  // Optional: Silence Sass deprecation warnings.
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "color-functions",
          "global-builtin",
          "legacy-js-api",
          "if-function",
        ],
      },
    },
  },
});

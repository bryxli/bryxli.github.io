import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), vue()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "lcov"],
      exclude: [
        "**/astro.config.mjs",
        "**/vitest.config.ts",
        "**/.prettierrc.mjs",
        "**/*.test.*",
        "**/.astro/*",
        "**/dist/*",
      ],
    },
  },
});

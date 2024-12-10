import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), vue()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});

// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://bryxli.github.io",
  integrations: [
    react({
      include: ["**/Projects/*", "**/Navigation/Options.tsx"],
    }),
    vue({
      include: ["**/Summary/*"],
    }),
  ],
});

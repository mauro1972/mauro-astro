import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import icon from "astro-icon";

const LIVE_URL = "https://mauro-astro.github.io";

if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  base: 'mauro1972',
  integrations: [react(), icon()],
});
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  site: 'https://mauro-astro.github.io',
  base: 'mauro1972',
  integrations: [react(), icon()],
});
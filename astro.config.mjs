import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import icon from "astro-icon";



// https://astro.build/config
export default defineConfig({
  site: 'https://mauro1972.github.io',
  base: 'mauro-astro',
  integrations: [react(), icon()],
});
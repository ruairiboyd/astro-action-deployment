import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https:ruairiboyd.github.io',
  // base: 'astro-action-deployment',
  devToolbar: {
    enabled: true,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

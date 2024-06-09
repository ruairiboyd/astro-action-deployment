import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https:ruairiboyd.github.io',
  devToolbar: {
    enabled: true,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

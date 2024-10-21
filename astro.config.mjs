// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import solidJs from '@astrojs/solid-js';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ['./src/pages/react/*']
    }), 
    solidJs({
      include: ['**/solid/*']
    }),
  ],

  output: 'server',
  adapter: netlify()
});
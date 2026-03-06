import { defineConfig } from '@rspress/core';

const base = process.env.RS_PRESS_BASE || '/';

export default defineConfig({
  root: 'docs',
  base: base,
  title: 'MixMaster WECS User Manual',
  // Ensure assets load correctly in production
  builderConfig: {
    output: {
      assetPrefix: base,
    },
  },
});

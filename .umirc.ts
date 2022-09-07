import { defineConfig } from 'dumi';
let base = '/indigo-ui';
let publicPath = '/indigo-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}
export default defineConfig({
  title: 'Indigo UI',
  logo: '/logo.png',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {},
  dynamicImport: {},
  base,
  publicPath,
  alias: {
    demoUtiles: '/src/demoUtils/index.ts',
  },
});

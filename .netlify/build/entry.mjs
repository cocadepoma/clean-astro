import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_MYbdhd5U.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/astro/astroisland.astro.mjs');
const _page2 = () => import('./pages/components/devesericon.astro.mjs');
const _page3 = () => import('./pages/components/githubicon.astro.mjs');
const _page4 = () => import('./pages/react/useframeworks.astro.mjs');
const _page5 = () => import('./pages/solid/useframeworks.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.15.12_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/astro/AstroIsland.astro", _page1],
    ["src/pages/components/DeveserIcon.astro", _page2],
    ["src/pages/components/GithubIcon.astro", _page3],
    ["src/pages/react/useFrameworks.ts", _page4],
    ["src/pages/solid/useFrameworks.ts", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0d4ec61d-ca2f-4d18-8e6a-84af2a55915d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

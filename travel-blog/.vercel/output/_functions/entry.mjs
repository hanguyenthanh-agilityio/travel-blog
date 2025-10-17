import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DjhJmu5f.mjs';
import { manifest } from './manifest_C9sjbyPY.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/500.astro.mjs');
const _page3 = () => import('./pages/page/_page_.astro.mjs');
const _page4 = () => import('./pages/posts/_slug_.astro.mjs');
const _page5 = () => import('./pages/studio/_---params_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.14.1_@types+node@24_b12484c446aa570f8cb7357444c56f3e/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/page/[page].astro", _page3],
    ["src/pages/posts/[slug].astro", _page4],
    ["node_modules/.pnpm/@sanity+astro@3.2.10_@emoti_b57eef43aa57def63c846d4cb7196727/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "d979a73d-79e6-48f6-9362-f0ebe92e2a4c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

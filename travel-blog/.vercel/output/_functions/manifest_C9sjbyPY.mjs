import { z as decodeKey } from './chunks/astro/server_CmCT4y3S.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_E0p0mgI3.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_Ba7Myv54.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Ha%20Nguyen%20Thanh/astro-training/travel-blog/","cacheDir":"file:///C:/Users/Ha%20Nguyen%20Thanh/astro-training/travel-blog/node_modules/.astro/","outDir":"file:///C:/Users/Ha%20Nguyen%20Thanh/astro-training/travel-blog/dist/","srcDir":"file:///C:/Users/Ha%20Nguyen%20Thanh/astro-training/travel-blog/src/","publicDir":"file:///C:/Users/Ha%20Nguyen%20Thanh/astro-training/travel-blog/public/","buildClientDir":"file:///C:/Users/Ha%20Nguyen%20Thanh/astro-training/travel-blog/dist/client/","buildServerDir":"file:///C:/Users/Ha%20Nguyen%20Thanh/astro-training/travel-blog/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"500.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/500","isIndex":false,"type":"page","pattern":"^\\/500\\/?$","segments":[[{"content":"500","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/500.astro","pathname":"/500","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.14.1_@types+node@24_b12484c446aa570f8cb7357444c56f3e/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@sanity+astro@3.2.10_@emoti_b57eef43aa57def63c846d4cb7196727/node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/@sanity+astro@3.2.10_@emoti_b57eef43aa57def63c846d4cb7196727/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/src/lib/api.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/src/lib/getPage.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/src/pages/page/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/page/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/src/lib/schema.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/src/pages/500.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/500@_@astro":"pages/500.astro.mjs","\u0000@astro-page:src/pages/page/[page]@_@astro":"pages/page/_page_.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"pages/posts/_slug_.astro.mjs","\u0000@astro-page:node_modules/.pnpm/@sanity+astro@3.2.10_@emoti_b57eef43aa57def63c846d4cb7196727/node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.14.1_@types+node@24_b12484c446aa570f8cb7357444c56f3e/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C9sjbyPY.mjs","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/astro@5.14.1_@types+node@24_b12484c446aa570f8cb7357444c56f3e/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DcOQl0O8.mjs","@/components":"_astro/components.DLVe-E1E.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/@sanity+astro@3.2.10_@emoti_b57eef43aa57def63c846d4cb7196727/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component":"_astro/visual-editing-component.Bt8-WMHv.js","@astrojs/react/client.js":"_astro/client.D9sFpin_.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/@sanity+client@7.12.0_debug@4.4.3/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.CBoVioaZ.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.DDHUSZP4.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/VideoPlayer.mjs":"_astro/VideoPlayer.BbMilBVD.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.Bka5hLcr.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.DlFK5D9G.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.D-Kn86Ip.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.BDLK0gHf.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.CmVzcViy.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/@sanity+ui@3.1.8_@emotion+i_98ff70327e908d7a7d2ab25cd91e19ab/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.DJkCF3Yy.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.B5VDelzx.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.CbfROzCN.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.9m6fOllc.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/resources7.mjs":"_astro/resources7.BYBeJXDT.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/PresentationToolGrantsCheck.mjs":"_astro/PresentationToolGrantsCheck.D0AotI6T.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/BroadcastDisplayedDocument.mjs":"_astro/BroadcastDisplayedDocument.B4F-UCKe.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.CbxR9jnG.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/@sanity+ui@2.16.19_@emotion_97184d113d13a83f15b56afa9478d9ba/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.LdMLxbr_.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/QRCodeSVG.mjs":"_astro/QRCodeSVG.7gcFEq4g.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/LiveQueries.mjs":"_astro/LiveQueries.IR_cWW3b.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/PostMessageDocuments.mjs":"_astro/PostMessageDocuments.BKv4ZCYD.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/PostMessageRefreshMutations.mjs":"_astro/PostMessageRefreshMutations.CN3Qe2Ui.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/PostMessagePerspective.mjs":"_astro/PostMessagePerspective.CFfbO-_h.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/PostMessagePreviewSnapshots.mjs":"_astro/PostMessagePreviewSnapshots.FEC5bfpM.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/PostMessageSchema.mjs":"_astro/PostMessageSchema.20AwUczl.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/sanity@4.10.3_@emotion+is-p_bed42fbaaf432c9cf826450ef9b0664f/node_modules/sanity/lib/_chunks-es/PostMessageTelemetry.mjs":"_astro/PostMessageTelemetry.0ZPNpzIX.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/urlpattern-polyfill@10.1.0/node_modules/urlpattern-polyfill/index.js":"_astro/index.DPyTNidZ.js","C:/Users/Ha Nguyen Thanh/astro-training/travel-blog/node_modules/.pnpm/@sanity+astro@3.2.10_@emoti_b57eef43aa57def63c846d4cb7196727/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.BOMqR78D.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.BLJSg7IT.css","/images/avatar-blog-1.png","/images/avatar-blog-2.png","/images/avatar-blog-3.png","/images/avatar-blog-4.png","/images/hero.png","/images/popular-1.png","/images/popular-2.png","/images/popular-3.png","/_astro/BroadcastDisplayedDocument.B4F-UCKe.js","/_astro/browser.BajyODzd.js","/_astro/client.BMICfAkD.js","/_astro/client.D9sFpin_.js","/_astro/components.DLVe-E1E.js","/_astro/DisplayedDocumentBroadcaster.SFDdrG54.js","/_astro/image-url.umd.BpNVRCYq.js","/_astro/index.B5VDelzx.js","/_astro/index.Cwn4fzbm.js","/_astro/index.DJcCCx0C.js","/_astro/index.DPyTNidZ.js","/_astro/index.DV2x8fOk.js","/_astro/index2.CbfROzCN.js","/_astro/index3.9m6fOllc.js","/_astro/LiveQueries.IR_cWW3b.js","/_astro/PostMessageDocuments.BKv4ZCYD.js","/_astro/PostMessagePerspective.CFfbO-_h.js","/_astro/PostMessagePreviewSnapshots.FEC5bfpM.js","/_astro/PostMessageRefreshMutations.CN3Qe2Ui.js","/_astro/PostMessageSchema.20AwUczl.js","/_astro/PostMessageTelemetry.0ZPNpzIX.js","/_astro/PresentationToolGrantsCheck.D0AotI6T.js","/_astro/QRCodeSVG.7gcFEq4g.js","/_astro/refractor.DJkCF3Yy.js","/_astro/refractor.LdMLxbr_.js","/_astro/resolveEditInfo.BJL1erkC.js","/_astro/resources.DlFK5D9G.js","/_astro/resources2.DDHUSZP4.js","/_astro/resources3.BDLK0gHf.js","/_astro/resources4.Bka5hLcr.js","/_astro/resources5.D-Kn86Ip.js","/_astro/resources6.CbxR9jnG.js","/_astro/resources7.BYBeJXDT.js","/_astro/stegaEncodeSourceMap.CBoVioaZ.js","/_astro/studio-component.BEIcFNKl.js","/_astro/studio-component.BOMqR78D.js","/_astro/VideoPlayer.BbMilBVD.js","/_astro/visual-editing-component.Bt8-WMHv.js","/_astro/ViteDevServerStopped.CmVzcViy.js","/404.html","/500.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"xBC7bvJsasU/976u+XTBuAvHQlgi8hQ2mw6OvWaUzYw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

import { d as defineMiddleware, s as sequence } from './chunks/index_Cmzj2QDw.mjs';
import './chunks/astro-designed-error-pages_E0p0mgI3.mjs';
import './chunks/astro/server_CmCT4y3S.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async ({ request, locals }, next) => {
  const { pathname } = new globalThis.URL(request.url);
  locals.seo = {
    title: "Travel Blog - Explore the World",
    description: "Discover travel tips, destination guides, and personal experiences.",
    url: `https://yourtravelblog.com${pathname}`,
    image: "https://yourtravelblog.com/images/seo-image.jpg",
    noindex: false
  };
  const response = await next();
  if (locals.seo.noindex === false) {
    response.headers.delete("x-robots-tag");
    response.headers.set("x-robots-tag", "index, follow");
  }
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };

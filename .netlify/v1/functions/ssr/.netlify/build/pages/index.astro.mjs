import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, e as renderComponent, b as createAstro } from '../chunks/astro/server_DinCn3nI.mjs';
import { $ as $$AstroIsland } from '../chunks/AstroIsland_C4ZO7hId.mjs';
import { $ as $$GithubIcon } from '../chunks/GithubIcon_Bk82gCxt.mjs';
import { $ as $$DeveserIcon } from '../chunks/DeveserIcon_DtTFPwHe.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body class="custom-scroll"> <main> ${renderComponent($$result, "DeveserIcon", $$DeveserIcon, {})} ${renderComponent($$result, "GithubIcon", $$GithubIcon, {})} <div class="header-description"> <h1><span>Clean</span> Astro</h1> <p>
Welcome to the clean Astro project!
<br>
This project is a simple example of how to use Astro with different client-side
<br>
frameworks using Clean Architecture principles and Custom Hooks as a UI
					pattern.
</p> </div> <div class="islands__container"> ${renderComponent($$result, "AstroIsland", $$AstroIsland, {})} ${renderComponent($$result, "ReactIsland", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/paco/Desktop/clean-astro/src/pages/react/ReactIsland", "client:component-export": "ReactIsland" })} ${renderComponent($$result, "SolidIsland", null, { "client:only": "solid-js", "client:component-hydration": "only", "client:component-path": "/Users/paco/Desktop/clean-astro/src/pages/solid/SolidIsland", "client:component-export": "SolidIsland" })} </div> </main> </body></html>`;
}, "/Users/paco/Desktop/clean-astro/src/pages/index.astro", void 0);

const $$file = "/Users/paco/Desktop/clean-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

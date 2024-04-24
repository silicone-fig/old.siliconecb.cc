import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1pumno8.svelte-1pumno8{max-width:900px;padding:0;display:flex;justify-content:center}main.svelte-1pumno8.svelte-1pumno8{max-width:100%;min-height:500px;text-align:left;margin:0 auto;box-sizing:border-box}h1.svelte-1pumno8.svelte-1pumno8{font-weight:700;margin:0 0 50px 0;font-size:36px;text-align:start}@media(min-width: 900px){main.svelte-1pumno8>h1.svelte-1pumno8{font-size:48px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-9befzm_START -->${$$result.title = `<title>siliconeCB | about me</title>`, ""}<!-- HEAD_svelte-9befzm_END -->`, ""} <div class="container svelte-1pumno8" data-svelte-h="svelte-dgcm3f"><main class="svelte-1pumno8"><h1 class="svelte-1pumno8">about me</h1> <p>Heyo! I&#39;m siliconeCB_, an amateur web developer with just under 2 years of experience! 
			I got into programming through Scratch in elementary school, and my life has never been the same! 
			My favorite programming language is Svelte, which is the framework running the website you&#39;re looking at right now!
			<br> <br>
			I also enjoy playing around with graphics and VFX in Adobe Photoshop and After Effects! 😃</p></main> </div>`;
});
export {
  Page as default
};

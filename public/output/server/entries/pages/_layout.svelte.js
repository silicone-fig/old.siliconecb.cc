import { c as create_ssr_component, e as escape, n as null_to_empty, v as validate_component, a as each, b as add_attribute, g as getContext, d as subscribe } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const Hamburger_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-15fktif.svelte-15fktif{min-height:24px;transition:transform 0.3s ease-in-out}svg.svelte-15fktif line.svelte-15fktif{stroke:currentColor;stroke-width:3;transition:transform 0.3s ease-in-out}button.svelte-15fktif.svelte-15fktif{color:white;background:transparent;border:transparent;display:flex;justify-content:center;align-items:center;z-index:20}.open.svelte-15fktif svg.svelte-15fktif{transform:scale(0.7)}.open.svelte-15fktif #top.svelte-15fktif{transform:translate(6px, 0px) rotate(45deg)}.open.svelte-15fktif #middle.svelte-15fktif{stroke-dasharray:0;stroke-dashoffset:0;animation:svelte-15fktif-fade 1s ease-in alternate forwards}@keyframes svelte-15fktif-fade{to{stroke-dashoffset:1000;stroke-dasharray:1000}}.open.svelte-15fktif #bottom.svelte-15fktif{transform:translate(-12px, 9px) rotate(-45deg)}",
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$2);
  return `<button aria-label="menu-burger-button" class="${[
    "text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none svelte-15fktif",
    open ? "open" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1x3lald"><svg width="32" height="24" class="svelte-15fktif"><line id="top" x1="0" y1="2" x2="32" y2="2" class="svelte-15fktif"></line><line id="middle" x1="0" y1="12" x2="32" y2="12" class="svelte-15fktif"></line><line id="bottom" x1="0" y1="22" x2="32" y2="22" class="svelte-15fktif"></line></svg> </button>`;
});
const routes = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/projects",
    label: "Projects"
  },
  {
    href: "/about",
    label: "About"
  }
];
const NavBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".logo{cursor:pointer;height:30px;width:30px}.open.svelte-7ld2s1.svelte-7ld2s1{flex-direction:column !important;align-items:center !important;height:330px !important;transition:height 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955)}.selected.svelte-7ld2s1.svelte-7ld2s1{position:relative;color:white}.button.svelte-7ld2s1.svelte-7ld2s1:hover::after{content:'';background:#25ca85;display:block;height:3px;width:100%;position:absolute;bottom:0}.button.selected.svelte-7ld2s1.svelte-7ld2s1:after{content:'';background:#25ca85;display:block;height:3px;width:100%;position:absolute;bottom:0}.innerContainer.svelte-7ld2s1.svelte-7ld2s1{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:900px;box-sizing:border-box}.innerContainer.svelte-7ld2s1 a{height:30px;color:white}.NavBar.svelte-7ld2s1.svelte-7ld2s1{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:100%;max-width:900px;box-sizing:border-box;padding:20px;height:80px;overflow:hidden;transition:height 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955)}.buttons.svelte-7ld2s1.svelte-7ld2s1{display:none;justify-content:space-between;align-items:center;font-weight:500}.responsiveButtons.svelte-7ld2s1.svelte-7ld2s1{margin-top:20px;width:100%;display:flex !important;flex-direction:column}.responsiveButtons.svelte-7ld2s1 .button.svelte-7ld2s1{max-width:100px;width:100%;text-align:center}.buttons.svelte-7ld2s1 .button.svelte-7ld2s1{padding:0;cursor:pointer;transition:color 0.2s ease-in-out;text-decoration:none;position:relative;margin:10px;color:hsla(0, 0%, 100%, 0.4)}.button.selected.svelte-7ld2s1.svelte-7ld2s1{color:white}.burger.svelte-7ld2s1 button{margin:0}@media(min-width: 900px){.NavBar.svelte-7ld2s1.svelte-7ld2s1{padding:20px 0;display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:900px;margin:0 auto}.buttons.svelte-7ld2s1.svelte-7ld2s1{display:flex}.NavBar.svelte-7ld2s1 .burger.svelte-7ld2s1{display:none !important}.responsiveButtons.svelte-7ld2s1.svelte-7ld2s1{display:none !important}}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let opened = false;
  let { segment } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${escape(null_to_empty(opened ? "NavBar open" : "NavBar"), true) + " svelte-7ld2s1"}"><div class="innerContainer svelte-7ld2s1"><a href="/" data-svelte-h="svelte-bckzye"><img src="https://u.cubeupload.com/siliconefig/picture2.png" alt="logo" class="logo"></a> <div class="burger svelte-7ld2s1">${validate_component(Hamburger, "Burger").$$render(
      $$result,
      { open: opened },
      {
        open: ($$value) => {
          opened = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="buttons svelte-7ld2s1">${each(routes, (route) => {
      return `<a class="${escape(null_to_empty(`button ${segment === route.href ? "selected" : ""}`), true) + " svelte-7ld2s1"}"${add_attribute("href", route.href, 0)}>${escape(route.label)}</a>`;
    })}</div></div> <div class="responsiveButtons buttons svelte-7ld2s1">${each(routes, (route) => {
      return `<a class="${escape(null_to_empty(`button ${segment === route.href ? "selected" : ""}`), true) + " svelte-7ld2s1"}"${add_attribute("href", route.href, 0)}>${escape(route.label)}</a>`;
    })}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const Button_svelte_svelte_type_style_lang = "";
const Tooltip_svelte_svelte_type_style_lang = "";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const customBackground = writable("#0a0908");
const Modal_svelte_svelte_type_style_lang = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-110qx6k.svelte-110qx6k.svelte-110qx6k{box-sizing:border-box}@font-face{font-family:'Fira Code', monospace;font-display:optional;src:url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap')}#svelte{width:100vw;height:100%;max-width:900px;display:flex;flex-direction:column;justify-content:space-between}html,body{transition:background-color 0.2s ease 0s;position:relative;width:100%;height:100%;overflow:auto;font-family:'Fira Code', monospace;background-color:#0a0908}body{background-color:#161f1d;background-size:200% 200%;color:white;margin:0;box-sizing:border-box;display:grid;line-height:1.75;place-items:center;height:100%;overflow-x:hidden}h1{border:0}::selection{color:white;background:#155a49}::-webkit-scrollbar{width:8px;height:8px;border-radius:1px}::-webkit-scrollbar-thumb{background-color:#fafffd;border-radius:3px}::-webkit-scrollbar-track{background-color:transparent;border-radius:1px}@media(min-width: 900px){body{padding:0 100px}}a{text-decoration:none}a{text-decoration:none}a.svelte-110qx6k.svelte-110qx6k.svelte-110qx6k{color:rgb(0, 100, 200);text-decoration:none}a.svelte-110qx6k.svelte-110qx6k.svelte-110qx6k:hover{text-decoration:underline}a.svelte-110qx6k.svelte-110qx6k.svelte-110qx6k:visited{color:rgb(0, 80, 160)}.tooltip{visibility:hidden}.cookieContainer.svelte-110qx6k.svelte-110qx6k.svelte-110qx6k{background:white;border-radius:0px;text-align:center;width:100%;height:30px;color:black;padding:30px;display:flex;justify-content:space-evenly;align-items:center;position:fixed;bottom:0px;left:0;right:0;margin-left:auto;margin-right:auto}.cookieContainer.svelte-110qx6k>p.svelte-110qx6k>a.svelte-110qx6k{text-decoration:underline}.cookieContainer.svelte-110qx6k>div.svelte-110qx6k.svelte-110qx6k{cursor:pointer}footer.svelte-110qx6k.svelte-110qx6k.svelte-110qx6k{font-size:16px;font-weight:400;padding:30px 0;max-width:900px;text-align:center;width:100%}@media(min-width: 900px){.tooltip{visibility:visible}}@media(min-width: 600px){.cookieContainer.svelte-110qx6k.svelte-110qx6k.svelte-110qx6k{background:white;border-radius:50px;text-align:center;width:350px;height:30px;color:black;padding:0 10px;display:flex;justify-content:space-evenly;align-items:center;position:fixed;bottom:50px;left:0;right:0;margin-left:auto;margin-right:auto}}",
  map: null
};
const cookieEnabled = false;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showCookieModal;
  let $$unsubscribe_customBackground;
  let $page, $$unsubscribe_page;
  $$unsubscribe_customBackground = subscribe(customBackground, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  showCookieModal = false;
  $$unsubscribe_customBackground();
  $$unsubscribe_page();
  return ` ${showCookieModal && cookieEnabled ? `<div class="cookieContainer svelte-110qx6k"><p class="svelte-110qx6k" data-svelte-h="svelte-1iwts5v">🍪 This website use <a href="privacy-policy" class="svelte-110qx6k">Cookies.</a></p> <div role="button" tabindex="0" class="svelte-110qx6k" data-svelte-h="svelte-1bl8vgs">✕</div></div>` : ``} ${validate_component(NavBar, "Navbar").$$render($$result, { segment: $page.url.pathname }, {}, {})} ${slots.default ? slots.default({}) : ``} <footer class="svelte-110qx6k" data-svelte-h="svelte-1m4le4p"></footer>`;
});
export {
  Layout as default
};

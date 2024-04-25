import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.b2994995.js","_app/immutable/chunks/_page.10169d5a.js","_app/immutable/chunks/scheduler.90005f0d.js","_app/immutable/chunks/index.e2c8f373.js"];
export const stylesheets = ["_app/immutable/assets/_page.abb6e0eb.css"];
export const fonts = [];

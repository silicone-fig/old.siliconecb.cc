import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.7b7ce7f3.js","_app/immutable/chunks/scheduler.1f0dc6aa.js","_app/immutable/chunks/index.bb59f2b9.js"];
export const stylesheets = ["_app/immutable/assets/2.abb6e0eb.css"];
export const fonts = [];

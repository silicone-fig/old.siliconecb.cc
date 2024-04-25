

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/chunks/3.c9b95dd0.js","_app/immutable/chunks/_page.61e902ca.js","_app/immutable/chunks/scheduler.90005f0d.js","_app/immutable/chunks/index.e2c8f373.js"];
export const stylesheets = ["_app/immutable/assets/_page.1522b520.css"];
export const fonts = [];

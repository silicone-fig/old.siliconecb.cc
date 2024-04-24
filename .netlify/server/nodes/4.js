

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.6c96e4c8.js","_app/immutable/chunks/scheduler.1f0dc6aa.js","_app/immutable/chunks/index.bb59f2b9.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/4.fba459d4.css"];
export const fonts = [];

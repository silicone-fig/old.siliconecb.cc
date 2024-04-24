

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.133f4465.js","_app/immutable/chunks/scheduler.1f0dc6aa.js","_app/immutable/chunks/index.bb59f2b9.js"];
export const stylesheets = ["_app/immutable/assets/3.1522b520.css"];
export const fonts = [];

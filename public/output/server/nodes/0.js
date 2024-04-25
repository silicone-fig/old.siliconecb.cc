

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b1c24725.js","_app/immutable/chunks/_layout.f4ea058c.js","_app/immutable/chunks/scheduler.90005f0d.js","_app/immutable/chunks/index.e2c8f373.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/singletons.29f3ec48.js"];
export const stylesheets = ["_app/immutable/assets/_layout.4d71af63.css"];
export const fonts = [];

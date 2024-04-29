

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.27b3174b.js","_app/immutable/chunks/_error.9d84aaed.js","_app/immutable/chunks/scheduler.90005f0d.js","_app/immutable/chunks/index.e2c8f373.js"];
export const stylesheets = ["_app/immutable/assets/_error.940faa8f.css"];
export const fonts = [];

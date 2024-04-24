

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1b6656e5.js","_app/immutable/chunks/scheduler.1f0dc6aa.js","_app/immutable/chunks/index.bb59f2b9.js"];
export const stylesheets = ["_app/immutable/assets/1.940faa8f.css"];
export const fonts = [];

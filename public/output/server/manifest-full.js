export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","logo.svg","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.fd628934.js","app":"_app/immutable/entry/app.9b010da2.js","imports":["_app/immutable/entry/start.fd628934.js","_app/immutable/chunks/scheduler.90005f0d.js","_app/immutable/chunks/singletons.29f3ec48.js","_app/immutable/entry/app.9b010da2.js","_app/immutable/chunks/scheduler.90005f0d.js","_app/immutable/chunks/index.e2c8f373.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

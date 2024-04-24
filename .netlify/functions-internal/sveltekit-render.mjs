import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {"start":"_app/immutable/entry/start.b9fe2c40.js","app":"_app/immutable/entry/app.b06e20cd.js","imports":["_app/immutable/entry/start.b9fe2c40.js","_app/immutable/chunks/scheduler.1f0dc6aa.js","_app/immutable/chunks/singletons.3aec167c.js","_app/immutable/entry/app.b06e20cd.js","_app/immutable/chunks/scheduler.1f0dc6aa.js","_app/immutable/chunks/index.bb59f2b9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js'))
		],
		routes: [
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());

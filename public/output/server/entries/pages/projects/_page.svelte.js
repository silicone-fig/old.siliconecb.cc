import { c as create_ssr_component, a as each, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
const projects = [
  {
    title: "KlydeOPT",
    description: "KlydeOPT, a spin-off of the AI chatbot Discord killed! Closed-source for now unfortunately.",
    url: "https://github.com/silicone-fig/KlydeOPT"
  }
  /**
  {
  	title: 'GDLauncher',
  	technologies: ['Node', 'React', 'Redux', 'Electron'],
  	description:
  		'GDLauncher is a simple, yet powerful Minecraft custom launcher with a strong focus on the user experience',
  	url: 'https://github.com/gorilla-devs/GDLauncher'
  },
  {
  	title: 'WiseMan Discord Bot',
  	technologies: ['NodeJs', 'FireBase', 'MongoDb', 'golang'],
  	description:
  		'The wiseMan bot allows you to level up based on the time you spend in a vocal channel',
  	url: 'https://github.com/Ladvace/WiseMan-DiscordBot'
  },
  {
  	title: 'Easy-react-carousel',
  	technologies: ['React', 'NodeJs'],
  	description: 'A simple carousel made in reactjs',
  	url: 'https://github.com/Ladvace/easy-react-carousel'
  }
  */
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projectContainer.svelte-111tiha.svelte-111tiha{width:100%;max-width:900px;display:flex;justify-content:center;box-sizing:border-box;text-align:center;padding:1em;margin:0 auto;text-align:center}a.svelte-111tiha.svelte-111tiha{text-decoration:none}.projectContainer.svelte-111tiha .projects.svelte-111tiha{display:grid;grid-template-columns:1fr;grid-gap:40px;margin-top:30px}h1.svelte-111tiha.svelte-111tiha{font-weight:700;text-align:start}h2.svelte-111tiha.svelte-111tiha{display:flex;margin:0}.project.svelte-111tiha.svelte-111tiha{text-align:start;box-sizing:border-box;display:flex;flex-direction:column;color:white;background:#27302a;padding:2rem;width:100%;border-radius:5px;transition:transform 0.2s ease-in-out;border-radius:25px}.project.svelte-111tiha p.svelte-111tiha{font-weight:100;color:#c2f3eb}.projects.svelte-111tiha.svelte-111tiha{width:100%;margin:50px auto;display:grid;grid-gap:1rem;grid-template-columns:1fr;margin-bottom:10px}.button.svelte-111tiha.svelte-111tiha{display:flex;justify-content:center;align-items:center;color:white;border:2px solid white;padding:10px}@media(min-width: 900px){.projectContainer.svelte-111tiha.svelte-111tiha{padding:0}.projects.svelte-111tiha>h1.svelte-111tiha{font-size:48px;margin:50px 0 0 0}.projects.svelte-111tiha.svelte-111tiha{grid-template-columns:1fr}.projects.svelte-111tiha .project.svelte-111tiha{min-height:200px}.button.svelte-111tiha.svelte-111tiha{max-width:200px}}@media(min-width: 600px){.projects.svelte-111tiha.svelte-111tiha{grid-template-columns:1fr}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1rhj9bb_START -->${$$result.title = `<title>siliconeCB | projects</title>`, ""}<!-- HEAD_svelte-1rhj9bb_END -->`, ""} <div class="projectContainer svelte-111tiha"><div class="projects svelte-111tiha"><h1 class="svelte-111tiha" data-svelte-h="svelte-13mv3ni">projects</h1> ${each(projects, (project) => {
    return `<div class="project svelte-111tiha"><div class="header"><h2 class="svelte-111tiha">${escape(project.title)} </h2></div> <p class="svelte-111tiha">${escape(project.description)}</p> <a${add_attribute("href", project.url, 0)} target="_blank" rel="noreferrer" class="svelte-111tiha"><div class="button svelte-111tiha" data-svelte-h="svelte-1iiiyaa">Github Page =&gt;</div></a> </div>`;
  })}</div> </div>`;
});
export {
  Page as default
};

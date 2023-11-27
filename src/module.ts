import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
	baseClassName: string;
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "my-module",
		configKey: "myModule",
	},
	// Default configuration options of the Nuxt module
	setup(options, nuxt) {
		const aos_options = {
			baseClassName: options.baseClassName || "animate__animated",
		};
		nuxt.options.runtimeConfig.public.$aos = aos_options;
		const resolver = createResolver(import.meta.url);

		// Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
		addPlugin(resolver.resolve("./runtime/plugin"));
	},
});

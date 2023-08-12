import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import sveltePreprocess from "svelte-preprocess";
export default defineConfig({
	plugins: [sveltekit({})],
	svelte: {
		preprocess: sveltePreprocess({
			scss: {
				prependData: "@import './src/scss/main.scss'",
			},
			postcss: true,
		}),
	},
});

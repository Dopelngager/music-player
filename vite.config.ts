import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import observerPlugin from "mobx-react-observer/babel-plugin";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	base: "/music-player/",
	plugins: [
		react({
			babel: {
				plugins: [
					observerPlugin(
						// optional
						{ exclude: ["src/ui-components/**"] }
					)
				]
			}
		}),
		tailwindcss()
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	}
});

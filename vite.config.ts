import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		tailwindcss(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico', 'robots.txt'],
			manifest: {
				name: 'Accueil MMI',
				short_name: 'MMI.codes',
				description: "Retrouvez tous vos services ici",
				start_url: "/",
				display: "standalone",
				background_color: "#ffffff",
				theme_color: '#78a0dd',
				icons: [
					{ src: 'icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
					{ src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
				]
			}
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
	},
})

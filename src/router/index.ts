import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/admin',
			name: 'admin',
			component: () => import('@/views/AdminView.vue')
		},
		{
			path: '/minecraft',
			name: 'Minecraft',
			component: () => import('@/views/MinecraftView.vue')
		},
		{
			path: '/:link',
			name: 'RedirectHandler',
			component: () => import('@/views/RedirectHandler.vue')
		}
	],
})

export default router

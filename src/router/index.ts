import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RedirectHandler from '@/views/RedirectHandler.vue'

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
			path: '/:link',
			name: 'RedirectHandler',
			component: RedirectHandler,
		},
	],
})

export default router

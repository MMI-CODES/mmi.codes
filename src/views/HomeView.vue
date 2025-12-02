<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import Navbar from '@/components/layout/Navbar.vue';
	import Settings from '@/components/layout/Settings.vue';
	import Tool from '@/components/Tool.vue';

	import { settings } from '@/stores/settings';
	import type { ToolValue } from '@/types';

	const official_tools = ref<ToolValue[]>([]);
	const tools = ref<ToolValue[]>([]);
	const ressources = ref<ToolValue[]>([]);

	const fetchTools = async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tools`);
			if (!response.ok) throw new Error('Failed to fetch tools');
			const data = await response.json();

			official_tools.value = data.official_tools || [];
			tools.value = data.tools || [];
			ressources.value = data.ressources || [];
		} catch (error) {
			console.error('Error fetching tools:', error);
		}
	};

	onMounted(() => {
		fetchTools();
	});
</script>
<template>
	<header class="text-center p-8 sm:py-16">
		<h1 class="text-4xl font-bold">❄️ Joyeux Noël !</h1>
		<Navbar />
	</header>
	<main class="space-y-16 max-sm:px-4 sm:px-8 md:px-0 md:mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
		<section class="space-y-8" v-if="settings.display.alternatives">
			<h2 class="text-2xl text-center font-bold">Outils étudiants</h2>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<Tool
					v-for="value in tools"
					:titre="value.titre"
					:site="value.site"
					:author="value.author"
					:description="value.description"
					:emoji="value.emoji"
				/>
			</div>
		</section>

		<section class="space-y-8" v-if="settings.display.official">
			<h2 class="text-2xl text-center font-bold">Outils officiels</h2>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<Tool
					v-for="value in official_tools"
					:titre="value.titre"
					:site="value.site"
					:author="value.author"
					:description="value.description"
					:emoji="value.emoji"
				/>
			</div>
		</section>

		<section class="space-y-8" v-if="settings.display.ressources">
			<h2 class="text-2xl text-center font-bold">Ressources</h2>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<Tool
					v-for="value in ressources"
					:titre="value.titre"
					:site="value.site"
					:author="value.author"
					:description="value.description"
					:emoji="value.emoji"
				/>
			</div>
		</section>
	</main>
	<footer class="text-center p-4 sm:p-8 md:p-16">
		<b>© Loan 2025</b>
	</footer>
	<Settings />
</template>

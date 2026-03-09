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
		<h1 class="text-4xl font-bold">MMI Vélizy</h1>
		<p class="text-center mt-8 mb-4 sm:w-1/2 sm:mx-auto lg:w-1/3"><span class="text-xl">👋</span> Salut ! Le <span class="inline-block bg-[#de0a2d] text-white font-semibold font-display mx-1 px-2 py-1 rotate-[1.5deg] scale-102">BDE de l'IUT de Vélizy</span> réouvre ce lundi 9 mars et cherche des étudiants volontaires <u class="text-[#de0a2d] font-semibold">dans toutes les filières</u> pour participer à ses activités. Si tu es intéressé(e) ou connais des personnes susceptibles de l'être, ça se passe ici: <a href="https://discord.gg/MkYaZ953n8" class="text-primary font-medium underline">Serveur Discord</a></p>
		<Navbar />
	</header>
	<main class="space-y-16 max-sm:px-4 sm:px-8 md:px-0 md:mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
		<section class="space-y-8" v-if="settings.display.alternatives">
			<h2 class="text-2xl text-center font-semibold">Outils étudiants</h2>
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
			<h2 class="text-2xl text-center font-semibold">Outils officiels</h2>
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
			<h2 class="text-2xl text-center font-semibold">Ressources</h2>
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
		<a class="text-primary" href="https://github.com/MMI-CODES">Contribuer au projet MMI.codes</a>
	</footer>
	<Settings />
</template>

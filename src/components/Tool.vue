<script setup lang="ts">
	defineProps<{
		titre: string,
		site: string,
		author: string,
		description?: string
		emoji?: string
	}>()

	import LinkIcon from './icons/LinkIcon.vue';
</script>
<template>
	<div class="flex-1 bg-slate-50/40 backdrop-blur-md border-2 border-slate-50/20 rounded-3xl shadow-lg p-4 space-y-6 duration-150 hover:scale-[102.5%]">
		<div class="space-y-2">
			<div class="text-center space-y-2">
				<button class="bg-gray-500/15 rounded-full w-16 h-16 aspect-square">
					<span v-if="emoji" class="text-3xl align-middle">{{ emoji }}</span>
					<span v-else class="text-xl align-middle">🛠️</span>
				</button>
				<div class="flex flex-col -space-y-1 -translate-y-1 py-1">
					<a :href="site" class="text-slate-800 text-lg font-bold underline decoration-2 decoration-transparent duration-150 hover:decoration-primary/75">{{ titre }}</a>
					<span class="text-slate-700 text-xs font-medium">Par {{ author }}</span>
				</div>
			</div>
			<p v-if="description" class="text-slate-800 text-[15px] text-center font-medium leading-tight">{{ description }}</p>
		</div>
		<button class="block bg-primary/75 rounded-full w-content h-content mx-auto duration-150 hover:bg-primary">
			<a :href="site" target="_blank" class="block text-sm font-medium w-full h-full px-5 py-3">Ouvrir <LinkIcon className="inline fill-white stroke-[0.5px] stroke-white w-4 h-4 -translate-y-px" /></a>
		</button>
	</div>
</template>
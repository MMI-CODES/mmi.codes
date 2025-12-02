<script setup lang="ts">
	import type { ToolValue } from '@/types';
	import LinkIcon from './icons/LinkIcon.vue';

	defineProps<ToolValue>()
</script>
<template>
	<a :href="site" target="_blank" class="flex-1 block bg-white border border-slate-300 rounded-3xl  p-4 space-y-6 duration-300 hover:scale-102 group">
		<div class="space-y-2">
			<div class="text-center space-y-2">
				<div class="bg-slate-100 rounded-full w-16 h-16 aspect-square mx-auto flex items-center justify-center">
					<span v-if="emoji" class="text-3xl">{{ emoji }}</span>
					<span v-else class="text-xl">🛠️</span>
				</div>
				<div class="flex flex-col -space-y-1 -translate-y-1 py-1">
					<span class="text-slate-800 text-lg font-bold">{{ titre }}</span>
					<span v-if="author" class="text-slate-700 text-xs font-medium">Par {{ author }}</span>
				</div>
			</div>
			<p v-if="description" class="text-slate-800 text-[15px] text-center font-medium leading-tight">{{ description }}</p>
		</div>
		<div class="block bg-primary/85 rounded-full w-fit mx-auto duration-150 group-hover:bg-primary text-sm font-medium px-5 py-3 text-center text-white">
			Ouvrir <LinkIcon class="inline fill-white stroke-[0.5px] stroke-white w-4 h-4 -translate-y-px" />
		</div>
	</a>
</template>
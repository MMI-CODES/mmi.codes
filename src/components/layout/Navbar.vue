<script setup lang="ts">
	import { settings } from '@/scripts/stores/settings';
</script>
<template>
	<nav class="max-md:w-full max-sm:px-4 sm:px-8 md:px-0 md:mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
		<ul class="flex place-content-center w-full h-full">
			<li class="px-4 py-5" v-for="link of settings.links">
				<a class="text-sm font-medium underline decoration-transparent offset-2 decoration-2 duration-75 hover:decoration-white/75" :href="link.href">{{ link.titre }}</a>
			</li>
			<li class="px-3 py-4">
				<button class="cursor-pointer bg-slate-50/15 text-slate-50/75 text-xs font-medium backdrop-blur-md border-2 border-slate-50/20 rounded-full box-border px-4 py-2 duration-150 hover:bg-slate-50/20" onclick="document.querySelector('#settingsMenu').classList.toggle('hidden')">Préférences</button>
			</li>
		</ul>
	</nav>
</template>
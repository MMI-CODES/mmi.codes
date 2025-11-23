<script setup lang="ts">
	import TrashIcon from '../icons/TrashIcon.vue';
	import PlusIcon from '../icons/PlusIcon.vue';

	import { settings } from '@/stores/settings';
	import SettingsCheck from '../SettingsCheck.vue';

	function removeLink(index: number) {
		settings.links.splice(index, 1);
	}

	function addLink() {
		settings.links.push({ titre: 'Lien', href: 'https://mmi.codes' });
	}

	function resetSettings() {
		localStorage.removeItem('settings');
		window.location.reload();
	}
</script>
<template>
	<main id="settingsMenu" class="hidden fixed top-0 bg-red-600/25 w-screen h-screen overflow-y-auto duration-150 max-md:w-full max-sm:p-4 sm:p-8 md:p-24 md:px-0">
		<div class="select-none text-slate-800 bg-slate-50/40 backdrop-blur-md border-2 border-slate-50/20 rounded-3xl shadow-2xl p-8 space-y-6 md:p-8 md:m-auto md:w-2/3 lg:w-1/2 2xl:w-2/5">
			<h1 class="text-2xl text-center font-bold">Préférences</h1>

			<section class="space-y-2">
				<h2 class="text-lg font-semibold">Liens</h2>
				<ul class="space-y-2">
					<li v-for="(link, index) in settings.links" :key="index" class="items-center gap-2 max-md:space-y-1 md:flex">
						<div class="flex items-center gap-2">
							<TrashIcon @click="removeLink(index)" class="cursor-pointer fill-none stroke-red-500 w-5 h-5" />
							<input v-model="link.titre" type="text" placeholder="Texte du lien..." class="grow border border-slate-400 text-sm font-medium rounded-xl px-2 py-2 placeholder:text-slate-500" maxlength="50" />
						</div>
						<input v-model="link.href" type="text" placeholder="URL du site web" class="border border-slate-400 text-sm font-medium rounded-xl px-2 py-2 placeholder:text-slate-500 max-md:w-full" />
					</li>
					<li v-if="settings.links.length < 5"><button @click="addLink" class="group cursor-pointer text-sm font-medium duration-150 hover:text-blue-500"><PlusIcon className="inline w-3 h-3 mr-1 stroke-slate-800 -translate-y-px duration-150 group-hover:stroke-blue-500" />Ajouter un lien</button></li>
				</ul>
			</section>

			<section class="space-y-2">
				<h2 class="text-lg font-semibold">Affichage</h2>
				<ul>
					<li>
						<SettingsCheck label="Outils faits par les étudiants" v-model="settings.display.alternatives" />
					</li>
					<li>
						<SettingsCheck label="Outils officiels" v-model="settings.display.official" />
					</li>
					<li>
						<SettingsCheck label="Ressources" v-model="settings.display.ressources" />
					</li>
				</ul>
			</section>

			<section class="flex justify-center gap-4 mt-6">
				<button onclick="document.querySelector('#settingsMenu').classList.add('hidden')" class="cursor-pointer bg-primary/90 text-white text-sm font-medium rounded-full px-5 py-3 duration-150 hover:bg-primary hover:scale-[102.5%]">
					Fermer
				</button>
				<button @click="resetSettings" class="cursor-pointer text-sm font-medium duration-150 hover:text-primary">
					Réinitialiser
				</button>
			</section>
		</div>
	</main>
</template>
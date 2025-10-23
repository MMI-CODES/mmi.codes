<script setup lang="ts">
	import Navbar from '@/components/layout/Navbar.vue';
	import Settings from '@/components/layout/Settings.vue';
	import Tool from '@/components/Tool.vue';

	import { settings } from '@/scripts/stores/settings';

	interface ToolValue {
		titre: string,
		author?: string,
		site: string,
		description?: string,
		emoji?: string
	}

	const official_tools: ToolValue[] = [
		{
			titre: "UVSQ",
			site: "https://www.uvsq.fr",
			description: "Intranet étudiant",
			emoji: "🏠"
		},
		{
			titre: "Emploi du temps",
			site: "https://edt.rambouillet.iut-velizy.fr",
			description: "CELCAT",
			emoji: "🗓️"
		},
		{
			titre: "e-Campus",
			site: "https://ecampus.paris-saclay.fr/login/index.php",
			description: "Le truc auquel personne n'a accès",
			emoji: "💻"
		},
		{
			titre: "Partage",
			site: "https://partage.uvsq.fr/",
			description: "Service mail de l'UVSQ",
			emoji: "📧"
		},
		{
			titre: "Bulletins",
			site: "https://bulletins.iut-velizy.uvsq.fr/",
			description: "Consulter le relevé de notes",
			emoji: "📋"
		}
	]

	const tools: ToolValue[] = [
		{
			titre: "Better CELCAT",
			author: "Loan (A2)",
			site: "https://celcat.pages.dev",
			description: "EDT plus beau que CELCAT",
			emoji: "🗓️"
		},
		{
			titre: "Plan UP",
			author: "Rayan (A1)",
			site: "https://plan-up.pages.dev",
			description: "Consulter les DS et les rendus",
			emoji: "📜"
		}
	]

	const ressources: ToolValue[] = [
		{
			titre: "o2switch (hébergeur)",
			site: "https://servd162214.srv.odns.fr:2083/",
			description: "Hébergeur prenom.nom.mmi-velizy.fr",
			emoji: "🌐"
		},
		{
			titre: "Acheter Adobe CC",
			site: "https://creative.academicsoftware.com/fr/velizy",
			description: "Lien pour obtenir la réduc sur Adobe CC",
			emoji: "✍🏼"
		}
	]
</script>
<template>
	<header class="text-center p-16">
		<h1 class="text-4xl font-bold">Bonjour !</h1>
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

<script setup lang="ts">
	import Tool from '@/components/Tool.vue';

	interface ToolValue {
		titre: string,
		author: string,
		site: string,
		description?: string,
		emoji?: string
	}

	const official_tools: ToolValue[] = [
		{
			titre: "UVSQ",
			author: "UVSQ",
			site: "https://www.uvsq.fr",
			description: "Intranet étudiant",
			emoji: "🏠"
		},
		{
			titre: "Emploi du temps",
			author: "UVSQ",
			site: "https://edt.rambouillet.iut-velizy.fr",
			description: "CELCAT",
			emoji: "🗓️"
		},
		{
			titre: "e-Campus",
			author: "Moodle",
			site: "https://ecampus.paris-saclay.fr/login/index.php",
			description: "Le truc auquel personne n'a accès",
			emoji: "💻"
		},
		{
			titre: "Partage",
			author: "UVSQ",
			site: "https://partage.uvsq.fr/",
			description: "Service mail de l'UVSQ",
			emoji: "📧"
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
		},
		{
			titre: "Bulletins",
			author: "Vitamine (B2)",
			site: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
			description: "Consulter le relevé de notes",
			emoji: "📋"
		}
	]

	const ressources: ToolValue[] = [
		{
			titre: "o2switch (hébergeur)",
			author: "FOURNERIE",
			site: "https://servd162214.srv.odns.fr:2083/",
			description: "Hébergeur prenom.nom.mmi-velizy.fr",
			emoji: "🌐"
		},
		{
			titre: "Acheter Adobe CC",
			author: "Abregefrere",
			site: "https://creative.academicsoftware.com/fr/velizy",
			description: "Lien pour obtenir la réduc sur Adobe CC",
			emoji: "✍🏼"
		}
	]
</script>
<template>
	<header class="text-center p-16">
		<h1 class="text-4xl font-bold">Salut toi 😉</h1>
	</header>
	<main class="space-y-16 max-sm:px-4 sm:px-8 md:px-0 md:mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
		<section class="space-y-8">
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

		<section class="space-y-8">
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

		<section class="space-y-8">
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
</template>
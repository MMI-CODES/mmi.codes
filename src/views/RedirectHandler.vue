<script setup>
	import { onMounted } from 'vue'
	import { useRoute } from 'vue-router'

	const route = useRoute();

	const links = {
		o2switch: 'https://servd162214.srv.odns.fr:2083/',
		uvsq: 'https://www.uvsq.fr',
		celcat: 'https://celcat.pages.dev',
		planup: 'https://plan-up.pages.dev',
		tuto_cpanel: 'https://youtu.be/iPS25YbKX-8',
		tuto105: 'https://youtu.be/iPS25YbKX-8',
		sae104: 'https://drive.google.com/drive/folders/1CzdeX2eUZZaUQ0LTr84tA6D6KFcGiWaH',
		sae104generique: '/docs/sae104_generique.pdf'
	}

	onMounted(() => {
		const code = route.params.link

		if (!code) {
			alert('Lien invalide')
			return
		}

		if (links[code]) {
			window.location.href = links[code]
		} else {
			alert('Lien inexistant')
		}
	});
</script>
<template>
	<div class="text-center p-16">
		<p>Redirection en cours...</p>
	</div>
</template>

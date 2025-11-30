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
		sae104: 'https://cdn.discordapp.com/attachments/1443200806433063052/1443967398612041728/SAE_104_-_document_de_cadrage_2025-2026_v2.pdf?ex=692da1ef&is=692c506f&hm=28bf2c4d4137d4b3e8864960353b66490ded0127425a9f93875720b428af5d72'
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

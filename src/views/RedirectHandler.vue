<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

const links = {
	o2switch: 'https://servd162214.srv.odns.fr:2083/',
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

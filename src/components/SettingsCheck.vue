<script setup lang="ts">
	import { computed } from 'vue'

	const props = defineProps<{
		modelValue: boolean,
		label?: string
	}>()

	const emit = defineEmits<{
		(e: 'update:modelValue', value: boolean): void
	}>()

	const value = computed({
		get: () => props.modelValue,
		set: (val) => emit('update:modelValue', val)
	})
</script>

<template>
	<label class="relative inline-flex items-center cursor-pointer">
		<input
			type="checkbox"
			v-model="value"
			class="sr-only peer"
		/>
		<div
			class="w-8 h-5 bg-rose-500 peer-checked:bg-emerald-500 rounded-full
			peer-checked:after:translate-x-3 after:content-[''] after:absolute
			after:top-1 after:left-1 after:bg-white
			after:rounded-full after:h-3 after:w-3 after:transition-all"
		></div>
		<span class="ml-2 text-sm font-medium text-gray-900">{{ label }}</span>
	</label>
</template>
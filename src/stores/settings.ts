import { reactive, watch } from 'vue'

interface Link {
	titre: string
	href: string
}

interface Settings {
	links: Link[]
	display: {
		official: boolean
		alternatives: boolean
		ressources: boolean
	}
}

const defaultSettings: Settings = {
	links: [],
	display: {
		official: true,
		alternatives: true,
		ressources: true
	}
}

const saved = localStorage.getItem('settings')
export const settings = reactive<Settings>(saved ? JSON.parse(saved) : defaultSettings)

watch(settings, (newVal) => {
	localStorage.setItem('settings', JSON.stringify(newVal))
}, { deep: true })

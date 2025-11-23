<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { ToolValue } from '@/types';

const isAuthenticated = ref(false);
const password = ref('');
const error = ref('');
const tools = ref<any[]>([]); // Using any to include id and category
const newTool = ref({
    category: 'official_tools',
    titre: '',
    site: '',
    author: '',
    description: '',
    emoji: ''
});

const checkPassword = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: password.value })
        });
        if (response.ok) {
            isAuthenticated.value = true;
            fetchTools();
        } else {
            error.value = 'Mot de passe incorrect';
        }
    } catch (e) {
        console.error(e);
        error.value = 'Erreur de connexion';
    }
};

const fetchTools = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tools`);
        const data = await response.json();
        const allTools = [];
        if (data.official_tools) allTools.push(...data.official_tools.map((t: any) => ({ ...t, category: 'official_tools' })));
        if (data.tools) allTools.push(...data.tools.map((t: any) => ({ ...t, category: 'tools' })));
        if (data.ressources) allTools.push(...data.ressources.map((t: any) => ({ ...t, category: 'ressources' })));
        
        tools.value = allTools;
    } catch (e) {
        console.error(e);
    }
};

const addTool = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tools`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-admin-password': password.value
            },
            body: JSON.stringify(newTool.value)
        });
        if (response.ok) {
            // Reset form
            newTool.value = {
                category: 'official_tools',
                titre: '',
                site: '',
                author: '',
                description: '',
                emoji: ''
            };
            fetchTools();
        }
    } catch (e) {
        console.error(e);
    }
};

const deleteTool = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet outil ?')) return;
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tools/${id}`, {
            method: 'DELETE',
            headers: {
                'x-admin-password': password.value
            }
        });
        if (response.ok) {
            fetchTools();
        }
    } catch (e) {
        console.error(e);
    }
};
</script>

<template>
    <div class="min-h-screen bg-slate-100 p-8 text-gray-900">
        <div v-if="!isAuthenticated" class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
            <h2 class="text-2xl font-bold mb-4 text-center">Admin Login</h2>
            <form @submit.prevent="checkPassword" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
                    <input type="password" v-model="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
                </div>
                <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Se connecter
                </button>
            </form>
        </div>

        <div v-else class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold mb-8">Administration</h1>
            
            <!-- Add Tool Form -->
            <div class="bg-white shadow sm:rounded-lg mb-8 p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Ajouter un outil</h3>
                <form @submit.prevent="addTool" class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label class="block text-sm font-medium text-gray-700">Catégorie</label>
                        <select v-model="newTool.category" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900">
                            <option value="official_tools">Outils officiels</option>
                            <option value="tools">Outils étudiants</option>
                            <option value="ressources">Ressources</option>
                        </select>
                    </div>
                    
                    <div class="sm:col-span-3">
                        <label class="block text-sm font-medium text-gray-700">Titre</label>
                        <input type="text" v-model="newTool.titre" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2 text-gray-900" />
                    </div>

                    <div class="sm:col-span-3">
                        <label class="block text-sm font-medium text-gray-700">URL</label>
                        <input type="url" v-model="newTool.site" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2 text-gray-900" />
                    </div>

                    <div class="sm:col-span-3">
                        <label class="block text-sm font-medium text-gray-700">Auteur</label>
                        <input type="text" v-model="newTool.author" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2 text-gray-900" />
                    </div>

                    <div class="sm:col-span-6">
                        <label class="block text-sm font-medium text-gray-700">Description</label>
                        <input type="text" v-model="newTool.description" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2 text-gray-900" />
                    </div>

                    <div class="sm:col-span-1">
                        <label class="block text-sm font-medium text-gray-700">Emoji</label>
                        <input type="text" v-model="newTool.emoji" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2 text-gray-900" />
                    </div>

                    <div class="sm:col-span-6">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Ajouter
                        </button>
                    </div>
                </form>
            </div>

            <!-- List Tools -->
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
                <ul role="list" class="divide-y divide-gray-200">
                    <li v-for="tool in tools" :key="tool.id">
                        <div class="px-4 py-4 sm:px-6 flex items-center justify-between">
                            <div class="flex items-center">
                                <span class="text-2xl mr-4">{{ tool.emoji || '🛠️' }}</span>
                                <div>
                                    <p class="text-sm font-medium text-indigo-600 truncate">{{ tool.titre }}</p>
                                    <p class="text-sm text-gray-500">{{ tool.description }}</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    {{ tool.category }}
                                </span>
                                <button @click="deleteTool(tool.id)" class="text-red-600 hover:text-red-900">Supprimer</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

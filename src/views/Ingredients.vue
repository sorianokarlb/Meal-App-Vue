<script setup>
import instance from '../axiosClient';
import { onMounted, ref } from 'vue';

let Ingredients = ref([]);

onMounted(()=> {
    instance.get('list.php?i=list')
    .then(({data})=> {
        Ingredients.value = data.meals
    })
})
</script>

<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <router-link
        :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}" 
        v-for="ingredient of Ingredients" 
        :key="ingredient.idIngredient" 
        class="block bg-white rounded p-3 mb-3 shadow"
        >
            <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>
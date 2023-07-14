<script setup>
import instance from '../axiosClient';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import store from '../store/store';

const router = useRouter();
let Ingredients = ref([]);
let keyword = ref('');

let compIngredients = computed(()=> {
    if(!compIngredients) return Ingredients;
    return Ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})

async function openIngredient(ingredient) {
    store.commit('setIngredient', ingredient)
    router.push({
        name: "byIngredient",
        params: {ingredient: ingredient.strIngredient},
    })
}

onMounted(()=> {
    instance.get('list.php?i=list')
    .then(({data})=> {
        Ingredients.value = data.meals
    })
})
</script>

<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-[#474BFF]">Meals by Ingredients</h1>
    </div>
    <div class="px-8">
        <input 
            type="text" 
            class="rounded p-5 border border-[#474BFF] w-full mb-3" 
            placeholder="Search For Meals..."
            v-model="keyword"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 ">
            <a href="#"
            @click.prevent="openIngredient(ingredient)"
            v-for="ingredient of compIngredients"
            :key="ingredient.idIngredient"
            class="block bg-white rounded p-3 mb-3 shadow hover:scale-110 transition-all"
            >
                <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
            </a>
        </div>
    </div>
</template>
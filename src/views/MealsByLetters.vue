<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store/store';
import Meals from '../components/Meals.vue';

let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let route = useRoute();
let meals = computed(()=> store.state.mealsByLetter);

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})


</script>

<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-[#474BFF]">Meals by Letter</h1>
    </div>
    <div class="flex gap-3 justify-center px-8 items-center bg-white rounded mb-3 shadow h-[40px] w-full">
        <router-link 
        :to="{name: 'byLetter', params: {letter}}" 
        v-for="letter in letters" 
        :key="letter"
        >
            <pre class="text-[#474BFF] text-xl m-2 hover:scale-125 transition-all hover:text-black">{{ letter }}</pre>
        </router-link>
    </div>
    
    <Meals :meals="meals"/>
</template>
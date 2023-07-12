<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, onMounted, watch } from 'vue';
import store from '../store/store';
import Meals from '../components/Meals.vue';

let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let route = useRoute();
let meals = computed(()=> store.state.mealsByLetter)

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})


</script>

<template>
    <div class="flex gap-2 justify-center mt-2">
        <router-link 
        :to="{name: 'byLetter', params: {letter}}" 
        v-for="letter in letters" 
        :key="letter">
            <pre>{{ letter }}</pre>
        </router-link>
    </div>
    
    <Meals :meals="meals"/>
</template>
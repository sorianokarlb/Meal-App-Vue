<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store/store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

let route = useRoute();
let meals = computed(() => store.state.mealsByIngredient)
let ingredient = computed(()=> store.state.ingredient)

onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-[#474BFF]">Meals for {{ ingredient.strIngredient }}</h1>
    </div>
 <Meals :meals="meals"/>
</template>
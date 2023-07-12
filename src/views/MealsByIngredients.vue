<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store/store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

let route = useRoute();
let meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<template>
 <Meals :meals="meals"/>
</template>
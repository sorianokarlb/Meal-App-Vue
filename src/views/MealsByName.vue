<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store/store';
import { useRoute } from 'vue-router';

const route = useRoute();
let keyword = ref('');
let meals = computed(()=> store.state.searchedMeals)

async function searchMeals() {
    store.dispatch('searchMeals', keyword.value) // call the action on the store
}

onMounted(()=> {
    keyword.value = route.params.name
    if(keyword.value){searchMeals();}
})
</script>

<template>
    <div class="p-8 pb-0">
        <input 
            type="text" 
            class="rounded p-5 border border-teal-300 w-full" 
            placeholder="Search For Meals..."
            v-model="keyword"
            @change="searchMeals"
        />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal in meals" :key="meal.idMeal" class="bg-slate-200 rounded-xl border border-teal-600">
            <router-link :to="{name: 'MealDetails', params: {id: meal.idMeal}}">
                <img 
                    :src="meal.strMealThumb" 
                    :alt="meal.strMeal" 
                    class="rounded-t-xl h-48 w-full object-cover"
                />
            </router-link>
            <div class="p-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="font-normal mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="font-normal flex items-center justify-between">
                    <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border text-white border-red-600 bg-red-600 hover:bg-red-500 transition-colors">Video Guide</a>
                </div>
            </div>
        </div>
    </div>
</template>
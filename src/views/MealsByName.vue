<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store/store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute();
let keyword = ref('');
let meals = computed(()=> store.state.searchedMeals)

async function searchMeals() {
    if(keyword.value){
        store.dispatch('searchMeals', keyword.value) // call the action on the store
    } else {
        store.commit('setSearchedMeals', [])
    }
}

onMounted(()=> {
    keyword.value = route.params.name
    if(keyword.value){searchMeals();}
})
</script>

<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-[#474BFF]">Search Meals by Name</h1>
    </div>
    <div class="px-8 pb-0">
        <input 
            type="text" 
            class="rounded p-5 border border-[#474BFF] w-full" 
            placeholder="Search For Meals..."
            v-model="keyword"
            @change="searchMeals"
        />
    </div>

    <Meals :meals="meals"/>
</template>
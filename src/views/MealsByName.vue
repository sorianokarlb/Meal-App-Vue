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
        <input 
            type="text" 
            class="rounded p-5 border border-teal-300 w-full" 
            placeholder="Search For Meals..."
            v-model="keyword"
            @change="searchMeals"
        />
    </div>

    <Meals :meals="meals"/>
</template>
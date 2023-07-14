<script setup>
import { onMounted, ref } from 'vue';
import instance from '../axiosClient';
import Meals from '../components/Meals.vue';

let meals = ref([]);
let loading = ref(true);


    onMounted(async ()=> {
        loading.value = true;
        for(let i = 0; i < 10; i++){
            await instance.get('random.php')
            .then(({ data }) => {
                meals.value.push(data.meals[0]);
            });
        }
        loading.value = false;
    });
    
</script>

<template>
    <div class="p-8 pb-0 text-[#474BFF]">
        <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <div v-if="loading" class="flex flex-col justify-center items-center p-72 mt-5">
        <div class="spinner mb-5"></div>
        <span class="text-2xl text-[#474BFF] font-bold mt-10">Loading Meals</span>
    </div>

    <Meals :meals="meals" v-else/>
</template>

<style scoped>
.spinner {
    width: 11.2px;
    height: 11.2px;
    border-radius: 11.2px;
    box-shadow: 28px 0px 0 0 rgba(71,75,255,0.2), 22.7px 16.5px 0 0 rgba(71,75,255,0.4), 8.68px 26.6px 0 0 rgba(71,75,255,0.6), -8.68px 26.6px 0 0 rgba(71,75,255,0.8), -22.7px 16.5px 0 0 #474bff;
    animation: spinner-b87k6z 2s infinite linear;
 }
 
 @keyframes spinner-b87k6z {
    to {
       transform: rotate(360deg);
    }
 }
</style>
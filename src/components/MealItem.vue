<script setup>
import YoutubeBtn from '../components/YoutubeBtn.vue';
const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>

<template>
    <div 
    class="bg-slate-200 rounded-xl border border-teal-600"
    >
        <router-link 
        :to="{name: 'MealDetails', params: {id: meal.idMeal}}"
        >
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
                <YoutubeBtn :href="meal.strYoutube">Youtube</YoutubeBtn>
            </div>
        </div>
    </div>
</template>
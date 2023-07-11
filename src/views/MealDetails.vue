<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import instance from '../axiosClient';
import YoutubeBtn from '../components/YoutubeBtn.vue';
import ViewSourceBtn from '../components/ViewSourceBtn.vue';

    const route = useRoute();
    let meal = ref({});

    onMounted(() => {
        instance.get(`lookup.php?i=${route.params.id}`)
        .then(({data})=>{ meal.value = data.meals[0]})
    })
</script>

<template>
    <div class="w-[800px] mx-auto p-8">
        <pre>{{ meal }}</pre>
         <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
         <img :src="meal.strMealThumb" :alt="meal.strMeal">
         <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <span><strong>Category: </strong>{{ meal.strCategory }}</span>
            <span><strong>Area: </strong>{{ meal.strArea }}</span>
            <span><strong>Tags: </strong>{{ meal.strTags }}</span>
         </div>

         <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index + 1}`]">{{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}</li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strMeasure${index + 1}`]">{{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}</li>
                    </template>
                </ul>
            </div>
         </div>

         <div class="flex flex-row gap-1 mt-4">
            <YoutubeBtn :href="meal.strYoutube">Go to Youtube</YoutubeBtn>
            <ViewSourceBtn :href="meal.strSource">View Source</ViewSourceBtn>
         </div>
         
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import instance from '../axiosClient';


    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    onMounted(async ()=> {
       const response = await instance.get('/list.php?i=list')
       console.log(response.data)
    })
    
</script>

<template>
    <div class="flex flex-col justify-center items-center p-8">

        <div class="flex gap-2 justify-center mt-2">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="letter">
                <pre>{{ letter }}</pre>
            </router-link>
        </div>
    </div>
</template>
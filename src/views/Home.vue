<script setup>
import { onMounted, ref } from 'vue';
import instance from '../axiosClient';




    onMounted(async ()=> {
       const response = await instance.get('/list.php?i=list')
       console.log(response.data)
    })
    
</script>

<template>
    <div class="flex flex-col justify-center items-center p-8">

    </div>
</template>
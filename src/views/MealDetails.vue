<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import instance from '../axiosClient';

    const route = useRoute();
    let meal = ref({});

    onMounted(() => {
        instance.get(`lookup.php?i=${route.params.id}`)
        .then(({data})=>{ meal.value = data})
    })
</script>

<template>
    <div>
        <pre>{{ meal }}</pre>
    </div>
</template>
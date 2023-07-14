<script setup>
    const props = defineProps({
        href: String
    })
</script>

<template>
    <a 
    :href="href" 
    target="_blank" 
    class="px-3 py-2 rounded border text-white  bg-sky-600 hover:bg-sky-500 transition-colors bg-opacity-70"
    >
    <slot></slot>
    </a>
</template>
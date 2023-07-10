<script setup>
    const props = defineProps({
        href: String
    })
</script>

<template>
    <a 
    :href="href" 
    target="_blank" 
    class="px-3 py-2 rounded border text-white border-sky-600 bg-sky-600 hover:bg-sky-500 transition-colors"
    >
    <slot></slot>
    </a>
</template>
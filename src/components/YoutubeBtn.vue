<script setup>
    const props = defineProps({
        href: String
    })
</script>

<template>
    <a 
    :href="href" 
    target="_blank" 
    class="px-3 py-2 rounded border text-white border-red-600 bg-red-600 hover:bg-red-500 transition-colors"
    >
    <slot></slot>
    </a>

</template>
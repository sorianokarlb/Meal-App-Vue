<script setup>
    import Navbar from '../components/Navbar.vue';
</script>

<template>
    <div class="bg-[#F1F2FB] h-full">
        <Navbar />
        <main>
            <div class="max-w-[1200px] mx-auto">
                <router-view />
            </div>
        </main>
    </div>
</template>
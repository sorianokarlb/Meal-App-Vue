<template>
    <header class="bg-[#E9EBF9] shadow-sm h-16 flex justify-between items-stretch shadow">
        <router-link 
        :to="{ name: 'Home' }" 
        class="inline-flex items-center h-full px-5 text-[#474BFF] font-bold">
        Home
        </router-link>
        <div class="flex items-center gap-1">
        <router-link 
        :to="{ name: 'byName' }" 
        class="inline-flex items-center transition-colors px-2 h-full text-[#474BFF]  hover:bg-indigo-200">
            Search Meals
        </router-link>
        <router-link 
        :to="{ name: 'byLetter' }" 
        class="inline-flex items-center transition-colors px-2 h-full text-[#474BFF] hover:bg-indigo-200">
            Meals By Letter
        </router-link>
        <router-link 
        :to="{ name: 'ingredients' }" 
        class="inline-flex items-center transition-colors px-2 h-full text-[#474BFF] hover:bg-indigo-200">
            Meals By Ingredients
        </router-link>
        </div>
    </header>
</template>
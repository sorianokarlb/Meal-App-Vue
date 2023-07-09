import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue';
import MealsByLetter from '../views/MealsByLetters.vue';
import MealsByIngredient from '../views/MealsByIngredients.vue';
import MealsByName from '../views/MealsByName.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
                {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
    },
    {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
    },
        {
        path: '/by-ingredient/:ingredient?',
        name: 'byIngredient',
        component: MealsByIngredient
    },    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
    },
    {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
    },
        {
        path: '/by-ingredient/:ingredient?',
        name: 'byIngredient',
        component: MealsByIngredient
    },
        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
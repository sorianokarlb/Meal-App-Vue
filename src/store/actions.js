import instance from '../axiosClient';

export function searchMeals({ commit }, keyword) {
    instance.get(`search.php?s=${keyword}`)
    .then(({ data })=> {
        commit('setSearchedMeals', data.meals); //commit to mutations
    })
}

export function searchMealsByLetter({ commit }, letter) {
    instance.get(`search.php?f=${letter}`)
    .then(({ data }) => {
        commit('setMealsByLetter', data.meals);
    })
}

export function searchMealsByIngredient({ commit }, ingredient) {
    instance.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => {
        commit('setMealsByIngredient', data.meals);
    })
}
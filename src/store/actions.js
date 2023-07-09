import instance from '../axiosClient';

export function searchMeals({ commit }, keyword) {
    instance.get(`search.php?s=${keyword}`)
    .then(({ data })=> {
        commit('setSearchedMeals', data.meals) //commit to mutations
    })
}
export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []; // pass to state save the data to state
}

export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || [];
}

export function setMealsByIngredient(state, meals) {
    state.mealsByIngredient = meals || [];
}
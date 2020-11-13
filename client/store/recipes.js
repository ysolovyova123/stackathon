import axios from "axios";

const GET_USER_RECIPES = "GET_USER_RECIPES";
const DELETE_RECIPE = "DELETE_RECIPE"

export const _getUserRecipes = (recipes) => {
    return {
        type: GET_USER_RECIPES,
        recipes
    }
};

export const _deleteRecipe = (recipeId) => {
  return {
    type: DELETE_RECIPE,
    recipeId
  }
}

export const getUserRecipes = (userId) => {
  return async(dispatch) => {
      const userRecipes = (await axios.get(`/api/recipes/users/${userId}`)).data
      dispatch(_getUserRecipes(userRecipes))
  }
}

export const deleteRecipe = (recipeId) =>{
  return async (dispatch) =>{
      try {
          await axios.delete(`/api/recipes/${recipeId}`)
          recipeId = Number(recipeId)
          dispatch(_deleteRecipe(recipeId))
      } catch (error) {
          console.log(error)
      }
  }
}

export const recipesReducer = (state = [], action) => {
  switch (action.type) {
      case GET_USER_RECIPES:
          return action.recipes
      case DELETE_RECIPE:
          return state.filter(recipe => recipe.id !== action.recipeId)
      default:
          return state
  }
};

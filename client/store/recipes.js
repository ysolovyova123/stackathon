import axios from "axios";

const GET_USER_RECIPES = "GET_USER_RECIPES";

export const _getUserRecipes = (recipes) => {
    return {
        type: GET_USER_RECIPES,
        recipes
    }
};

export const getUserRecipes = (userId) => {
  return async(dispatch) => {
      const userRecipes = (await axios.get(`/api/recipes/users/${userId}`)).data
      dispatch(_getUserRecipes(userRecipes))
  }
}

export const recipesReducer = (state = [], action) => {
  switch (action.type) {
      case GET_USER_RECIPES:
          return action.recipes //dynamically overwrites any edited fields but leaves the rest unchanged
      // case REGISTER_USER:
      //     return action.user
      // case LOG_OUT:
      //     return {}
      // case DELETE_USER:
      //     return {}
      default:
          return state
  }
};

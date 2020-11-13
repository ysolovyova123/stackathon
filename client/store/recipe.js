import axios from "axios";
//User State

const ADD_RECIPE = "ADD_RECIPE";
// const DELETE_RECIPE = "DELETE_RECIPE"
// const REGISTER_USER = "REGISTER_USER"
// const LOG_OUT = "LOG_OUT"
// const DELETE_USER = "DELETE_USER"

// export const updateUser = (user) => {
//     return {
//         type: UPDATE_USER,
//         user
//     }
// };

export const addRecipe = (recipe) => {
  return {
      type: ADD_RECIPE,
      user
  }
};

// export const logOutUser = () => {
//   return {
//       type: LOG_OUT,
//   }
// };

// export const _deleteRecipe = () => {
//   return {
//     type: DELETE_RECIPE
//   }
// }

// export const getUser = (email, password) => {
//     return async(dispatch) => {
//       try {
//         password = saltAndHash(password)
//         const userFound = (await axios.post('/api/users/login', {email, password})).data
//         dispatch(updateUser(userFound))
//       }
//       catch (error) {
//         console.log(error);
//       }
//     }
// }

export const addARecipe = (title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions,userId) => {
  return async(dispatch) => {
    try {
      const newRecipe = (await axios.post('/api/recipes', {title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions,userId})).data
      dispatch(addRecipe(newRecipe))
    }
    catch (error) {
      console.log(error)
    }
  }
}

// export const deleteRecipe = (recipeId) =>{
//   return async (dispatch) =>{
//       try {
//           await axios.delete(`/api/recipes/${recipeId}`)
//           dispatch(_deleteRecipe())
//       } catch (error) {
//           console.log(error)
//       }
//   }
// }

export const recipeReducer = (state = {}, action) => {
  switch (action.type) {
      case ADD_RECIPE:
          return Object.assign({},state,action.recipe) //dynamically overwrites any edited fields but leaves the rest unchanged
      // case REGISTER_USER:
      //     return action.user
      // case LOG_OUT:
      //     return {}
      // case DELETE_RECIPE:
      //     return {}
      default:
          return state
  }
};

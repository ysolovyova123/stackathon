import axios from "axios";
import {saltAndHash} from '../../server/utils/hashPasswordFunc'

//User State

const UPDATE_USER = "UPDATE_USER";
const REGISTER_USER = "REGISTER_USER"
const LOG_OUT = "LOG_OUT"
const DELETE_USER = "DELETE_USER"

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user
    }
};

export const registerAUser = (user) => {
  return {
      type: REGISTER_USER,
      user
  }
};

export const logOutUser = () => {
  return {
      type: LOG_OUT,
  }
};

export const _deleteUser = () => {
return {
  type: DELETE_USER
}
}

export const getUser = (email, password) => {
    return async(dispatch) => {
      try {
        password = saltAndHash(password)
        const userFound = (await axios.post('/api/users/login', {email, password})).data
        dispatch(updateUser(userFound))
      }
      catch (error) {
        console.log(error);
      }
    }
}

export const registerUser = (firstName, lastName, email, password, favoriteCuisine, favoriteDishType, intolerances) => {
  return async(dispatch) => {
    try {
      let hashedPassword = saltAndHash(password)
      const newUser = (await axios.post('/api/users/register', {firstName, lastName, email, hashedPassword, favoriteCuisine, favoriteDishType, intolerances})).data
      dispatch(registerAUser(newUser))
    }
    catch (error) {
      console.log(error)
    }
  }
}

export const deleteUser = (userId) =>{
  return async (dispatch) =>{
      try {
          await axios.delete(`/api/users/${userId}`)
          dispatch(_deleteUser(userId))
      } catch (error) {
          console.log(error)
      }
  }

}

export const userReducer = (state = {}, action) => {
  switch (action.type) {
      case UPDATE_USER:
          return Object.assign({},state,action.user) //dynamically overwrites any edited fields but leaves the rest unchanged
      case REGISTER_USER:
          return action.user
      case LOG_OUT:
          return {}
      case DELETE_USER:
          return {}
      default:
          return state
  }
};

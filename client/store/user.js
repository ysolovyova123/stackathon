import axios from "axios";
//import {saltAndHash} from '../../server/utils/hashPasswordFunc'
//User State

const UPDATE_USER = "UPDATE_USER";

export const updateUser = () => {
    return {
        type: UPDATE_USER,
        //user
    }
};

export const getUser = (email, password) => {
    return async(dispatch) => {
      try {
        // password = saltAndHash(password)
        // const userFound = (await axios.post('/api/sessions/login', {email, password})).data
        dispatch(updateUser())
      }
      catch (error) {
        console.log(error);
      }
    }
}

export const userReducer = (state = {}, action) => {
  switch (action.type) {
      case UPDATE_USER:
          return Object.assign({},state,action.user) //dynamically overwrites any edited fields but leaves the rest unchanged
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

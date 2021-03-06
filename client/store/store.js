import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {logger} from 'redux-logger'
import {userReducer} from './user'
import {recipeReducer} from './recipe'
import {recipesReducer} from './recipes'


const reducer = combineReducers({
    user: userReducer,
    recipe: recipeReducer,
    recipes: recipesReducer
    // products: productsReducer,
    // singleProduct: singleProductReducer,
    // users: usersReducer,
    // singleUser: singleUserReducer,
    // orders: ordersReducer,
    // singleOrder: singleOrderReducer,
    // cart: cartReducer
});

const store = createStore(reducer, applyMiddleware(logger,thunkMiddleware));

export default store;

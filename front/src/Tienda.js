import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer, productsDetailReducer } from './reducer/productReducer';
 
const reducer = combineReducers ({
    products: productsReducer,
    productsDetails: productsDetailReducer
})

let initialState = {}

const middelware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middelware)))

export default store;
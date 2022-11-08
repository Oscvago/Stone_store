import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productReducer, productDetailsReducer} from './reducer/productReducer';
import { ventaReducer } from "./reducer/ventasReducer";

const reducer = combineReducers({
  products:productReducer,
  productDetails: productDetailsReducer,
  ventas:ventaReducer
});

let initialState = {}

const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import { combineReducers } from "redux";
import { cartReducer } from "./productReducer";

export const reducers = combineReducers({
    cart: cartReducer
})

import { INCREASE, DECREASE, ADD_TO_CART, REMOVE, GET_TOTALS } from "../actions/productAction"
import { cartsData1 } from "../../data/Data"
const initialState = {
    cartItems: cartsData1,
    addedItems: [],
    amount: 0,
    total: 0
}



export const cartReducer = (state = initialState, { type, payload }) => {
    if(type === ADD_TO_CART){
        return { ...state, addedItems: payload }
    }
    if(type === INCREASE){
        return { ...state, addedItems: payload }
    }
    if(type === DECREASE){
        return { ...state, addedItems: payload }
    }
    if(type === REMOVE){
        return {...state, addedItems: payload}
    }
    if(type === GET_TOTALS){
        return {...state, total: payload.total, amount: payload.amount}
    }
    return state;
    // switch (type) {
        //     case ADD_TO_CART:
        //         return { ...state, addedItems: payload }
    //     case INCREASE:
    //         return { ...state, addedItems: payload }
    //     case DECREASE:
    //         return { ...state, addedItems: payload }
    //     default:
    //         return state;

    // }
}
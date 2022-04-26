export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const REMOVE = 'REMOVE';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTAL';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';


export const addToCart = (id, object) => {
    return async (dispatch, getState) => {
        const addedItems = [...getState().cart.addedItems];
        const found = addedItems.some(el => el.id === id);
        if (!found) {
            addedItems.push(object);
            addedItems.forEach(el => {
                if (el.id === id) {
                    el.amount = el.amount + 1
                }
            })
        } else {
            addedItems.forEach(el => {
                if (el.id === id) {
                    el.amount = el.amount + 1
                }
            })
        }
        console.log(addedItems)
        await dispatch({ type: ADD_TO_CART, payload: addedItems })
    }
}

export const increase = (id) => {
    return async (dispatch, getState) => {
        const addedItems = [...getState().cart.addedItems];
        addedItems.forEach(el => {
            if (el.id === id) {
                el.amount = el.amount + 1;
            }
        })
        console.log(addedItems)
        await dispatch({ type: INCREASE, payload: addedItems })
    }
}
export const decrease = (id) => {
    return async (dispatch, getState) => {
        const addedItems = [...getState().cart.addedItems];
        addedItems.forEach(el => {
            if (el.id === id) {
                el.amount = el.amount - 1;
            }
        })
        await dispatch({ type: DECREASE, payload: addedItems })

    }
}

export const remove = (id) => {
    return async (dispatch, getState) => {
        const addedItems = [...getState().cart.addedItems];
        const newItems = addedItems.filter(item => item.id !== id);
        await dispatch({ type: REMOVE, payload: newItems })
    }
}

export const getTotal = () => {
    return async (dispatch, getState) => {
        const addedItems = [...getState().cart.addedItems];
        let { total, amount } = addedItems.reduce((cartTotal, cartItem) => {
            let { itemPrice, amount } = cartItem;
            // itemPrice = itemPrice.repalceAll(',', '')
             itemPrice = parseFloat(itemPrice)
            console.log(itemPrice, "itemprice")
            console.log(amount, "amount")
            const itemTotal = itemPrice * amount;
            console.log(itemTotal, "itemttoal")
            cartTotal.total += itemTotal
            cartTotal.amount += amount;
            return cartTotal
        }, {
            total: 0,
            amount: 0,
        });
        total = parseFloat(total.toFixed(2))
        // console.log(total, amount)
        await dispatch({ type: GET_TOTALS, payload: { total, amount } })
    }
}


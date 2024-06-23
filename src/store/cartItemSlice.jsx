import { createSlice } from "@reduxjs/toolkit";

const initialCart = { 
    items:[],
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCart,
    reducers: {
        addToCart(state, action) {
            const cartItemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            
            if(cartItemIndex !== -1){            
                state.items[cartItemIndex].quantity += 1

            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
            state.amount += 1;
            state.total = state.items.reduce((acc, meal)=> acc + (meal.price * meal.quantity), 0);
        },
        removeFromCart(state, action) {
            const cartItemIndex = state.items.findIndex((item) => item.id === action.payload.id)

            if (cartItemIndex !== -1) {
                state.items[cartItemIndex].quantity -= 1;
                
                if (state.items[cartItemIndex].quantity <= 0) {
                  state.items.splice(cartItemIndex, 1);
                }
              }

            state.amount -= 1;
            state.total = state.items.reduce((acc, meal)=> acc + (meal.price * meal.quantity), 0);
        },
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./checkoutSlice.jsx"
import cartReducer from "./cartItemSlice.jsx";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        checkout: checkoutReducer,
    }
})
export default store;


import { createSlice } from "@reduxjs/toolkit";

const initialSubmit = { 
    isSubmit: false,
    customerData:{}
}

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: initialSubmit,
    reducers: {
        setSubmit(state, action) {
            state.isSubmit = action.payload;
        },
        getCustomerData(state, action){
            state.customerData = action.payload;
            console.log(state.customerData)
        }
    },
})

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice.reducer
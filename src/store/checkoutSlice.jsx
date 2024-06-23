import { createSlice } from "@reduxjs/toolkit";

const initialSubmit = { 
    isSubmit: false,
}

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: initialSubmit,
    reducers: {
        setSubmit(state, action) {
            state.isSubmit = action.payload;
            console.log(state.isSubmit, action.payload);
        },
    },
})

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice.reducer
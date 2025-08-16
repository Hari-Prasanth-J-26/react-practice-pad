import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {

            //Vanilla (older) Redux -> don't mutate state, return is mandatory
            //const newState = [...state];
            //newState.items.push(action.payload);
            //return newState;


            //Redux Toolkit uses immer behind
            //We have to mutate the state
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            //Redux toolkit, either mutate the existing state or return the new state
            state.items.length = 0;
            //return {items: []}; // this new [] will be replaced inside the originalstate []
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
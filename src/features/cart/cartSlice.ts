import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";
import {cartItem, cartState} from "@/interfaces/cart_interfaces";


const initialState: cartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseItemAmount: (state, action: PayloadAction<cartItem>) => {
            const existingItem = state.items.find(item => item.product._id === action.payload.product._id);
            if (existingItem) {
                existingItem.quantity = existingItem.quantity + action.payload.quantity
            } else {
                state.items.push({product: action.payload.product, quantity: action.payload.quantity});
            }
        },
        decreaseItemAmount: (state, action: PayloadAction<cartItem>) => {
            const existingItem = state.items.find(item => item.product._id === action.payload.product._id);
            if (existingItem && existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.product._id !== action.payload.product._id);
            } else if (existingItem) {
                existingItem.quantity--;
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const {increaseItemAmount, decreaseItemAmount, clearCart} = cartSlice.actions;

export const selectCartItems = (state: { cart: cartState }) => state.cart.items;

export default cartSlice.reducer;
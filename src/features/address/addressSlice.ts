import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";
import {IAddress} from "@/interfaces/interfaces";

const initialState: IAddress = {
    name: '',
    email: '',
    phone: '',
    street: '',
    zip: '',
    city: '',
    country: '',
}

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setAddress: (state, action: PayloadAction<IAddress>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.street = action.payload.street;
            state.zip = action.payload.zip;
            state.city = action.payload.city;
            state.country = action.payload.country;
        },
        getAddress: (state) => {
            return state;
        }
    }
});

export const {setAddress, getAddress} = addressSlice.actions;

export const selectAddress = (state: { address: IAddress }) => state.address;

export default addressSlice.reducer;
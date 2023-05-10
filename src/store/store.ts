import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import addressReducer from '../features/address/addressSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        address: addressReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
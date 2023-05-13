import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import addressReducer from '../features/address/addressSlice'
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    address: addressReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
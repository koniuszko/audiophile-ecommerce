import {ProductProps} from "@/interfaces/products_interfaces";

export interface cartItem {
    product: ProductProps,
    quantity: number
}

export interface cartState {
    items: cartItem[]
    cartTotal?: number,
    cartItemsCount?: number
}
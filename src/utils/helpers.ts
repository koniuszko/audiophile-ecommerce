import {cartItem} from "@/interfaces/cart_interfaces";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const totalSummary = (items: cartItem[]) => {
    let total = 0;
    items.forEach((item: any) => {
        total += item.product.price * item.quantity;
    })
    return total;
}

export const VatValue = (items: cartItem[]) => {
    let total = 0;
    items.forEach((item: any) => {
        total += item.product.price * item.quantity;
    })
    return (total * 0.2).toFixed(0);
}


import {PaidCompletion, PaymentMethod, UserRole} from "@/interfaces/models/models_enums";

export interface IUser {
    userId: string,
    name: string,
    email: string,
    password: string,
    role: string,
    address: IAddress,
    orders: IOrder[]
}

export interface IAddress {
    name: string,
    phone: string,
    street: string,
    postcode: string,
    city: string,
    country: string,
}

export interface IOrder {
    orderId: string,
    userId: string,
    userName: string,
    orderDate: string,
    items: IItem[],
    paymentMethod: PaymentMethod,
    paid?: PaidCompletion,
}

export interface IItem {
    productId: string,
    productName: string,
    quantity: number,
    price: number
}
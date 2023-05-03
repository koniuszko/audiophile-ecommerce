import {PaidCompletion, PaymentMethod} from "@/interfaces/models/models_enums";

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
    items: IProduct[],
    paymentMethod: PaymentMethod,
    paid?: PaidCompletion,
}

export interface IProduct {
    productId: string,
    productName: string,

    shortName: string,
    productTitle: string,
    price: number,
    description: string,
    category: 'headphones' | 'speakers' | 'earphones',
    features: string[],
    inTheBox: [
        {
            quantity: number,
            item: string,
        }
    ],
    isNewProduct?: boolean,
}
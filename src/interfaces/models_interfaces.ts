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
    email: string,
    phone: string,
    street: string,
    postcode: string,
    city: string,
    country: string,
}

export interface IOrder {
    orderId: string,
    userId?: string,
    address: IAddress,
    orderDate: string,
    items: IProduct[],
    paymentMethod: "credit-card" | "cash-on-delivery",
    paid: 0 | 1,
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
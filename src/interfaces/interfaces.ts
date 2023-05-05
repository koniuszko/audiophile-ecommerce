import {ReactNode} from "react";

export interface ChildrenProps {
    children: ReactNode
}

export interface OverlineProps {
    color: string
}

export interface CategoryPageProps {
    products: IProduct[],
    categories: string[],
    currentCategory: string,
}

export interface ProductPageProps {
    product: IProduct,
    products: IProduct[],
    categories: string[],
}

// export interface ProductProps {
//     _id: string,
//     productName: string,
//     shortName: string,
//     productTitle: string,
//     price: number,
//     description: string,
//     category: 'headphones' | 'speakers' | 'earphones',
//     features: string[],
//     inTheBox: [
//         {
//             quantity: number,
//             item: string,
//
//         }
//     ],
//     isNewProduct?: boolean,
//
// }

export interface LoginSwitchProps {
    register: boolean,
    setRegister: (value: boolean) => void
}

export interface LoginUserProps {
    email: string,
    password: string,
    remember: boolean
}

export interface IModalProps {
    isOpen: boolean;
}

export interface IRegistrationModalProps extends IModalProps {
    message: string;
}

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
    zip: string,
    city: string,
    country: string,
}

export interface IOrder {
    orderId: string,
    userId?: string,
    address: IAddress,
    orderDate: string,
    items: cartItem[],
    paymentMethod: "credit-card" | "cash-on-delivery",
    paid: 0 | 1,
}

export interface IProduct {
    _id: string,
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

export interface CategoryCardProps {
    name: string,
    img: string,
    path: string
}

export interface cartItem {
    product: IProduct,
    quantity: number
}

export interface cartState {
    items: cartItem[]
}

export interface UserDataProps {
    user: {
        _id: string,
        name: string,
        email: string,
        address: IAddress,
        role: string,
        orders: []
    },
    orders: IOrder[],
}


export interface HomePageProps {
    categories: string[],
    order: IOrder[]
}

export interface OrderCompletedProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    order: IOrder[] | [];
}

export interface AddToCartButtonProps {
    product: IProduct,
    quantity: number,
}

export interface StripeCheckoutProps {
    quantity: number,
    price_data: {
        currency: string,
        product_data: {
            name: string,
        },
        unit_amount: number,
    }
}

export interface ProductsListProps {
    products: IProduct[],
}

export interface UserOrdersPreviewProps {
    orders: IOrder[],
}

export interface OrderPreviewProps {
    order: IOrder,
}

export interface MobileMenuModalProps {
    isOpen: boolean,
}

export interface ShoppingCartProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
export interface CategoryPageProps {
    products: ProductProps[],
    categories: string[],
    currentCategory: string,
}

export interface ProductPageProps {
    product: ProductProps[],
    products: ProductProps[],
    categories: string[],
}

export interface ProductProps {
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
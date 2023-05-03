import React, {FunctionComponent} from 'react';
import {PrimaryButton} from "@/styles/global";
import {useDispatch} from "react-redux";
import {increaseItemAmount} from "@/features/cart/cartSlice";
import {ProductProps} from "@/interfaces/products_interfaces";


interface OwnProps {
    product: ProductProps;
    quantity: number;

}

type Props = OwnProps;

const AddToCartButton: FunctionComponent<Props> = ({product, quantity}) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product: ProductProps, quantity: number) => {
        dispatch(increaseItemAmount({product, quantity}))
    }
    return (
        <PrimaryButton onClick={() => handleAddToCart(product, quantity)}>
            Add to cart
        </PrimaryButton>
    );
};

export default AddToCartButton;

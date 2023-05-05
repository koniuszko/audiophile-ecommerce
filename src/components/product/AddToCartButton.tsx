import React, {FunctionComponent} from 'react';
import {PrimaryButton} from "@/styles/global";
import {useDispatch} from "react-redux";
import {increaseItemAmount} from "@/features/cart/cartSlice";
import {AddToCartButtonProps, IProduct} from "@/interfaces/interfaces";


type Props = AddToCartButtonProps;

const AddToCartButton: FunctionComponent<Props> = ({product, quantity}) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product: IProduct, quantity: number) => {
        dispatch(increaseItemAmount({product, quantity}))
    }
    return (
        <PrimaryButton onClick={() => handleAddToCart(product, quantity)}>
            Add to cart
        </PrimaryButton>
    );
};

export default AddToCartButton;

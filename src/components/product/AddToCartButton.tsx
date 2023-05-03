import React, {FunctionComponent} from 'react';
import {PrimaryButton} from "@/styles/global";

interface OwnProps {
}

type Props = OwnProps;

const AddToCartButton: FunctionComponent<Props> = (props) => {

    return (
        <PrimaryButton>
            Add to cart
        </PrimaryButton>
    );
};

export default AddToCartButton;

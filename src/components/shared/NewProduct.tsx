import React, {FunctionComponent} from 'react';
import {Overline} from "@/styles/textStyles";

interface OwnProps {
    color?: string
    className?: string
}

type Props = OwnProps;

const NewProduct: FunctionComponent<Props> = ({color, className}) => {
    const textColor = color === "gray" ? "#808080" : "#d87d4a";
    return (
        <Overline className={className} color={textColor}>
            new product
        </Overline>
    );
};

export default NewProduct;

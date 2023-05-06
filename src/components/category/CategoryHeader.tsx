import React, {FunctionComponent} from 'react';
import {WhiteH2} from "@/styles/textStyles";
import {StyledHeader} from "@/styles/global";
import {CategoryHeaderProps} from "@/interfaces/interfaces";

type Props = CategoryHeaderProps;

const CategoryHeader: FunctionComponent<Props> = ({currentCategory}) => {

    return (
        <StyledHeader>
            <WhiteH2>
                {currentCategory}
            </WhiteH2>
        </StyledHeader>
    );
};

export default CategoryHeader;

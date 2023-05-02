import React, {FunctionComponent} from 'react';
import {WhiteH2} from "@/styles/textStyles";
import {StyledHeader} from "@/styles/global";

interface OwnProps {
    currentCategory: string
}

type Props = OwnProps;

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

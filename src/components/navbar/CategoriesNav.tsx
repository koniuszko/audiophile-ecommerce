import React, {FunctionComponent} from 'react';
import Image from "next/image";
import {H6} from "@/styles/textStyles";
import ShopLink from "@/components/shared/ShopLink";
import {CategoryCardWrapper} from "@/styles/components";
import styled from "styled-components";

interface OwnProps {
    categories: string[]
}

type Props = OwnProps;

const CategoryCard = ({category}: { category: string }) => {
    return (
        <CategoryCardWrapper>
            <Image className="category-image" src={`/assets/shared/image-category-thumbnail-${category}.png`}
                   alt={category}
                   width={130} height={130}/>
            <H6 className="category-name">{category}</H6>
            <ShopLink className="category-link" path={`/category/${category}`}/>
        </CategoryCardWrapper>
    )
}

const NavWrapper = styled.div`
  margin: 92px auto 120px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 68px;
`

const CategoriesNav: FunctionComponent<Props> = ({categories}) => {
    return (
        <NavWrapper>
            {categories.map((category, index) => (
                <CategoryCard key={index} category={category}/>
            ))}
        </NavWrapper>
    );
};

export default CategoriesNav;


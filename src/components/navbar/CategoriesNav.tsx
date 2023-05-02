import React, {FunctionComponent} from 'react';
import {CategoryCardProps} from "@/interfaces/navbar_interfaces";
import Image from "next/image";
import {H6} from "@/styles/textStyles";
import ShopLink from "@/components/shared/ShopLink";
import {CategoryCardWrapper} from "@/styles/components";
import styled from "styled-components";

interface OwnProps {
    categories: CategoryCardProps[]
}

type Props = OwnProps;

const CategoryCard = ({name, img, path}: CategoryCardProps) => {
    return (
        <CategoryCardWrapper>
            <Image className="category-image" src={img} alt={name} width={130} height={130}/>
            <H6 className="category-name">{name}</H6>
            <ShopLink className="category-link" path={path}/>
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
    console.log(categories)
    return (
        <NavWrapper>
            {categories.map((category, index) => (
                <CategoryCard key={index} {...category}/>
            ))}
        </NavWrapper>
    );
};

export default CategoriesNav;


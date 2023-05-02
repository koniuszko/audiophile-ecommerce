import React, {FunctionComponent} from 'react';
import styled from "styled-components";

import Image from "next/image";
import {H6} from "@/styles/textStyles";
import {CategoryCardProps} from "@/interfaces/navbar_interfaces";
import ShopLink from "@/components/shared/ShopLink";
import {CategoryCardWrapper} from "@/styles/components";
import {GetStaticProps} from "next";

interface OwnProps {
    isOpen: boolean
}

type Props = OwnProps;

const categories = [
    {
        name: "headphones",
        path: '/category/headphones',
        img: '/assets/shared/image-category-thumbnail-headphones.png'
    },
    {
        name: "speakers",
        path: '/category/speakers',
        img: '/assets/shared/image-category-thumbnail-speakers.png'
    },
    {
        name: "earphones",
        path: '/category/earphones',
        img: '/assets/shared/image-category-thumbnail-earphones.png'
    }]


const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 90px;
  left: 0;
  right: 0;
  min-height: calc(100% - 90px);
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({isOpen}) => (isOpen ? "flex" : "none")};
  align-items: flex-start;
`;

const MobileMenuContent = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 84px 24px 24px;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  max-height: calc(100vh - 90px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 68px;
`;


const CategoryCard = ({name, img, path}: CategoryCardProps) => {
    return (
        <CategoryCardWrapper>
            <Image className="category-image" src={img} alt={name} width={130} height={130}/>
            <H6 className="category-name">{name}</H6>
            <ShopLink className="category-link" path={path}/>
        </CategoryCardWrapper>
    )
}

const MobileMenuModal: FunctionComponent<Props> = ({isOpen}) => {

    return (
        <MobileMenuWrapper isOpen={isOpen}>
            <MobileMenuContent>
                {categories.map((category) => {
                    return (
                        <CategoryCard
                            key={category.name}
                            name={category.name}
                            img={category.img}
                            path={category.path}
                        />)
                })}
            </MobileMenuContent>
        </MobileMenuWrapper>
    );
};

export default MobileMenuModal;


export const getStaticProps: GetStaticProps = async (context) => {
    const res = await import("@/data/data.json");
    const categories = await res.categories
    return {
        props: {
            categories
        }
    }
}
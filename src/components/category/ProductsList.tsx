import React, {FunctionComponent} from 'react';
import {ProductProps} from "@/interfaces/products_interfaces";
import styled from "styled-components";
import Image from "next/image";
import NewProduct from "@/components/shared/NewProduct";
import {BlackH2, Paragraph} from "@/styles/textStyles";
import SeeProductButton from "@/components/shared/SeeProductButton";

interface OwnProps {
    products: ProductProps[]
}

type Props = OwnProps;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  img {
    border-radius: 8px;
  }
`

const ProductsWrapper = styled.div`
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;

`


const ProductCard = ({product}: { product: ProductProps }) => {

    return (
        <CardWrapper>
            <Image src={`/assets/${product.productName}/mobile/image-category-page-preview.jpg`}
                   alt={product.productName} width={327} height={352}/>
            {product.isNewProduct && <NewProduct/>}
            <BlackH2>
                {product.productTitle}
            </BlackH2>
            <Paragraph>
                {product.description}
            </Paragraph>
            <SeeProductButton type={'primary'} path={`/products/${product.productName}`}/>
        </CardWrapper>
    )
}

const ProductsList: FunctionComponent<Props> = ({products}) => {
    console.log(products)
    return (
        <ProductsWrapper>
            {products.map((product, index) => (
                <ProductCard key={index} product={product}/>
            )).reverse()}
        </ProductsWrapper>
    );
};

export default ProductsList;

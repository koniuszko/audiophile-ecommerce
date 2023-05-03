import React, {FunctionComponent} from 'react';
import {ProductProps} from "@/interfaces/products_interfaces";
import styled from "styled-components";
import {H3, H4} from "@/styles/textStyles";
import Image from "next/image";
import SeeProductButton from "@/components/shared/SeeProductButton";

interface OwnProps {
    products: ProductProps[]
}

type Props = OwnProps;


const OtherProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  img {
    border-radius: 8px;
  }
`

const OtherProductsWrapper = styled.div`
  margin: 120px auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`


const OtherProductCard = ({product}: { product: ProductProps }) => {

    return (
        <OtherProductCardWrapper>
            <Image src={`/assets/shared/mobile/${product.productName}.jpg`}
                   alt={product.productName} width={327} height={120}/>
            <H4>
                {product.productTitle.replace("headphones", "")}
            </H4>
            <SeeProductButton type={'primary'} path={`/products/${product.productName}`}/>
        </OtherProductCardWrapper>
    )
}

const OtherProducts: FunctionComponent<Props> = ({products}) => {
    const recommendedProducts = products.filter(product => product.category === "headphones" || product.category === "speakers");
    const randomProducts = recommendedProducts.sort(() => Math.random() - Math.random()).slice(0, 3);
    return (
        <OtherProductsWrapper>
            <H3>
                You may also like
            </H3>
            {randomProducts.map((product, index) => (
                <OtherProductCard key={index} product={product}/>
            ))}
        </OtherProductsWrapper>
    );
};

export default OtherProducts;

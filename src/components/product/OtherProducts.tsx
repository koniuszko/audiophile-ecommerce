import React, {FunctionComponent} from 'react';
import {IProduct, ProductsListProps} from "@/interfaces/interfaces";
import styled from "styled-components";
import {H3, H4} from "@/styles/textStyles";
import Image from "next/image";
import SeeProductButton from "@/components/shared/SeeProductButton";
import {useRouter} from "next/router";
import useWidth from "@/utils/hooks/useWidth";


const OtherProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  img {
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    gap: 32px;
  }
`

const OtherProductsWrapper = styled.div`
  margin: 120px auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  .product-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 56px;
  }

  @media (min-width: 768px) {
    padding: 0 40px;

    .product-container {
      padding: 0 40px;
      flex-direction: row;
      justify-content: space-between;
      gap: 10px;
    }
  }
`

const OtherProductCard = ({product}: { product: IProduct }) => {

    const width = useWidth();

    const imageProps = width < 768 ? {size: 'mobile', width: 327, height: 120} :
        width < 1440 ? {
                size: 'tablet',
                width: 223,
                height: 318
            } :
            {
                size: 'desktop', width: 327, height: 120
            };


    return (
        <OtherProductCardWrapper>
            <Image src={`/assets/shared/${imageProps.size}/${product.productName}.jpg`}
                   alt={product.productName} width={imageProps.width} height={imageProps.height}/>
            <H4>
                {product.productTitle.replace("headphones", "")}
            </H4>
            <SeeProductButton type={'primary'} path={`/products/${product.productName}`}/>
        </OtherProductCardWrapper>
    )
}

type Props = ProductsListProps;

const OtherProducts: FunctionComponent<Props> = ({products}) => {
    const router = useRouter();

    const recommendedProducts = products.filter(product => product.category === "headphones" || product.category === "speakers").filter(product => product.productName !== router.query.name);

    const randomProducts = recommendedProducts.sort(() => Math.random() - Math.random()).slice(0, 3);

    return (
        <OtherProductsWrapper>
            <H3>
                You may also like
            </H3>
            ,
            <div className="product-container">
                {randomProducts.map((product, index) => (
                    <OtherProductCard key={index} product={product}/>
                ))}
            </div>
        </OtherProductsWrapper>
    );
};

export default OtherProducts;

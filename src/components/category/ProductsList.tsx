import React, {FunctionComponent} from 'react';
import {IProduct, ProductsListProps} from "@/interfaces/interfaces";
import styled from "styled-components";
import Image from "next/image";
import NewProduct from "@/components/shared/NewProduct";
import {BlackH2, Paragraph} from "@/styles/textStyles";
import SeeProductButton from "@/components/shared/SeeProductButton";
import useWidth from "@/utils/hooks/useWidth";


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  img {
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    .card-description {
      padding: 0 80px;
      text-align: center;
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 124px;

    .card-container {
      align-items: flex-start;
    }

    .card-description {
      padding: 0;
      text-align: left;
    }
  }
`

const ProductsWrapper = styled.div`
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;

  @media (min-width: 768px) {
    padding: 120px 40px 0;
  }

  @media (min-width: 1440px) {
    width: 1100px;
    margin: 160px auto;
    padding: 0;

    .card:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`
const ProductCard = ({product}: { product: IProduct }) => {
    const width = useWidth();

    const screenSize = width < 768 ? {img: 'mobile', width: 327, height: 352}
        : width < 1440 ? {img: 'tablet', width: 689, height: 352} : {img: 'desktop', width: 540, height: 560};

    return (
        <CardWrapper className='card'>
            <Image src={`/assets/${product.productName}/${screenSize.img}/image-category-page-preview.jpg`}
                   alt={product.productName} width={screenSize.width} height={screenSize.height}/>
            <div className="card-container">
                {product.isNewProduct && <NewProduct/>}
                <BlackH2 className="card-description">
                    {product.productTitle}
                </BlackH2>
                <Paragraph className="card-description">
                    {product.description}
                </Paragraph>
                <SeeProductButton type={'primary'} path={`/products/${product.productName}`}/>
            </div>
        </CardWrapper>
    )
}

type Props = ProductsListProps;
const ProductsList: FunctionComponent<Props> = ({products}) => {
    return (
        <ProductsWrapper>
            {products.map((product, index) => (
                <ProductCard key={index} product={product}/>
            )).reverse()}
        </ProductsWrapper>
    );
};

export default ProductsList;

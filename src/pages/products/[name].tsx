import MainLayout from "@/layouts/MainLayout";
import CategoriesNav from "@/components/navbar/CategoriesNav";
import About from "@/components/shared/About";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {IProduct, ProductPageProps} from "@/interfaces/interfaces";
import Image from "next/image";
import styled from "styled-components";
import NewProduct from "@/components/shared/NewProduct";
import {BlackH2, ColorText, H3, Paragraph, PriceText} from "@/styles/textStyles";
import AddToCartButton from "@/components/product/AddToCartButton";
import QuantityControl from "@/components/product/QuantityControl";
import {useEffect, useState} from "react";
import GoBackButton from "@/components/shared/GoBackButton";
import dynamic from "next/dynamic";

const ProductSection = styled.section`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  p, h2, h3 {
    text-align: left;
  }

  h3 {
    margin-top: 48px;
  }
;

  img {
    border-radius: 8px;
  }

  li {
    margin-top: 8px;
  }

  .include-quantity {
    margin-right: 16px;
  }

  .product-gallery {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 48px;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`

const DynamicOthers = dynamic(() => import("@/components/product/OtherProducts"), {ssr: false})

export default function Product({categories, product, products}: ProductPageProps) {
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        setQuantity(1)
    }, [product])

    return (
        <MainLayout>
            <ProductSection>
                <GoBackButton/>
                <Image src={`/assets/${product.productName}/mobile/image-product.jpg`}
                       alt={`${product.productName} image`}
                       width={327} height={327}/>
                {product.isNewProduct && <NewProduct/>}
                <BlackH2>
                    {product.productTitle}
                </BlackH2>
                <Paragraph>
                    {product.description}
                </Paragraph>
                <PriceText>
                    $ {product.price}
                </PriceText>
                <ButtonsWrapper>
                    <QuantityControl quantity={quantity} setQuantity={setQuantity}/>
                    <AddToCartButton product={product} quantity={quantity}/>
                </ButtonsWrapper>
                <H3>
                    Features
                </H3>
                {product.features.map((feature, index) => (
                    <Paragraph key={index}>
                        {feature}
                    </Paragraph>
                ))}
                <H3>
                    In the box
                </H3>
                <ul className="product-includes">
                    {product.inTheBox.map((include, index) => (
                        <li key={index}>
                            <Paragraph>
                                <ColorText className='include-quantity'>{include.quantity}x </ColorText>{include.item}
                            </Paragraph>
                        </li>
                    ))}
                </ul>
                <div className="product-gallery">
                    <Image src={`/assets/${product.productName}/mobile/image-gallery-1.jpg`}
                           alt={`${product.productName} image`}
                           width={327} height={174}/>
                    <Image src={`/assets/${product.productName}/mobile/image-gallery-2.jpg`}
                           alt={`${product.productName} image`}
                           width={327} height={174}/>
                    <Image src={`/assets/${product.productName}/mobile/image-gallery-3.jpg`}
                           alt={`${product.productName} image`}
                           width={327} height={368}/>
                </div>
            </ProductSection>
            <DynamicOthers products={products}/>
            <CategoriesNav categories={categories}/>
            <About/>
        </MainLayout>
    )
}


export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const res = await axios.get(`http://localhost:3000/api/products`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err)
        })
    const categories = [...new Set<string>(res.map((product: IProduct) => product.category))]
    const products = res
    const product = res.find((product: IProduct) => product.productName === context.params?.name)
    console.log(products)
    return {
        props: {
            categories,
            product,
            products
        }
    }
}
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get("http://localhost:3000/api/products")
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err)
        })
    const productsNames = [...new Set<string>(res.map((product: IProduct) => product.productName))]
    const paths = productsNames.map(
        (name: string) => {
            return {
                params: {name}
            }
        }
    )
    return {
        paths: paths,
        fallback: false
    }
}


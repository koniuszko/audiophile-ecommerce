import MainLayout from "@/layouts/MainLayout";
import CategoriesNav from "@/components/navbar/CategoriesNav";
import About from "@/components/shared/About";
import {GetStaticPaths, GetStaticProps} from "next";
import axios from "axios";
import {ProductPageProps} from "@/interfaces/products_interfaces";
import Image from "next/image";
import styled from "styled-components";
import NewProduct from "@/components/shared/NewProduct";
import {BlackH2, ColorText, H3, Paragraph, ParagraphBold, PriceText} from "@/styles/textStyles";
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
    const [item] = product

    useEffect(() => {
        setQuantity(1)
    }, [item])

    return (
        <MainLayout>
            <ProductSection>
                <GoBackButton/>
                <Image src={`/assets/${item.productName}/mobile/image-product.jpg`}
                       alt={`${item.productName} image`}
                       width={327} height={327}/>
                {item.isNewProduct && <NewProduct/>}
                <BlackH2>
                    {item.productTitle}
                </BlackH2>
                <Paragraph>
                    {item.description}
                </Paragraph>
                <PriceText>
                    $ {item.price}
                </PriceText>
                <ButtonsWrapper>
                    <QuantityControl quantity={quantity} setQuantity={setQuantity}/>
                    <AddToCartButton product={item} quantity={quantity}/>
                </ButtonsWrapper>
                <H3>
                    Features
                </H3>
                {item.features.map((feature, index) => (
                    <Paragraph key={index}>
                        {feature}
                    </Paragraph>
                ))}
                <H3>
                    In the box
                </H3>
                <ul className="product-includes">
                    {item.inTheBox.map((include, index) => (
                        <li key={index}>
                            <Paragraph>
                                <ColorText className='include-quantity'>{include.quantity}x </ColorText>{include.item}
                            </Paragraph>
                        </li>
                    ))}
                </ul>
                <div className="product-gallery">
                    <Image src={`/assets/${item.productName}/mobile/image-gallery-1.jpg`}
                           alt={`${item.productName} image`}
                           width={327} height={174}/>
                    <Image src={`/assets/${item.productName}/mobile/image-gallery-2.jpg`}
                           alt={`${item.productName} image`}
                           width={327} height={174}/>
                    <Image src={`/assets/${item.productName}/mobile/image-gallery-3.jpg`}
                           alt={`${item.productName} image`}
                           width={327} height={368}/>
                </div>
            </ProductSection>
            <DynamicOthers products={products}/>
            <CategoriesNav categories={categories}/>
            <About/>
        </MainLayout>
    )
}


export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get(`http://localhost:3000/api/products`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err)
        })
    const categories = [...new Set<string>(res.map((product: any) => product.category))]
    const products = res
    const product = res.filter((product: any) => product.productName === context.params?.name)
    console.log(products)
    return {
        props: {
            categories,
            product,
            products
        }
    }
}
export const getStaticPaths: GetStaticPaths = async (context) => {
    const res = await axios.get("http://localhost:3000/api/products")
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err)
        })
    const productsNames = [...new Set<string>(res.map((product: any) => product.productName))]
    const paths = productsNames.map(
        (name: any) => {
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


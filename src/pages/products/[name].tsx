// import MainLayout from "@/layouts/MainLayout";
// import CategoriesNav from "@/components/navbar/CategoriesNav";
// import About from "@/components/shared/About";
// import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
// import axios from "axios";
// import {IProduct, ProductPageProps} from "@/interfaces/interfaces";
// import Image from "next/image";
// import styled from "styled-components";
// import NewProduct from "@/components/shared/NewProduct";
// import {BlackH2, ColorText, H3, Paragraph, PriceText} from "@/styles/textStyles";
// import AddToCartButton from "@/components/product/AddToCartButton";
// import QuantityControl from "@/components/product/QuantityControl";
// import {useEffect, useState} from "react";
// import GoBackButton from "@/components/shared/GoBackButton";
// import dynamic from "next/dynamic";
// import {API_URL} from "@/config";
// import useWidth from "@/utils/hooks/useWidth";
//
// const ProductSection = styled.section`
//   padding: 16px 24px;
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//
//   p, h2, h3 {
//     text-align: left;
//   }
//
//
//   img {
//     border-radius: 8px;
//   }
//
//   ul {
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//   }
//
//   .include-quantity {
//     margin-right: 16px;
//   }
//
//   .includes-container {
//     margin-top: 32px;
//     display: flex;
//     flex-direction: column;
//     gap: 24px;
//   }
//
//   .feature-container {
//     display: flex;
//     flex-direction: column;
//     gap: 24px;
//   }
//
//   .product-gallery {
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
//     margin-top: 48px;
//   }
//
//   .product-container {
//     display: flex;
//     flex-direction: column;
//     gap: 24px;
//   }
//
//   .product-description {
//     display: flex;
//     flex-direction: column;
//     gap: 24px;
//   }
//
//   @media (min-width: 768px) {
//     padding: 32px 40px;
//
//     .product-container {
//       flex-direction: row;
//       align-items: center;
//       gap: 70px;
//     }
//
//     .product-description {
//       padding: 0 60px 0 0;
//       gap: 32px;
//     }
//
//     .includes-container {
//       flex-direction: row;
//       align-items: flex-start;
//       justify-content: flex-start;
//       gap: 165px
//     }
//
//     .product-gallery {
//       height: 368px;
//       flex-wrap: wrap;
//       justify-content: space-between;
//       align-items: center;
//     }
//   }
//
//   @media (min-width: 1440px) {
//     width: 1100px;
//     margin: 0 auto;
//     padding: 80px 0 0;
//
//     .feature-container {
//       width: 60%;
//     }
//
//     .includes-container {
//       flex-direction: column;
//       gap: 32px;
//       margin: 0;
//     }
//
//     .flex-container {
//       display: flex;
//       gap: 125px;
//       margin: 80px auto;
//     }
//
//     .product-gallery {
//       height: 592px;
//     }
//   }
// `
//
// const ButtonsWrapper = styled.div`
//   display: flex;
//   gap: 16px;
// `
//
// const DynamicOthers = dynamic(() => import("@/components/product/OtherProducts"), {ssr: false})
//
// function Product({categories, product, products}: ProductPageProps) {
//     const [quantity, setQuantity] = useState(1)
//
//     const width = useWidth();
//
//     useEffect(() => {
//         setQuantity(1)
//     }, [product])
//
//     const productImages = width < 768 ? {
//         screenSize: 'mobile',
//         mainWidth: 327,
//         mainHeight: 327,
//         gallerySmallWidth: 75,
//         gallerySmallHeight: 75,
//         galleryBigWidth: 327,
//         galleryBigHeight: 327,
//     } : width < 1440 ? {
//         screenSize: 'tablet',
//         mainWidth: 281,
//         mainHeight: 480,
//         gallerySmallWidth: 277,
//         gallerySmallHeight: 174,
//         galleryBigWidth: 395,
//         galleryBigHeight: 368,
//     } : {
//         screenSize: 'desktop',
//         mainWidth: 540,
//         mainHeight: 560,
//         gallerySmallWidth: 445,
//         gallerySmallHeight: 280,
//         galleryBigWidth: 635,
//         galleryBigHeight: 592,
//     }
//
//     return (
//         <MainLayout>
//             <ProductSection>
//                 <GoBackButton/>
//                 <div className="product-container">
//                     <Image src={`/assets/${product.productName}/${productImages.screenSize}/image-product.jpg`}
//                            alt={`${product.productName} image`}
//                            width={productImages.mainWidth} height={productImages.mainHeight}/>
//                     <div className="product-description">
//                         {product.isNewProduct && <NewProduct/>}
//                         <BlackH2>
//                             {product.productTitle}
//                         </BlackH2>
//                         <Paragraph>
//                             {product.description}
//                         </Paragraph>
//                         <PriceText>
//                             $ {product.price}
//                         </PriceText>
//                         <ButtonsWrapper>
//                             <QuantityControl quantity={quantity} setQuantity={setQuantity}/>
//                             <AddToCartButton product={product} quantity={quantity}/>
//                         </ButtonsWrapper>
//                     </div>
//                 </div>
//                 <div className="flex-container">
//                     <div className="feature-container">
//                         <H3>
//                             Features
//                         </H3>
//                         {product.features.map((feature, index) => (
//                             <Paragraph key={index}>
//                                 {feature}
//                             </Paragraph>
//                         ))}
//                     </div>
//                     <div className="includes-container">
//                         <H3>
//                             In the box
//                         </H3>
//                         <ul className="product-includes">
//                             {product.inTheBox.map((include, index) => (
//                                 <li key={index}>
//                                     <Paragraph>
//                                         <ColorText
//                                             className='include-quantity'>{include.quantity}x </ColorText>{include.item}
//                                     </Paragraph>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//
//                 <div className="product-gallery">
//                     <Image src={`/assets/${product.productName}/${productImages.screenSize}/image-gallery-1.jpg`}
//                            alt={`${product.productName} image`}
//                            width={productImages.gallerySmallWidth} height={productImages.gallerySmallHeight}/>
//                     <Image src={`/assets/${product.productName}/${productImages.screenSize}/image-gallery-2.jpg`}
//                            alt={`${product.productName} image`}
//                            width={productImages.gallerySmallWidth} height={productImages.gallerySmallHeight}/>
//                     <Image src={`/assets/${product.productName}/${productImages.screenSize}/image-gallery-3.jpg`}
//                            alt={`${product.productName} image`}
//                            width={productImages.galleryBigWidth} height={productImages.galleryBigHeight}/>
//                 </div>
//             </ProductSection>
//             <DynamicOthers products={products}/>
//             <CategoriesNav categories={categories}/>
//             <About/>
//         </MainLayout>
//     )
// }
//
// export default Product
//
// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
//     const res = await axios.get(`${API_URL}/api/products`)
//         .then((res) => {
//             return res.data
//         }).catch((err) => {
//             console.log(err)
//         })
//     const categories = [...new Set<string>(res.map((product: IProduct) => product.category))]
//     const products = res
//     const product = res.find((product: IProduct) => product.productName === context.params?.name)
//
//     return {
//         props: {
//             categories,
//             product,
//             products
//         }
//     }
// }
// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await axios.get(`${API_URL}/api/products`)
//         .then((res) => {
//             return res.data
//         }).catch((err) => {
//             console.log(err)
//         })
//     const productsNames = [...new Set<string>(res.map((product: IProduct) => product.productName))]
//     const paths = productsNames.map(
//         (name: string) => {
//             return {
//                 params: {name}
//             }
//         }
//     )
//     return {
//         paths: paths,
//         fallback: false
//     }
// }
//

import MainLayout from "@/layouts/MainLayout";
import CategoriesNav from "@/components/navbar/CategoriesNav";
import About from "@/components/shared/About";
import {GetStaticPaths, GetStaticProps} from "next";
import ProductsList from "@/components/category/ProductsList";
import axios from "axios";
import CategoryHeader from "@/components/category/CategoryHeader";
import {CategoryPageProps} from "@/interfaces/interfaces";

export default function Category({products, categories, currentCategory}: CategoryPageProps) {
    console.log(currentCategory)
    return (
        <MainLayout>
            <CategoryHeader currentCategory={currentCategory}/>
            <ProductsList products={products}/>
            <CategoriesNav categories={categories}/>
            <About/>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get("http://localhost:3000/api/products")
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err)
        })
    const categories = [...new Set<string>(res.map((product: any) => product.category))]
    const products = res.filter((product: any) => product.category === context.params?.category)
    return {
        props: {
            categories,
            products,
            currentCategory: context.params?.category
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
    const categories = [...new Set<string>(res.map((product: any) => product.category))]
    const paths = categories.map((category) => {
        return {
            params: {category}
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}


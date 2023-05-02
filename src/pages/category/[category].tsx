import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import CategoriesNav from "@/components/navbar/CategoriesNav";
import {CategoryCardProps} from "@/interfaces/navbar_interfaces";
import About from "@/components/shared/About";
import MainSection from "@/components/home/MainSection";
import {GetStaticPaths, GetStaticProps} from "next";
import ProductsList from "@/pages/category/ProductsList";

export default function Category({categories}: { categories: CategoryCardProps[] }) {
    return (
        <MainLayout>
            <ProductsList>

            </ProductsList>
            <CategoriesNav categories={categories}/>
            <About/>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await import("@/data/data.json");
    const categories = await res.categories
    return {
        props: {
            categories
        }
    }
}
export const getStaticPaths: GetStaticPaths = async (context) => {
    const res = await import("@/data/data.json");
    const categories = await res.categories.map((category: CategoryCardProps) => {
        return {
            params: {category: category.name}
        }
    })
    return {
        paths: categories,
        fallback: false
    }
}


import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import CategoriesNav from "@/components/navbar/CategoriesNav";
import {CategoryCardProps} from "@/interfaces/navbar_interfaces";
import About from "@/components/shared/About";
import MainSection from "@/components/home/MainSection";

export default function Home(categories: { categories: CategoryCardProps[] }) {
    return (
        <MainLayout>
            <Hero/>
            <CategoriesNav {...categories}/>
            <MainSection/>
            <About/>
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const res = await import("@/data/data.json");
    const categories = await res.categories
    return {
        props: {
            categories
        }
    }
}

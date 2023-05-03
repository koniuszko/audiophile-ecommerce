import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import CategoriesNav from "@/components/navbar/CategoriesNav";
import About from "@/components/shared/About";
import MainSection from "@/components/home/MainSection";
import axios from "axios";

export default function Home({categories}: { categories: string[] }) {
    return (
        <MainLayout>
            <Hero/>
            <CategoriesNav categories={categories}/>
            <MainSection/>
            <About/>
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const res = await axios.get("http://localhost:3000/api/products")
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err)
        })
    const categories = [...new Set<string>(res.map((product: any) => product.category))]
    return {
        props: {
            categories
        }
    }
}

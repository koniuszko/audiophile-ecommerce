import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import CategoriesNav from "@/components/navbar/CategoriesNav";
import About from "@/components/shared/About";
import MainSection from "@/components/home/MainSection";
import axios from "axios";
import OrderCompleted from "@/components/checkout/OrderCompleted";
import {useEffect, useState} from "react";
import {HomePageProps, IOrder, IProduct} from "@/interfaces/interfaces";
import {GetServerSidePropsContext} from "next";
import {API_URL} from "@/config";


function Home({categories, order}: HomePageProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        if (window.location.href.includes("success")) {
            setIsModalOpen(true)
        } else {
            setIsModalOpen(false)
        }
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpen])


    return (
        <MainLayout>
            <Hero/>
            <CategoriesNav categories={categories}/>
            <MainSection/>
            <About/>
            {order && <OrderCompleted order={order} isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>}
        </MainLayout>
    )
}

export default Home
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    // const res = await axios.get(`${API_URL}/api/products`)
    //     .then((res) => {
    //         return res.data
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // const categories = [...new Set<string>(res.map((product: IProduct) => product.category))]

    const categories = ['headphones', 'speakers', 'earphones']

    let order: IOrder[] | null = null;
    if (context.req.url?.includes("orderId")) {
        order = await axios.get(`${API_URL}/api/orders/${context.query.orderId}`)
            .then((res) => {
                return res.data
            }).catch((err) => {
                console.log(err)
            })
    }
    return {
        props: {
            categories,
            order: order ? order : null
        }
    }
}

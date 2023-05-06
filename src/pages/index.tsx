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


export default function Home({categories, order}: HomePageProps) {
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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const host = context.req.headers.host

    const res = await axios.get(`http://${host}/api/products`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err)
        })
    const categories = [...new Set<string>(res.map((product: IProduct) => product.category))]

    let order: IOrder[] | null = null;
    if (context.req.url?.includes("orderId")) {
        order = await axios.get(`http://${host}/api/orders/${context.query.orderId}`)
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

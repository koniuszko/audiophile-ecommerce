import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import CategoriesNav from "@/components/navbar/CategoriesNav";
import About from "@/components/shared/About";
import MainSection from "@/components/home/MainSection";
import axios from "axios";
import OrderCompleted from "@/components/checkout/OrderCompleted";
import {useEffect, useState} from "react";


export default function Home({categories, order}: { categories: string[], order: any }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // console.log(order)
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

export const getServerSideProps = async (context: any) => {
    const res = await axios.get("http://localhost:3000/api/products")
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err)
        })
    const categories = [...new Set<string>(res.map((product: any) => product.category))]
    let order: any;
    if (context.req.url.includes("orderId")) {
        order = await axios.get(`http://localhost:3000/api/orders/${context.query.orderId}`)
            .then((res) => {
                // console.log(res.data)
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

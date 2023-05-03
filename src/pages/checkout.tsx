import MainLayout from "@/layouts/MainLayout";
import LoginSwitch from "@/components/login/LoginSwitch";
import {useEffect, useState} from "react";
import styled from "styled-components";
import RegisterForm from "@/components/login/RegisterForm";
import LoginForm from "@/components/login/LoginForm";
import {useRouter} from "next/router";
import {getSession, useSession} from "next-auth/react";
import GoBackButton from "@/components/shared/GoBackButton";
import CheckoutForm from "@/components/checkout/CheckoutForm";

const SectionWrapper = styled.section`
  background-color: #fafafa;
  padding: 16px 24px 96px;
`
export default function Login() {
    const [register, setRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // const router = useRouter();
    //
    // const {data: session} = useSession();
    //
    // useEffect(() => {
    //     return () => {
    //         getSession().then((session) => {
    //             if (session) {
    //                 router.replace(`/login/${session.user.id}`)
    //             } else {
    //                 setIsLoading(false)
    //             }
    //         })
    //     };
    // }, [router]);

    return (
        <MainLayout>
            <SectionWrapper>
                <GoBackButton/>
                <CheckoutForm/>
            </SectionWrapper>
        </MainLayout>
    )
}

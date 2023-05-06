import MainLayout from "@/layouts/MainLayout";
import LoginSwitch from "@/components/login/LoginSwitch";
import {useEffect, useState} from "react";
import styled from "styled-components";
import RegisterForm from "@/components/login/RegisterForm";
import LoginForm from "@/components/login/LoginForm";
import {useRouter} from "next/router";
import {getSession, useSession} from "next-auth/react";

const LoginSection = styled.section`
  @media (min-width: 768px) {
    min-height: calc(100vh - 90px - 383px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export default function Login() {
    const [register, setRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    const {data: session} = useSession();

    useEffect(() => {
        return () => {
            getSession().then((session) => {
                if (session) {
                    router.replace(`/login/${session.user.id}`)
                } else {
                    setIsLoading(false)
                }
            })
        };
    }, [router]);

    return (
        <MainLayout>
            {!isLoading &&
                <LoginSection>
                    <LoginSwitch register={register} setRegister={setRegister}/>
                    {register ? <RegisterForm/> : <LoginForm/>}
                </LoginSection>}
        </MainLayout>
    )
}

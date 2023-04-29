import MainLayout from "@/layouts/MainLayout";
import LoginSwitch from "@/components/login/LoginSwitch";
import {useState} from "react";
import styled from "styled-components";
import RegisterForm from "@/components/login/RegisterForm";
import LoginForm from "@/components/login/LoginForm";

const LoginSection = styled.section`
  //background-color: #FAFAFA;
`
export default function Login() {
    const [register, setRegister] = useState(false);
    return (
        <MainLayout>
            <LoginSection>
                <LoginSwitch register={register} setRegister={setRegister}/>
                {register ? <RegisterForm/> : <LoginForm/>}
            </LoginSection>
        </MainLayout>
    )
}

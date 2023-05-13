import MainLayout from "@/layouts/MainLayout";
import LoginSwitch from "@/components/login/LoginSwitch";
import { useEffect, useState } from "react";
import styled from "styled-components";
import RegisterForm from "@/components/login/RegisterForm";
import LoginForm from "@/components/login/LoginForm";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import { InfinitySpin } from "react-loader-spinner";

const LoginSection = styled.section`
  @media (min-width: 768px) {
    min-height: calc(100vh - 90px - 383px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LoadingWrapper = styled.div`
  min-height: calc(100vh - 90px - 664px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-height: calc(100vh - 90px - 383px);
  }
  @media (min-width: 1440px) {
    min-height: calc(100vh - 90px - 408px);
  }
`;

function LoginPage() {
  const [register, setRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    return () => {
      getSession().then((session) => {
        if (session) {
          router.replace(`/account/${session.user.id}`);
        } else {
          setIsLoading(false);
        }
      });
    };
  }, [router]);

  return (
    <MainLayout>
      {isLoading ? (
        <LoadingWrapper>
          <InfinitySpin
            width="200"
            color="#d87d4a"
          />
        </LoadingWrapper>
      ) : (
        <LoginSection>
          <LoginSwitch
            register={register}
            setRegister={setRegister}
          />
          {register ? <RegisterForm /> : <LoginForm />}
        </LoginSection>
      )}
    </MainLayout>
  );
}

export default LoginPage;

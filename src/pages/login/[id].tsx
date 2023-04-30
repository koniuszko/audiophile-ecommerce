import MainLayout from "@/layouts/MainLayout";
import styled from "styled-components";
import {hasToken} from "@/utils/checkUser";
import {dbConnect} from "@/utils/dbConnect";
import User from "@/models/UserModel";
import {GetServerSideProps} from "next";
import {signOut} from "next-auth/react";

const AccountSection = styled.section`

`

interface dataI {
    name: string
}

export default function Account({data}: dataI) {
    const {name} = data;

    return (
        <MainLayout>
            <AccountSection>
                Hello {name}
                <button onClick={() => signOut()}>Logout</button>
            </AccountSection>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const token = await hasToken(context.req)
    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    await dbConnect();
    const data = await User?.findById(context.query.id)
    const userData = JSON.parse(JSON.stringify(data))
    return {
        props: {
            data: userData
        }
    }
}
import MainLayout from "@/layouts/MainLayout";
import styled from "styled-components";
import {hasToken} from "@/utils/checkUser";
import {dbConnect} from "@/utils/dbConnect";
import User from "@/models/UserModel";
import Order from "@/models/OrderModel";
import {GetServerSideProps} from "next";
import {signOut} from "next-auth/react";
import {UserDataProps} from "@/interfaces/interfaces";
import UserOrdersPreview from "@/components/login/UserOrdersPreview";
import {GrayButtonWrapper} from "@/styles/global";
import {BlackH2, BlackParagraph, ColorText} from "@/styles/textStyles";

const AccountSection = styled.section`
  padding: 24px;

  .account-header {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
  }
`


export default function Account({user, orders}: UserDataProps) {
    console.log(user)
    console.log(orders)
    const {name} = user;

    return (
        <MainLayout>
            <AccountSection>
                <BlackH2>Account Details</BlackH2>
                <div className="account-header">
                    <BlackParagraph>
                        Hello, <ColorText>{name}</ColorText>
                    </BlackParagraph>
                    <GrayButtonWrapper onClick={() => signOut()}>Logout</GrayButtonWrapper>
                </div>
            </AccountSection>
            <UserOrdersPreview orders={orders}/>
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
    const user = await User?.findById(context.query.id)
    const userData = JSON.parse(JSON.stringify(user))
    const orders = await Order?.find({userId: context.query.id})
    const userOrders = JSON.parse(JSON.stringify(orders))
    console.log(userOrders)
    return {
        props: {
            user: userData,
            orders: userOrders
        }
    }
}
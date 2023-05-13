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
import {useEffect} from "react";
import {setAddress} from "@/features/address/addressSlice";
import {useDispatch} from "react-redux";
import Link from "next/link";
import CategoryHeader from "@/components/category/CategoryHeader";

const AccountSection = styled.section`
  min-height: calc(100vh - 90px - 664px);

  .account-header {
    margin: 24px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .account-menu {
    display: flex;
    gap: 16px;
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - 90px - 383px);
    .account-header {
      margin: 24px 40px;
      flex-direction: row;
    }
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
    min-height: calc(100vh - 90px - 408px);
  }
`;

function Account({user, orders}: UserDataProps) {
    const {name} = user;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setAddress({
                name: user.name,
                email: user.email,
                phone: user.address.phone,
                street: user.address.street,
                city: user.address.city,
                zip: user.address.zip,
                country: user.address.country,
            })
        );
    }, []);

    return (
        <MainLayout>
            <AccountSection>
                <CategoryHeader currentCategory="account details"/>
                <div className="account-header">
                    <BlackParagraph>
                        Hello, <ColorText>{name}</ColorText>
                    </BlackParagraph>
                    <div className="account-menu">
                        <Link href={`address/${user._id}`}>
                            <GrayButtonWrapper>Billing Address</GrayButtonWrapper>
                        </Link>
                        <Link href={`password/${user._id}`}>
                            <GrayButtonWrapper>Change password</GrayButtonWrapper>
                        </Link>
                        <GrayButtonWrapper onClick={() => {
                            localStorage.removeItem("persist:root");
                            signOut()
                        }}>
                            Logout
                        </GrayButtonWrapper>
                    </div>
                </div>
                <UserOrdersPreview orders={orders}/>
            </AccountSection>
        </MainLayout>
    );
}

export default Account;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const token = await hasToken(context.req);
    if (!token) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    await dbConnect();
    const user = await User?.findById(context.query.id);
    const userData = JSON.parse(JSON.stringify(user));
    const orders = await Order?.find({userId: context.query.id});
    const userOrders = JSON.parse(JSON.stringify(orders));
    return {
        props: {
            user: userData,
            orders: userOrders,
        },
    };
};

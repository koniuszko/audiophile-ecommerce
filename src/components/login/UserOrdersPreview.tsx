import React, {FunctionComponent} from 'react';
import {H3} from "@/styles/textStyles";

import {IOrder, UserOrdersPreviewProps} from "@/interfaces/interfaces";

import styled from "styled-components";
import OrderPreview from "@/components/login/OrderPreview";


const OrdersPreviewWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 540px;
  }
`


type Props = UserOrdersPreviewProps;
const UserOrdersPreview: FunctionComponent<Props> = ({orders}) => {
    return (
        <OrdersPreviewWrapper>
            <H3>Your Orders</H3>
            {orders.map((order: IOrder, index) => <OrderPreview key={index} order={order}/>)}
        </OrdersPreviewWrapper>
    );
};

export default UserOrdersPreview;

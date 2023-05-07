import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import Image from "next/image";
import cashOnDelivery from "@assets/icons/icon-cash-on-delivery.svg";
import {Paragraph} from "@/styles/textStyles";


const CashOnDeliveryWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const CashOnDeliveryDescription: FunctionComponent = () => {

    return (
        <CashOnDeliveryWrapper>
            <Image src={cashOnDelivery} alt={"cash on delivery"} width={48} height={48}/>
            <Paragraph>
                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your
                residence. Just make sure your address is correct so that your order will not be cancelled.
            </Paragraph>
        </CashOnDeliveryWrapper>
    );
};

export default CashOnDeliveryDescription;

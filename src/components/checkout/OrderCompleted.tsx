import React, {FunctionComponent} from 'react';
import {PrimaryButton} from "@/styles/global";
import Link from "next/link";
import Image from "next/image";
import checkIcon from "@assets/icons/icon-order-confirmation.svg";
import {BlackParagraph, H3, Paragraph, WhiteParagraph} from "@/styles/textStyles";
import styled from "styled-components";
import {cartItem, OrderCompletedProps} from "@/interfaces/interfaces";
import {totalSummary} from "@/utils/helpers";
import {IModalProps} from "@/interfaces/interfaces";

type Props = OrderCompletedProps;

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px;

  .cart-item {
    display: flex;
    align-items: center;
    gap: 16px;

    p, h6 {
      text-align: left;
    }
  }
`

const SummaryWrapper = styled.div`
  background-color: #f1f1f1;
  border-radius: 8px 8px 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  .grand-total {
    background-color: #000;
    border-radius: 0 0 8px 8px;
    padding: 24px;
  }
`

export const OrderCompletionWrapper = styled.div<IModalProps>`
  display: ${({isOpen}) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  align-items: center;
  justify-content: center;
`;

export const OrderCompletionContent = styled.div`
  width: 90%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background-color: #FFF;
  padding: 32px;
  border-radius: 8px;
  overflow-y: auto;
  z-index: 99999;

  .check-icon {
    align-self: flex-start;
  }

  h3, p {
    text-align: left;
  }
`

const CartItem = (item: cartItem) => {
    return (
        <CartItemWrapper>
            <div className="cart-item">
                <Image src={`/assets/cart/${item.product.productName}.jpg`}
                       alt={item.product.productName} width={64} height={64}/>
                <div className="item-details">
                    <BlackParagraph>
                        {item.product.shortName.toUpperCase()}
                    </BlackParagraph>
                    <Paragraph>
                        $ {item.product.price}
                    </Paragraph>
                </div>
            </div>
            <div className="item-quantity">
                <Paragraph>
                    x{item.quantity}
                </Paragraph>
            </div>
        </CartItemWrapper>
    )
}

const OrderCompleted: FunctionComponent<Props> = ({order, isOpen, setIsOpen}) => {
    const [orderItems] = order;
    const items = orderItems?.items
    console.log(order)
    return (
        <OrderCompletionWrapper isOpen={isOpen}>
            <OrderCompletionContent>

                <Image className='check-icon' src={checkIcon} alt={'check-icon'} width={64} height={64}/>
                <H3>Thank you for your order</H3>
                <Paragraph>
                    You will recieve an email confirmation shortly.
                </Paragraph>
                <SummaryWrapper>
                    <div className="summary-items">
                        {items.map(item => <CartItem key={item.product._id} {...item} />)}
                    </div>
                    <div className="grand-total">
                        <Paragraph>
                            GRAND TOTAL
                        </Paragraph>
                        <WhiteParagraph>
                            $ {totalSummary(items) + 50}
                        </WhiteParagraph>
                    </div>
                </SummaryWrapper>
                <Link href={"/"}>
                    <PrimaryButton onClick={() => {
                        setIsOpen(false)
                    }}>Back to Home</PrimaryButton>
                </Link>
            </OrderCompletionContent>
        </OrderCompletionWrapper>
    );
};

export default OrderCompleted;

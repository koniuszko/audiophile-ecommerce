import React, {FunctionComponent, useEffect} from 'react';
import {ModalContent, ModalWrapper, PrimaryButton} from "@/styles/global";
import Link from "next/link";
import Image from "next/image";
import checkIcon from "@assets/icons/icon-order-confirmation.svg";
import {BlackParagraph, ColorParagraph, H3, H6, Paragraph} from "@/styles/textStyles";
import styled from "styled-components";
import {cartItem} from "@/interfaces/cart_interfaces";
import {totalSummary, VatValue} from "@/utils/helpers";

interface OwnProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    order: any
}

type Props = OwnProps;

const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 8px;
  }

  .cart-item {
    display: flex;
    align-items: center;
    gap: 16px;

    p, h6 {
      text-align: left;
    }
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
    const items: any[] = orderItems.items
    console.log(orderItems)
    return (
        <ModalWrapper isOpen={isOpen}>
            <ModalContent>
                <Image src={checkIcon} alt={'check-icon'} width={64} height={64}/>
                <H3>Thank you for your order</H3>
                <Paragraph>
                    You will recieve an email confirmation shortly.
                </Paragraph>
                <div className="summary">
                    <div className="summary-items">
                        {items.map(item => <CartItem key={item.product._id} {...item} />)}
                    </div>

                    <div className="price grand-total">
                        <Paragraph>
                            GRAND TOTAL
                        </Paragraph>
                        <ColorParagraph>
                            $ {totalSummary(items) + 50}
                        </ColorParagraph>
                    </div>

                </div>
                <Link href={"/"}>
                    <PrimaryButton onClick={() => {
                        setIsOpen(false)
                    }}>Back to Home</PrimaryButton>
                </Link>
            </ModalContent>

        </ModalWrapper>
    );
};

export default OrderCompleted;

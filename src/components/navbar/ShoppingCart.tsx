import React, {FunctionComponent} from 'react';
import {ModalWrapper, PrimaryButton} from "@/styles/global";
import {BlackParagraph, H6, Paragraph, PriceText} from "@/styles/textStyles";
import Link from "next/link";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, decreaseItemAmount, increaseItemAmount, selectCartItems} from "@/features/cart/cartSlice";
import {cartItem, ShoppingCartProps} from "@/interfaces/interfaces";
import {GrayButtonWrapper} from "@/styles/components";
import Image from "next/image";
import {totalSummary} from "@/utils/helpers";


const CartContentWrapper = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: absolute;
  top: 114px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #FFF;
  padding: 32px 28px;
  border-radius: 8px;
  overflow-y: auto;
  max-height: 80vh;

  .cart-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-total {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .cart-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media (min-width: 768px) {
    left: initial;
    right: 50px;
    transform: initial;
  }

  @media (min-width: 1440px) {
    right: calc((100vw - 1440px) / 2 + 200px);
  }
`

const CartItemWrapper = styled.div`
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

  .item-quantity {
    background-color: #f1f1f1;
    height: 32px;
    width: 96px;
    display: flex;

    button {
      width: 32px;
      font-size: 13px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: #d87d4a;
      }
    }

    input {
      width: 32px;
      border: none;
      background-color: transparent;
      text-align: center;
      text-selection: none;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
`

const CartItem = (item: cartItem) => {
    const dispatch = useDispatch();

    function incrementQuantity(product: any) {
        const quantity = 1;
        dispatch(increaseItemAmount({product, quantity}));
    }

    function decrementQuantity(product: any) {
        const quantity = 1;
        dispatch(decreaseItemAmount({product, quantity}));
    }

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
                <button onClick={() => decrementQuantity(item.product)}>-</button>
                <input type="text" value={item.quantity} readOnly/>
                <button onClick={() => incrementQuantity(item.product)}>+</button>
            </div>
        </CartItemWrapper>
    )
}

type Props = ShoppingCartProps;

const ShoppingCart: FunctionComponent<Props> = ({isOpen, setIsOpen}) => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const removeAllItems = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <ModalWrapper isOpen={isOpen}>
                <CartContentWrapper>
                    <div className="cart-header">
                        <H6>Cart({cartItems.length})</H6>
                        <GrayButtonWrapper onClick={() => {
                            removeAllItems()
                        }}>
                            Remove all
                        </GrayButtonWrapper>
                    </div>
                    <div className="cart-items">
                        {cartItems.map((item) =>
                            <CartItem key={item.product.productName}
                                      {...item}/>
                        )}
                    </div>
                    <div className="cart-total">
                        <Paragraph>
                            TOTAL
                        </Paragraph>
                        <PriceText>
                            $ {totalSummary(cartItems)}
                        </PriceText>
                    </div>
                    <Link href={'/checkout'}>
                        <PrimaryButton disabled={cartItems.length < 1}>
                            checkout
                        </PrimaryButton>
                    </Link>
                </CartContentWrapper>
            </ModalWrapper>
        </div>
    );
};

export default ShoppingCart;

import React, {FunctionComponent} from 'react';
import {BlackParagraph, Paragraph, WhiteParagraph} from "@/styles/textStyles";
import {totalSummary} from "@/utils/helpers";
import styled from "styled-components";
import {cartItem, OrderPreviewProps} from "@/interfaces/interfaces";
import Image from "next/image";
import * as fns from 'date-fns'

const SummaryWrapper = styled.div`
  background-color: #f1f1f1;
  border-radius: 8px 8px 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  .summary-date {
    padding: 12px 24px 0;
    align-self: flex-end;
  }

  .grand-total {
    background-color: #000;
    border-radius: 0 0 8px 8px;
    padding: 12px 24px;
  }

  p, h6 {
    text-align: left;
  }
`

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;

  .cart-item {
    display: flex;
    align-items: center;
    gap: 8px;
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

type Props = OrderPreviewProps;

const OrderPreview: FunctionComponent<Props> = ({order}) => {
    const {items} = order;
    return (
        <SummaryWrapper>
            <BlackParagraph className="summary-date">
                Order date: {fns.format(new Date(order.orderDate), 'dd MMM yyyy')}
            </BlackParagraph>
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
    );
};

export default OrderPreview;

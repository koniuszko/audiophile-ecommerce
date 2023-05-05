import React, {FunctionComponent, useEffect} from 'react';
import styled from "styled-components";
import {Formik, Form, ErrorMessage} from 'formik'
import axios from "axios";
import {ErrorMsg, FormLabel, InputField, PrimaryButton,} from "@/styles/global";
import {useState} from "react";
import {sleep, totalSummary, VatValue} from "@/utils/helpers";
import {BlackH2, BlackParagraph, ColorParagraph, H6, Paragraph, Subtitle} from "@/styles/textStyles";
import {cartItem, IAddress,} from "@/interfaces/interfaces";
import {useSelector} from "react-redux";
import {selectCartItems} from "@/features/cart/cartSlice";
import Image from "next/image";
import PaymentRadio from "@/components/checkout/PaymentRadio";
import {CheckoutFormValidator} from "@/utils/validators";
import {getSession, useSession} from "next-auth/react";


interface OwnProps {
}

type Props = OwnProps;

const CheckoutWrapper = styled.section`
  margin: 24px auto;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    &-input {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  .checkout {
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    h2 {
      text-align: left;
      align-self: flex-start;
    }
  }

  .summary {
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    h6 {
      align-self: flex-start;
    }
  }

  .summary-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .price {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .price-group {
    width: 100%;
  }
`

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


const CheckoutForm: FunctionComponent<Props> = () => {
    const [radioValue, setRadioValue] = useState('credit-card');
    const [userId, setUserId] = useState("unregistered");

    const cartItems = useSelector(selectCartItems);
    const {data: session} = useSession();

    const shippingFee = cartItems.length > 0 ? 50 : 0;

    useEffect(() => {
        getSession().then(session => {
            if (session) {
                setUserId(session.user.id);
            }
        })
    }, [])


    const checkoutHandler = async (address: IAddress, paymentMethod: string, products: cartItem[], userId: string) => {
        await sleep(500);
        axios.post("/api/checkout", {address, paymentMethod, products, userId})
            .then(res => {
                if (res.status === 200) {
                    window.location.href = res.data.url;
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <CheckoutWrapper>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    street: '',
                    city: '',
                    zip: '',
                    country: '',
                }}
                validationSchema={CheckoutFormValidator}
                onSubmit={(values) => checkoutHandler(values, radioValue, cartItems, userId)}
            >
                <Form className="form">
                    <div className="checkout">
                        <BlackH2>
                            Checkout
                        </BlackH2>
                        <Subtitle>
                            Billing Details
                        </Subtitle>
                        <div className="form-input">
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <ErrorMessage name="name"
                                          render={msg => <ErrorMsg
                                              className={"error-message"}>{msg}</ErrorMsg>}/>
                            <InputField name="name" type="text"/>
                        </div>
                        <div className="form-input">
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <ErrorMessage name="email"
                                          render={msg => <ErrorMsg className="error-message">{msg}</ErrorMsg>}/>
                            <InputField name="email" type="email"/>
                        </div>
                        <div className="form-input">
                            <FormLabel htmlFor="phone">Phone number</FormLabel>
                            <ErrorMessage name="phone"
                                          render={msg => <ErrorMsg className="error-message">{msg}</ErrorMsg>}/>
                            <InputField name="phone" type="phone"/>
                        </div>
                        <Subtitle>
                            Shipping Info
                        </Subtitle>
                        <div className="form-input">
                            <FormLabel htmlFor="street">Your address</FormLabel>
                            <ErrorMessage name="street"
                                          render={msg => <ErrorMsg className="error-message">{msg}</ErrorMsg>}/>
                            <InputField name="street" type="street"/>
                        </div>
                        <div className="form-input">
                            <FormLabel htmlFor="zip">ZIP code</FormLabel>
                            <ErrorMessage name="zip"
                                          render={msg => <ErrorMsg className="error-message">{msg}</ErrorMsg>}/>
                            <InputField name="zip" type="zip"/>
                        </div>
                        <div className="form-input">
                            <FormLabel htmlFor="city">City</FormLabel>
                            <ErrorMessage name="city"
                                          render={msg => <ErrorMsg className="error-message">{msg}</ErrorMsg>}/>
                            <InputField name="city" type="city"/>
                        </div>
                        <div className="form-input">
                            <FormLabel htmlFor="country">Country</FormLabel>
                            <ErrorMessage name="country"
                                          render={msg => <ErrorMsg className="error-message">{msg}</ErrorMsg>}/>
                            <InputField name="country" type="country"/>
                        </div>
                        <Subtitle>
                            Payment details
                        </Subtitle>
                        <div className="form-input radio">
                            <FormLabel htmlFor="payment">Payment method</FormLabel>
                            <PaymentRadio radioValue={radioValue} setRadioValue={setRadioValue}/>
                        </div>
                    </div>
                    <div className="summary">
                        <H6>
                            Summary
                        </H6>
                        <div className="summary-items">
                            {cartItems.map(item => <CartItem key={item.product._id} {...item} />)}
                        </div>
                        <div className="price-group">
                            <div className="price summary-total">
                                <Paragraph>
                                    TOTAL
                                </Paragraph>
                                <BlackParagraph>
                                    $ {totalSummary(cartItems)}
                                </BlackParagraph>
                            </div>
                            <div className="price shipping">
                                <Paragraph>
                                    SHIPPING
                                </Paragraph>
                                <BlackParagraph>
                                    $ {shippingFee}
                                </BlackParagraph>
                            </div>
                            <div className="price vat">
                                <Paragraph>
                                    VAT (INCLUDED)
                                </Paragraph>
                                <BlackParagraph>
                                    $ {VatValue(cartItems)}
                                </BlackParagraph>
                            </div>
                        </div>
                        <div className="price grand-total">
                            <Paragraph>
                                GRAND TOTAL
                            </Paragraph>
                            <ColorParagraph>
                                $ {totalSummary(cartItems) + shippingFee}
                            </ColorParagraph>
                        </div>
                        <PrimaryButton type="submit">
                            Continue & Pay
                        </PrimaryButton>
                    </div>

                </Form>
            </Formik>
        </CheckoutWrapper>
    );
};

export default CheckoutForm;

import MainLayout from "@/layouts/MainLayout";
import styled from "styled-components";
import { hasToken } from "@/utils/checkUser";
import { dbConnect } from "@/utils/dbConnect";
import User from "@/models/UserModel";
import { GetServerSideProps } from "next";
import {
  UserDataProps,
  IAddress,
  BillingAddressProps,
} from "@/interfaces/interfaces";
import {
  ErrorMsg,
  FormLabel,
  InputField,
  PrimaryButton,
} from "@/styles/global";
import { Subtitle } from "@/styles/textStyles";
import { ErrorMessage, Form, Formik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AddressValidator } from "@/utils/validators";
import { selectAddress } from "@/features/address/addressSlice";
import { useRouter } from "next/router";
import { sleep } from "@/utils/helpers";
import axios from "axios";
import GoBackButton from "@/components/shared/GoBackButton";

const AddressSection = styled.section`
  margin: 24px auto;
  width: 90%;

  .form {
    margin: 24px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    &-input {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;

      input:invalid {
        border: 1px soldi red;
      }

      &-label {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .billing-details {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .shipping-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .price {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .price-group {
    width: 100%;
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - 90px - 383px);
  }

  @media (min-width: 1440px) {
    width: 1100px;
    margin: 0 auto;
    min-height: calc(100vh - 90px - 408px);

    .checkout {
      width: 100%;
      padding: 40px;
    }
  }
`;

function Address({ user }: UserDataProps) {
  const [address, setAddress] = useState<IAddress>(useSelector(selectAddress));

  const router = useRouter();

  const addressChangeHandler = async (address: BillingAddressProps) => {
    const billingAddress: BillingAddressProps = {
      phone: address.phone,
      street: address.street,
      city: address.city,
      zip: address.zip,
      country: address.country,
    };
    await sleep(500);
    axios
      .put(`/api/address/${user._id}`, billingAddress)
      .then((res) => {
        if (res.status === 200) {
          router.push(`/account/${user._id}`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainLayout>
      <AddressSection>
        <GoBackButton />
        <Formik
          initialValues={address}
          validationSchema={AddressValidator}
          onSubmit={(values) => addressChangeHandler(values)}
        >
          <Form className="form">
            <Subtitle>Defalut Shipping Address</Subtitle>
            <div className="form-input">
              <div className="form-input-label">
                <FormLabel htmlFor="phone">Phone number</FormLabel>
                <ErrorMessage
                  name="phone"
                  render={(msg) => (
                    <ErrorMsg className="error-message">{msg}</ErrorMsg>
                  )}
                />
              </div>
              <InputField
                name="phone"
                type="phone"
              />
            </div>
            <div className="form-input">
              <FormLabel htmlFor="street">Your address</FormLabel>
              <ErrorMessage
                name="street"
                render={(msg) => (
                  <ErrorMsg className="error-message">{msg}</ErrorMsg>
                )}
              />
              <InputField
                name="street"
                type="street"
              />
            </div>
            <div className="form-input">
              <FormLabel htmlFor="zip">ZIP code</FormLabel>
              <ErrorMessage
                name="zip"
                render={(msg) => (
                  <ErrorMsg className="error-message">{msg}</ErrorMsg>
                )}
              />
              <InputField
                name="zip"
                type="zip"
              />
            </div>
            <div className="form-input">
              <FormLabel htmlFor="city">City</FormLabel>
              <ErrorMessage
                name="city"
                render={(msg) => (
                  <ErrorMsg className="error-message">{msg}</ErrorMsg>
                )}
              />
              <InputField
                name="city"
                type="city"
              />
            </div>
            <div className="form-input">
              <FormLabel htmlFor="country">Country</FormLabel>
              <ErrorMessage
                name="country"
                render={(msg) => (
                  <ErrorMsg className="error-message">{msg}</ErrorMsg>
                )}
              />
              <InputField
                name="country"
                type="country"
              />
            </div>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </Form>
        </Formik>
      </AddressSection>
    </MainLayout>
  );
}

export default Address;

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
  return {
    props: {
      user: userData,
    },
  };
};

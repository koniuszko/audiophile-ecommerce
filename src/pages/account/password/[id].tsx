import MainLayout from "@/layouts/MainLayout";
import styled from "styled-components";
import { hasToken } from "@/utils/checkUser";
import { dbConnect } from "@/utils/dbConnect";
import User from "@/models/UserModel";
import { GetServerSideProps } from "next";
import { UserDataProps, PasswordChangeProps } from "@/interfaces/interfaces";
import {
  ErrorMsg,
  FormLabel,
  InputField,
  PrimaryButton,
} from "@/styles/global";
import { Subtitle } from "@/styles/textStyles";
import { ErrorMessage, Form, Formik } from "formik";
import { PasswordValidator } from "@/utils/validators";
import { useRouter } from "next/router";
import { sleep } from "@/utils/helpers";
import axios from "axios";
import GoBackButton from "@/components/shared/GoBackButton";

const PasswordSection = styled.section`
  margin: 24px auto;
  width: 300px;

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

  @media (min-width: 768px) {
    min-height: calc(100vh - 90px - 383px);
    width: 390px;
  }

  @media (min-width: 1440px) {
    min-height: calc(100vh - 90px - 408px);
  }
`;

function PasswordChange({ user }: UserDataProps) {
  const router = useRouter();

  const passwordChangeHandler = async (password: PasswordChangeProps) => {
    const passwordPayload: PasswordChangeProps = {
      newPassword: password.newPassword,
      oldPassword: password.oldPassword,
    };
    await sleep(500);
    axios
      .put(`/api/password/${user._id}`, passwordPayload)
      .then((res) => {
        if (res.status === 200) {
          alert("Password changed successfully");
          router.push(`/account/${user._id}`);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          alert("Wrong password");
        }
      });
  };

  return (
    <MainLayout>
      <PasswordSection>
        <GoBackButton />
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={PasswordValidator}
          onSubmit={(values) => passwordChangeHandler(values)}
        >
          <Form className="form">
            <Subtitle>Change your password</Subtitle>
            <div className="form-input">
              <div className="form-input-label">
                <FormLabel htmlFor="oldPassword">Current password</FormLabel>
                <ErrorMessage
                  name="oldPassword"
                  render={(msg) => (
                    <ErrorMsg className="error-message">{msg}</ErrorMsg>
                  )}
                />
              </div>
              <InputField
                name="oldPassword"
                type="password"
              />
            </div>
            <div className="form-input">
              <FormLabel htmlFor="newPassword">New password</FormLabel>
              <ErrorMessage
                name="newPassword"
                render={(msg) => (
                  <ErrorMsg className="error-message">{msg}</ErrorMsg>
                )}
              />
              <InputField
                name="newPassword"
                type="password"
              />
            </div>
            <div className="form-input">
              <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
              <ErrorMessage
                name="confirmPassword"
                render={(msg) => (
                  <ErrorMsg className="error-message">{msg}</ErrorMsg>
                )}
              />
              <InputField
                name="confirmPassword"
                type="password"
              />
            </div>

            <PrimaryButton type="submit">Submit</PrimaryButton>
          </Form>
        </Formik>
      </PasswordSection>
    </MainLayout>
  );
}

export default PasswordChange;

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

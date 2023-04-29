import styled from "styled-components";
import {signIn, useSession} from "next-auth/react";
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import React, {useState} from "react";
import {router} from "next/client";
import {LoginUserProps} from "@/interfaces/login_interfaces";
import {FormLabel, InputField, PrimaryButton} from "@/styles/global";

export const LoginWrapper = styled.section`
  width: 280px;
  margin: 48px auto;

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

    &-checkbox {
      align-self: flex-start;
      display: flex;
      gap: 4px;
    }
  }
}

.error-message {
  font-size: 12px;
  color: #d82700;
}
`
export const loginUser = async ({email, password}: LoginUserProps) => {
    const res = await signIn("credentials", {
        redirect: false,
        email,
        password
    })
    return res
}

const LoginForm = () => {
    const [validationError, setValidationError] = useState(false);

    return (
        <LoginWrapper>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string(),
                    password: Yup.string()
                })}
                onSubmit={(values) => {
                    //     loginUser({
                    //         email: values.email,
                    //         password: values.password
                    //     }).then((res) => {
                    //         if (res.status === 401) {
                    //             setValidationError(true)
                    //         }
                    //         if (res.status === 200) {
                    //             router.push('/')
                    //         }
                    //     })
                    //     ;
                }

                }
            >
                <Form className="form">
                    <div className="form-input">
                        <FormLabel className="form-label" htmlFor="email">Email</FormLabel>
                        <InputField className="form-input" name="email" type="email" placeholder="Email"/>
                    </div>
                    <div className="form-input">
                        <FormLabel className="form-label" htmlFor="email">Password</FormLabel>
                        <InputField className="form-input" name="password" type="password" placeholder="Password"/>
                    </div>
                    <div className="form-checkbox">
                        <Field name="remember" type="checkbox"/>
                        <FormLabel className="form-label" htmlFor="remember">Remember me</FormLabel>
                    </div>
                    {validationError && <p className="error-message">Incorrect email or password!</p>}
                    <PrimaryButton type="submit">sign in</PrimaryButton>
                </Form>
            </Formik>
        </LoginWrapper>
    )
}

export default LoginForm;
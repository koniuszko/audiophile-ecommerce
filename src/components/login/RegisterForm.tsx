import styled from "styled-components";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from "axios";
import {FormLabel, InputField, PrimaryButton} from "@/styles/global";
// import {log} from "next/dist/server/typescript/utils";


export const RegisterWrapper = styled.section`
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
    }


  }
}

.checkbox-container {
  margin-top: 12px;
  display: flex;
  gap: 4px;
  align-self: flex-start;

}

.error-message {
  margin-top: 4px;
  font-size: 10px;
  color: #D82700;
}
`

const url = "/api/users"

const usernameRegex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm)
const passwordRegex = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
const emailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const RegisterForm = () => {
    return (
        <RegisterWrapper>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                    acceptedTerms: false,
                }}
                validationSchema={Yup.object({
                    username: Yup.string().required('Required').min(3, "Must be at least 3 characters long").max(20, 'Must be 20 characters or less').matches(usernameRegex, "Usernames can contain characters a-z, 0-9, underscores and periods. The username cannot start with a period nor end with a period. It must also not have more than one period sequentially. Max length is 30 chars."),
                    email: Yup.string().required('Required').matches(emailRegex, "Email is wrong!"),
                    password: Yup.string().required('Required').min(3, "Must be at least 3 characters long").max(20, 'Must be 20 characters or less').matches(passwordRegex, "At least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters"),
                    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), undefined], "Passwords must match"),
                    acceptedTerms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.'),
                })}
                onSubmit={async (values) => {
                    await sleep(500);
                    axios.post(url, values)
                        .then(res => console.log(res))
                        .catch(err => console.log(err))
                }}
            >
                <Form className="form">
                    <div className="form-input">
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <ErrorMessage name="username"
                                      render={msg => <p
                                          className={"error-message"}>{msg}</p>}/>
                        <InputField name="username" type="text"/>
                    </div>
                    <div className="form-input">
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <ErrorMessage name="email" render={msg => <p className="error-message">{msg}</p>}/>
                        <InputField name="email" type="email"/>
                    </div>

                    <div className="form-input">
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <ErrorMessage name="password" render={msg => <p className="error-message">{msg}</p>}/>
                        <InputField name="password" type="password"/>
                    </div>
                    <div className="form-input">
                        <FormLabel htmlFor="passwordConfirmation">Confirm password</FormLabel>
                        <ErrorMessage name="passwordConfirmation"
                                      render={msg => <p className="error-message">{msg}</p>}/>
                        <InputField name="passwordConfirmation" type="password"/>
                    </div>
                    <div className="checkbox-container">
                        <Field name="acceptedTerms" type="checkbox"/>
                        <FormLabel htmlFor="acceptedTerms">I accept website's terms and
                            conditions.</FormLabel>
                    </div>
                    <ErrorMessage name="acceptedTerms" render={msg => <p className="error-message">{msg}</p>}/>
                    <PrimaryButton type="submit">
                        Register
                    </PrimaryButton>
                </Form>
            </Formik>
        </RegisterWrapper>
    )
}

export default RegisterForm;
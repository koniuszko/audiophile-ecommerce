import styled from "styled-components";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import axios from "axios";
import {ErrorMsg, FormLabel, InputField, PrimaryButton} from "@/styles/global";
import StatusModal from "@/components/login/StatusModal";
import {useState} from "react";
import {sleep} from "@/utils/helpers";
import {RegisterFormValidator} from "@/utils/validators";

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
      gap: 8px;
    }
  }

  .checkbox-container {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-self: flex-start;
  }

  .checkbox {
    margin-right: 6px;
  }

  @media (min-width: 768px) {
    width: 480px;
  }
`

const RegisterForm = () => {
    const [resMessage, setResMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <RegisterWrapper>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                    acceptedTerms: false,
                }}
                validationSchema={RegisterFormValidator}
                onSubmit={async (values) => {
                    await sleep(500);
                    axios.post(`/api/register`, values)
                        .then(res => {
                            console.log(res);
                            if (res.status === 201) {
                                setResMessage(res.data.message)
                                setIsOpen(true)
                            }
                        })
                        .catch(err => console.log(err))
                }}
            >
                <Form className="form">
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
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <ErrorMessage name="password"
                                      render={msg => <ErrorMsg className="error-message">{msg}</ErrorMsg>}/>
                        <InputField name="password" type="password"/>
                    </div>
                    <div className="form-input">
                        <FormLabel htmlFor="passwordConfirmation">Confirm password</FormLabel>
                        <ErrorMessage name="passwordConfirmation"
                                      render={msg => <ErrorMsg className="error-message">{msg}</ErrorMsg>}/>
                        <InputField name="passwordConfirmation" type="password"/>
                    </div>
                    <div className="checkbox-container">
                        <div>
                            <Field className="checkbox" name="acceptedTerms" type="checkbox"/>
                            <FormLabel htmlFor="acceptedTerms">I accept website`&apos;`s terms and
                                conditions.</FormLabel>
                        </div>
                        <ErrorMessage name="acceptedTerms"
                                      render={msg => <ErrorMsg className="error-message">{msg}</ErrorMsg>}/>
                    </div>
                    <PrimaryButton type="submit">
                        Register
                    </PrimaryButton>
                </Form>
            </Formik>
            <StatusModal message={resMessage} isOpen={isOpen}/>
        </RegisterWrapper>
    )
}

export default RegisterForm;
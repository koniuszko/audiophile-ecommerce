import styled, {createGlobalStyle} from "styled-components";
import {Field} from "formik";
import {IModalProps} from "@/interfaces/login_interfaces";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
  }

  #root {
    marigin: 0 auto;
  }

  button {
    background-color: transparent;
    border: none;

  }

  img {
    display: block;
  }
`

export const InputField = styled(Field)`
  height: 56px;
  border: 1px solid #CFCFCF;
  border-radius: 8px;
  padding: 18px 24px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #CFCFCF;

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.2px;
  }

  &:focus {
    color: #191919;
    border-color: #D87D4A;
    caret-color: #D87D4A;
  }
`

const Button = styled.button`
  width: 160px;
  height: 48px;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: .2s;
`

export const PrimaryButton = styled(Button)`
  background-color: #D87D4A;
  border: none;
  color: #FFF;

  &:hover {
    background-color: #FBAF85;
  }
`

export const SecondaryButton = styled(Button)`
  background-color: #FFF;
  border: 1px solid #000;
  color: #FFF;

  &:hover {
    background-color: #000;
    color: #FFF;
  }
`

export const FormLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.21px;
`

export const ErrorMsg = styled.p`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.2px;
  color: #d82700;
`

export const ModalWrapper = styled.div<IModalProps>`
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  padding: 32px;
  border-radius: 8px;
  text-align: ;
`


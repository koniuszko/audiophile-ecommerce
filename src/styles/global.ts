import styled, { createGlobalStyle } from "styled-components";
import { Field } from "formik";
import { ColorProps, IModalProps } from "@/interfaces/interfaces";
import Link from "next/link";

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

  li {
    list-style: none;
  }
`;

export const InputField = styled(Field)`
  height: 56px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding: 18px 24px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #cfcfcf;

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.2px;
  }

  &:focus {
    color: #191919;
    border-color: #d87d4a;
    caret-color: #d87d4a;
  }
`;

export const RadioField = styled(Field)`
  height: 56px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding: 18px 24px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #cfcfcf;

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.2px;
  }

  &:focus {
    color: #191919;
    border-color: #d87d4a;
    caret-color: #d87d4a;
  }
`;

const Button = styled.button`
  width: 160px;
  height: 48px;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.2s;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: #d87d4a;
  border: none;
  color: #fff;

  &:hover {
    background-color: #fbaf85;
  }

  &:disabled {
    background-color: #cfcfcf;
    cursor: not-allowed;
  }
`;

export const PrimaryBlackButton = styled(Button)`
  background-color: #000;
  border: none;
  color: #fff;

  &:hover {
    background-color: #4c4c4c;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #000;
  color: #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const FormLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.21px;
`;

export const RadioLabel = styled.label`
  height: 56px;
  border: 1px solid #cfcfcf;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.21px;
`;

export const ErrorMsg = styled.p`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.2px;
  color: #d82700;
`;

export const ModalWrapper = styled.div<IModalProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
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
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;

  h3,
  p {
    text-align: left;
  }
`;

export const NavLink = styled(Link)`
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  transition: 0.2s;

  &:hover {
    color: #d87d4a;
  }
`;

export const StyledHeader = styled.header`
  background-color: #191919;
  height: 102px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 246px;
  }
`;

export const CategoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: #f1f1f1;
  border-radius: 8px;
  height: 165px;
  position: relative;

  .category-image {
    transform: translateY(-40%);
  }

  .category-name {
    transform: translateY(-52px);
  }

  .category-link {
    transform: translateY(-52px);
  }
`;

export const GrayButtonWrapper = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: #808080;
  cursor: pointer;

  &:hover {
    color: #d87d4a;
  }
`;

export const BGWrapper = styled.div<ColorProps>`
  background-color: ${(props) => props.color};
`;

import React from 'react';
import styled from 'styled-components';
import Link from "next/link";

interface IModalProps {
    isOpen: boolean;
}

interface IRegistrationModalProps extends IModalProps {
    message: string;
}

const ModalWrapper = styled.div<IModalProps>`
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const Message = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

const RegistrationModal: React.FC<IRegistrationModalProps> = ({
                                                                  isOpen,
                                                                  message,
                                                              }) => {
    return (
        <ModalWrapper isOpen={isOpen}>
            <ModalContent>
                <Message>{message}</Message>
                <Link href={'/'}>BACK</Link>
            </ModalContent>
        </ModalWrapper>
    );
};

export default RegistrationModal;
import React from 'react';
import Link from "next/link";
import {ModalContent, ModalWrapper, PrimaryButton} from "@/styles/global";
import {IRegistrationModalProps} from "@/interfaces/interfaces";
import {H3, Paragraph} from "@/styles/textStyles";
import checkIcon from '@assets/icons/icon-order-confirmation.svg'
import Image from "next/image";


const RegistrationModal: React.FC<IRegistrationModalProps> = ({

                                                                  isOpen,
                                                                  message,
                                                              }) => {
    return (
        <ModalWrapper isOpen={isOpen}>
            <ModalContent>
                <Image src={checkIcon} alt={'check-icon'} width={64} height={64}/>
                <H3>{message}</H3>
                <Paragraph>
                    You can now log in with your email and password.
                </Paragraph>
                <Link href={'/'}>
                    <PrimaryButton>
                        back to home
                    </PrimaryButton>
                </Link>
            </ModalContent>
        </ModalWrapper>
    );
};

export default RegistrationModal;
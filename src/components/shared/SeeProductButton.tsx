import React, {FunctionComponent} from 'react';
import {PrimaryBlackButton, PrimaryButton, SecondaryButton} from "@/styles/global";
import Link from "next/link";

interface OwnProps {
    type: 'primary' | 'primary-black' | 'secondary'
    path: string
    className?: string
}

type Props = OwnProps;

const SeeProductButton: FunctionComponent<Props> = ({type, path, className}) => {
    const buttonType = (type: string) => {
        switch (type) {
            case 'primary':
                return <PrimaryButton>see product</PrimaryButton>
            case 'primary-black':
                return <PrimaryBlackButton>see product</PrimaryBlackButton>
            case 'secondary':
                return <SecondaryButton>see product</SecondaryButton>
        }
    }
    return (
        <Link className={className} href={path}>
            {buttonType(type)}
        </Link>

    );
};

export default SeeProductButton;

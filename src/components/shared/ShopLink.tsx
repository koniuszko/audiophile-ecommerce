import React, {FunctionComponent} from 'react';
import Link from "next/link";
import Image from "next/image";
import arrowIcon from '@assets/icons/icon-arrow-right.svg'
import styled from "styled-components";

interface OwnProps {
    path: string
    className: string
}

type Props = OwnProps;

const LinkWrapper = styled.div`
  a {
    text-decoration: none;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #808080;
    display: flex;
    align-items: center;
    gap: 6px;
  }

`
const ShopLink: FunctionComponent<Props> = ({path, className}) => {

    return (

        <LinkWrapper className={className}>
            <Link href={path}>
                SHOP
                <Image src={arrowIcon} alt={"arrow-icon"} width={8} height={12}/>
            </Link>
        </LinkWrapper>

    );
};

export default ShopLink;

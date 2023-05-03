import React, {FunctionComponent, useEffect, useState} from 'react';
import styled from 'styled-components'
import Image from "next/image";
import Link from "next/link";
import logo from '@assets/shared/logo.svg'
import menuIcon from '@assets/icons/icon-menu.svg'
import exitIcon from '@assets/icons/icon-xmark.svg'
import accountIcon from '@assets/icons/icon-user.svg'
import shoppingCartIcon from '@assets/icons/icon-cart.svg'
import MobileMenuModal from "@/components/navbar/MobileMenuModal";
import ShoppingCart from "@/components/navbar/ShoppingCart";


interface OwnProps {
}

type Props = OwnProps;

const NavbarWrapper = styled.nav`
  background-color: #191919;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
  position: relative;
  z-index: 9999;

  .menu {
    margin-right: 26px;
  }

  .account {
    display: flex;
    gap: 6px
  }
`


const Navbar: FunctionComponent<Props> = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);


    useEffect(() => {
        if (isMenuOpen || isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen, isCartOpen])


    return (
        <>
            <NavbarWrapper>
                <button onClick={() => {
                    setIsMenuOpen(!isMenuOpen)
                }} className='menu'>
                    <Image src={!isMenuOpen ? menuIcon : exitIcon} alt={'menu-icon'} width={20}
                           height={20}/>
                </button>
                <Link href={'/'}>
                    <Image src={logo} alt={'logo'} width={143} height={25}/>
                </Link>
                <div className="account">
                    <Link href={'/login'}>
                        <Image src={accountIcon} alt={'menu-icon'} width={20}
                               height={20}/>
                    </Link>
                    <button onClick={() => {
                        setIsCartOpen(!isCartOpen);
                    }}>
                        <Image src={shoppingCartIcon} alt={'menu-icon'} width={20}
                               height={20}/>
                    </button>
                </div>
            </NavbarWrapper>
            <MobileMenuModal isOpen={isMenuOpen}/>
            <ShoppingCart setIsOpen={setIsCartOpen} isOpen={isCartOpen}/>
        </>

    );
};

export default Navbar;

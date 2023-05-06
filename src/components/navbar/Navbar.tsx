import React, {FunctionComponent, useEffect, useState} from 'react';
import styled from 'styled-components'
import Image from "next/image";
import Link from "next/link";
import logo from '@assets/shared/logo.svg'
import menuIcon from '@assets/icons/icon-menu.svg'
import exitIcon from '@assets/icons/icon-xmark.svg'
import accountIcon from '@assets/icons/icon-user.svg'
import shoppingCartIcon from '@assets/icons/icon-cart.svg'
import shoppingCartProductsIcon from '@assets/icons/icon-cart-products.svg'
import MobileMenuModal from "@/components/navbar/MobileMenuModal";
import ShoppingCart from "@/components/navbar/ShoppingCart";
import {useSelector} from "react-redux";
import {selectCartItems} from "@/features/cart/cartSlice";
import Nav from "@/components/navbar/Nav";
import useWidth from "@/utils/hooks/useWidth";


const NavbarWrapper = styled.nav`
  background-color: #191919;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
  position: relative;
  z-index: 9999;
  border-bottom: 1px solid #282828;

  .menu {
    margin-right: 32px;
  }

  .account {
    display: flex;
    gap: 12px
  }

  @media (min-width: 768px) {
    justify-content: flex-start;

    .menu {
      margin-right: 42px;
    }

    .account {
      margin-left: auto;
    }
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
    justify-content: space-between;
    width: 1100px;
    padding: 32px 0;

    .account {
      margin-left: 0;
    }
  }
`


const Navbar: FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const width = useWidth();

    const cartItems = useSelector(selectCartItems);

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
                {width < 1440 && <button onClick={() => {
                    setIsMenuOpen(!isMenuOpen)
                }} className='menu'>
                    <Image src={!isMenuOpen ? menuIcon : exitIcon} alt={'menu-icon'} width={20}
                           height={20}/>
                </button>}
                <Link href={'/'}>
                    <Image src={logo} alt={'logo'} width={143} height={25}/>
                </Link>
                {width > 1440 && <Nav/>}
                <div className="account">
                    <button onClick={() => {
                        setIsCartOpen(!isCartOpen);
                    }}>
                        <Image src={cartItems.length > 0 ? shoppingCartProductsIcon : shoppingCartIcon}
                               alt={'menu-icon'}
                               width={20}
                               height={20}/>
                    </button>
                    <Link href={'/login'}>
                        <Image src={accountIcon} alt={'menu-icon'} width={20}
                               height={20}/>
                    </Link>
                </div>
            </NavbarWrapper>
            <MobileMenuModal isOpen={isMenuOpen}/>
            <ShoppingCart setIsOpen={setIsCartOpen} isOpen={isCartOpen}/>
        </>

    );
};

export default Navbar;

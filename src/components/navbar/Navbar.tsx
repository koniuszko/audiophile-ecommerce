import React, {FunctionComponent} from 'react';
import styled from 'styled-components'
import Image from "next/image";
import Link from "next/link";

import logo from '@assets/shared/logo.svg'
import menuIcon from '@assets/icons/icon-menu.svg'
import accountIcon from '@assets/icons/icon-user.svg'
import shoppingCartIcon from '@assets/icons/icon-cart.svg'

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

  .account {
    display: flex;
    gap: 6px
  }
`

const Navbar: FunctionComponent<Props> = (props) => {

    return (
        <NavbarWrapper>
            <button>
                <Image src={menuIcon} alt={'menu-icon'} width={20}
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
            </div>

        </NavbarWrapper>
    );
};

export default Navbar;

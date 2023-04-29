import React, {FunctionComponent} from 'react';
import styled from 'styled-components'
import Image from "next/image";
import Link from "next/link";

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
                <Image src={'assets/icons/icon-menu.svg'} alt={'menu-icon'} width={20}
                       height={20}/>
            </button>
            <Link href={'/'}>
                <Image src={'assets/shared/logo.svg'} alt={'logo'} width={143} height={25}/>
            </Link>
            <div className="account">
                <Link href={'/login'}>
                    <Image src={'assets/icons/icon-user.svg'} alt={'menu-icon'} width={20}
                           height={20}/>
                </Link>
            </div>

        </NavbarWrapper>
    );
};

export default Navbar;

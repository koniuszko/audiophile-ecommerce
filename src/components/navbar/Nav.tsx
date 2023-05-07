import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import {NavLink} from "@/styles/global";


const MenuWrapper = styled.div`
  margin: 48px auto;

  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  @media (min-width: 768px) {
    margin: 32px 0;

    .nav {
      flex-direction: row;
      gap: 34px;
    }

  }
`;


const Nav: FunctionComponent = () => {

    return (
        <MenuWrapper>
            <ul className="nav">
                <li>
                    <NavLink href="/">home</NavLink>
                </li>
                <li>
                    <NavLink href="/category/headphones">headphones</NavLink>
                </li>
                <li>
                    <NavLink href="/category/speakers">speakers</NavLink>
                </li>
                <li>
                    <NavLink href="/category/earphones">earphones</NavLink>
                </li>
            </ul>
        </MenuWrapper>
    );
};

export default Nav;

import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import {NavLink} from "@/styles/global";

interface OwnProps {
}

type Props = OwnProps;

const MenuWrapper = styled.div`
  margin: 48px auto;

  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

`;

const Nav: FunctionComponent<Props> = (props) => {

    return (
        <MenuWrapper>
            <ul className="nav">
                <li>
                    <NavLink href="/">home</NavLink>
                </li>
                <li>
                    <NavLink href="/headphones">headphones</NavLink>
                </li>
                <li>
                    <NavLink href="/speakers">speakers</NavLink>
                </li>
                <li>
                    <NavLink href="/earphones">earphones</NavLink>
                </li>
            </ul>
        </MenuWrapper>
    );
};

export default Nav;

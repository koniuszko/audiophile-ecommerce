import React, {FunctionComponent} from "react";
import styled from "styled-components";
import Image from "next/image";
import Nav from "@/components/navbar/Nav";
import {Paragraph, ParagraphBold} from "@/styles/textStyles";
import logo from "@assets/shared/logo.svg";
import facebookIcon from "@assets/icons/icon-facebook.svg";
import twitterIcon from "@assets/icons/icon-twitter.svg";
import instagramIcon from "@assets/icons/icon-instagram.svg";

const FooterWrapper = styled.footer`
  background-color: #191919;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;

  text-align: center;

  .line {
    width: 100px;
    border-top: 4px solid #D87D4A;
    margin-bottom: 48px;
  }

  .copyrights {
    margin-top: 48px;
  }

  @media (min-width: 768px) {
    padding: 0 40px 0;
    align-items: flex-start;

    .container {
      margin: 80px 0 40px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .copyrights {
      margin: 0;
    }
  }

  @media (min-width: 1440px) {
    width: 1100px;
    margin: 0 auto;
    padding: 0;

    p {
      width: 50%;
    }
  }
`;

const SocialsWrapper = styled.div`
  margin: 48px 36px 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  img {
    cursor: pointer;

    &:hover {
      filter: invert(59%) sepia(38%) saturate(794%) hue-rotate(335deg) brightness(95%) contrast(88%)
    }
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`
const Footer: FunctionComponent = () => {
    return <FooterWrapper>
        <div className="line"></div>
        <Image src={logo} alt={"logo"} width={143} height={25}/>
        <Nav/>
        <Paragraph>
            Audiophile is an all in one stop to fulfill your audio needs. We`&apos;`re a small team of music lovers and
            sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility - we’re open 7 days a week.
        </Paragraph>
        <div className="container">
            <ParagraphBold className='copyrights'>
                Copyright 2021. All Rights Reserved
            </ParagraphBold>
            <SocialsWrapper>
                <Image src={facebookIcon} alt={"facebook-icon"} width={24} height={24}/>
                <Image src={twitterIcon} alt={"twitter-icon"} width={24} height={24}/>
                <Image src={instagramIcon} alt={"instagram-icon"} width={24} height={24}/>
            </SocialsWrapper>
        </div>
    </FooterWrapper>;
};

export default Footer;

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
`;

const SocialsWrapper = styled.div`
  margin: 36px;
  display: flex;
  gap: 16px;
`
const Footer: FunctionComponent = () => {
    return <FooterWrapper>
        <div className="line"></div>
        <Image src={logo} alt={"logo"} width={143} height={25}/>
        <Nav/>
        <Paragraph>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and
            sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility - we’re open 7 days a week.
        </Paragraph>
        <ParagraphBold className='copyrights'>
            Copyright 2021. All Rights Reserved
        </ParagraphBold>
        <SocialsWrapper>
            <Image src={facebookIcon} alt={"facebook-icon"} width={24} height={24}/>
            <Image src={twitterIcon} alt={"twitter-icon"} width={24} height={24}/>
            <Image src={instagramIcon} alt={"instagram-icon"} width={24} height={24}/>
        </SocialsWrapper>
    </FooterWrapper>;
};

export default Footer;
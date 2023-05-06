import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import {H1, LightParagraph} from "@/styles/textStyles";
import SeeProductButton from "@/components/shared/SeeProductButton";
import NewProduct from "@/components/shared/NewProduct";
import {BGWrapper} from "@/styles/global";


const HeroWrapper = styled.section`
  height: 510px;
  padding: 0 48px;
  background-color: #191919;
  background-image: url("/assets/home/desktop/image-hero.jpg");
  background-repeat: no-repeat;
  background-size: 300%;
  background-position: 75.5% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  text-align: center;

  @media (min-width: 768px) {
    height: 632px;
    background-size: 200%;
    background-position: 85% 75%;
    padding: 0 195px;

    p {
      text-align: center;
    }
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
    padding: 0 750px 0 0;
    width: 1100px;
    align-items: flex-start;
    background-size: 120%;
    background-position: 40% 100%;

    p, h1 {
      text-align: left;
    }
  }
`
const Hero: FunctionComponent = () => {
    return (
        <BGWrapper color={'#191919'}>
            <HeroWrapper>
                <NewProduct color={"gray"}/>
                <H1>
                    XX99 Mark II Headphones
                </H1>
                <LightParagraph>
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music
                    enthusiast.
                </LightParagraph>
                <SeeProductButton type={'primary'} path={'/products/product-xx99-mark-two-headphones'}/>
            </HeroWrapper>
        </BGWrapper>
    );
};

export default Hero;

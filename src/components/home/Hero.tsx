import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import {H1, LightParagraph} from "@/styles/textStyles";
import SeeProductButton from "@/components/shared/SeeProductButton";
import NewProduct from "@/components/shared/NewProduct";

interface OwnProps {
}

type Props = OwnProps;

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
`
const Hero: FunctionComponent<Props> = (props) => {
    return (
        <HeroWrapper>
            <NewProduct color={"gray"}/>
            <H1>
                XX99 Mark II Headphones
            </H1>
            <LightParagraph>
                Experience natural, lifelike audio and exceptional build quality made for the passionate music
                enthusiast.
            </LightParagraph>
            <SeeProductButton type={'primary'} path={'/products/xx99-mark-two-headphones'}/>
        </HeroWrapper>
    );
};

export default Hero;

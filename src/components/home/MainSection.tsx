import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import {BlackH2, WhiteH2, WhiteParagraph} from "@/styles/textStyles";
import Image from "next/image";

import zx9Speaker from "@assets/home/mobile/image-speaker-zx9.png"
import zx7Speaker from "@assets/home/mobile/image-speaker-zx7.jpg"
import yx1Earphones from "@assets/home/mobile/image-earphones-yx1.jpg"

import circles from "@assets/home/pattern-circles.svg"
import SeeProductButton from "@/components/shared/SeeProductButton";


interface OwnProps {
}

type Props = OwnProps;

const MainWrapper = styled.section`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const MainContainer = styled.div`
  padding: 55px 24px;
  background-color: #D87D4A;
  background-image: url("../../assets/home/pattern-circles.svg");
  background-repeat: no-repeat;
  background-position: 50% -100px;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

const SecondaryContainer = styled.div`
  height: 320px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  h2 {
    position: absolute;
    left: 24px;
    top: 100px;
  }

  button {
    position: absolute;
    left: 24px;
    top: 170px;
  }
`
const TertiaryContainer = styled.div`
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #FAFAFA;
  position: relative;

  h2, button {
    position: absolute;
    left: 24px;
  }

  h2 {
    top: 40px;
  }

  button {
    top: 110px;
  }
`
const MainSection: FunctionComponent<Props> = (props) => {

    return (
        <MainWrapper>
            <MainContainer>
                <Image src={zx9Speaker} alt={"zx9-speaker"} width={172} height={207}/>
                <WhiteH2>
                    ZX9 SPEAKER
                </WhiteH2>
                <WhiteParagraph>
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </WhiteParagraph>
                <SeeProductButton type={'primary-black'} path={'/products/zx9-speaker'}/>
            </MainContainer>
            <SecondaryContainer>
                <BlackH2>
                    ZX7 SPEAKER
                </BlackH2>
                <SeeProductButton type={"secondary"} path={'/products/zx7-speaker'}/>
                <Image src={zx7Speaker} alt={"zx7-speaker"} width={327} height={320}/>
            </SecondaryContainer>
            <TertiaryContainer>
                <Image src={yx1Earphones} alt={"yx1-earphones"} width={327} height={200}/>
            </TertiaryContainer>
            <TertiaryContainer>
                <BlackH2>
                    YX1 EARPHONES
                </BlackH2>
                <SeeProductButton type={"secondary"} path={'/products/yx1-earphones'}/>
            </TertiaryContainer>
        </MainWrapper>
    );
};

export default MainSection;

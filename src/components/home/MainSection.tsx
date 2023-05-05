import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import {BlackH2, H1, H3, WhiteH2, WhiteParagraph} from "@/styles/textStyles";
import Image from "next/image";

import zx9SpeakerMobile from "@assets/home/mobile/image-speaker-zx9.png"
import zx7SpeakerMobile from "@assets/home/mobile/image-speaker-zx7.jpg"
import yx1EarphonesMobile from "@assets/home/mobile/image-earphones-yx1.jpg"

import zx9SpeakerTablet from "@assets/home/tablet/image-speaker-zx9.png"
import zx7SpeakerTablet from "@assets/home/tablet/image-speaker-zx7.jpg"
import yx1EarphonesTablet from "@assets/home/tablet/image-earphones-yx1.jpg"

import zx9SpeakerDesktop from "@assets/home/desktop/image-speaker-zx9.png"
import zx7SpeakerDesktop from "@assets/home/desktop/image-speaker-zx7.jpg"
import yx1EarphonesDesktop from "@assets/home/desktop/image-earphones-yx1.jpg"

import SeeProductButton from "@/components/shared/SeeProductButton";
import useWidth from "@/utils/hooks/useWidth";


const MainWrapper = styled.section`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .container-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 120px;
  }

  @media (min-width: 768px) {
    padding: 0 40px;
    gap: 32px;

    .container-wrapper {
      flex-direction: row;
      justify-content: space-between;

    }
  }
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

  @media (min-width: 768px) {
    padding: 64px 170px;
    height: 720px;
    gap: 42px;
    background-size: 150% ;
    background-position: 50% -320px;

    p {
      text-align: center;
    }
  }
`

const SecondaryContainer = styled.div`
  height: 320px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  h3 {
    position: absolute;
    left: 60px;
    top: 100px;
  }

  button {
    position: absolute;
    left: 60px;
    top: 170px;
  }

  @media (min-width: 768px) {

  }
`
const TertiaryContainer = styled.div`
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #FAFAFA;
  position: relative;

  h3, button {
    position: absolute;
    left: 24px;
  }

  h3 {
    top: 40px;
  }

  button {
    top: 110px;
  }

  @media (min-width: 768px) {
    height: 320px;
    width: 339px;

    h3 {
      left: 40px;
      top: 100px;
    }

    button {
      left: 40px;
      top: 170px;
    }

  }
`
const MainSection: FunctionComponent = () => {

    const width = useWidth();

    const zx9Speaker = width < 768 ? {
        img: zx9SpeakerMobile,
        width: 172,
        height: 207
    } : width <= 1440 ? {
        img: zx9SpeakerTablet,
        width: 198,
        height: 237
    } : {
        img: zx9SpeakerDesktop,
        width: 100,
        height: 100
    };

    const zx7Speaker = width < 768 ? {
        img: zx7SpeakerMobile,
        width: 327,
        height: 320
    } : width <= 1440 ? {
        img: zx7SpeakerTablet,
        width: 689,
        height: 320
    } : {
        img: zx7SpeakerDesktop,
        width: 327,
        height: 320
    }

    const yx1Earphones = width < 768 ? {
        img: yx1EarphonesMobile,
        width: 327,
        height: 200
    } : width <= 1440 ? {
        img: yx1EarphonesTablet,
        width: 339,
        height: 320
    } : {
        img: yx1EarphonesDesktop,
        width: 327,
        height: 200
    }

    return (
        <MainWrapper>
            <MainContainer>
                <Image src={zx9Speaker.img} alt={"zx9-speaker"} width={zx9Speaker.width} height={zx9Speaker.height}/>
                <H1>
                    ZX9 SPEAKER
                </H1>
                <WhiteParagraph>
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </WhiteParagraph>
                <SeeProductButton type={'primary-black'} path={'/products/product-zx9-speaker'}/>
            </MainContainer>
            <SecondaryContainer>
                <H3>
                    ZX7 SPEAKER
                </H3>
                <SeeProductButton type={"secondary"} path={'/products/product-zx7-speaker'}/>
                <Image src={zx7Speaker.img} alt={"zx7-speaker"} width={zx7Speaker.width} height={zx7Speaker.height}/>
            </SecondaryContainer>
            <div className="container-wrapper">
                <TertiaryContainer>
                    <Image src={yx1Earphones.img} alt={"yx1-earphones"} width={yx1Earphones.width}
                           height={yx1Earphones.height}/>
                </TertiaryContainer>
                <TertiaryContainer className="float">
                    <H3>
                        YX1 EARPHONES
                    </H3>
                    <SeeProductButton type={"secondary"} path={'/products/product-yx1-earphones'}/>
                </TertiaryContainer>
            </div>
        </MainWrapper>
    );
};

export default MainSection;

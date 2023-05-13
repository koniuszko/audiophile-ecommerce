import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import Image from "next/image";

import bestGearMobile from '@assets/shared/mobile/image-best-gear.jpg'
import bestGearTablet from '@assets/shared/tablet/image-best-gear.jpg'
import bestGearDesktop from '@assets/shared/desktop/image-best-gear.jpg'

import {BlackH2, ColorText, Paragraph} from "@/styles/textStyles";
import useWidth from "@/utils/hooks/useWidth";


const AboutWrapper = styled.section`
  padding: 0 24px 120px;
  text-align: center;


  img {
    border-radius: 8px;
    margin: 0 auto;
  }

  h2 {
    margin: 60px 100px 32px;
  }

  p {
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 0 40px 120px;

    .about-description {
      padding: 0 46px;
    }
  }

  @media (min-width: 1440px) {
    width: 1100px;
    margin: 0 auto;
    padding: 100px 0;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 125px;

    h2 {
      margin: 0 0 32px;
      text-align: left;
    }

    .about-description {
      padding: 0;
      text-align: left;
    }
  }
`

const About: FunctionComponent = () => {
    const width = useWidth()
    const bestGear = width < 768 ? {
        img: bestGearMobile,
        width: 327,
        height: 300
    } : width < 1440 ? {
        img: bestGearTablet,
        width: 689,
        height: 300
    } : {
        img: bestGearDesktop,
        width: 540,
        height: 588
    }
    return (
        <AboutWrapper>
            <Image src={bestGear.img} alt={"best-gear"} width={bestGear.width} height={bestGear.height}/>
            <div className="about-container">
                <BlackH2>Bringing you the <ColorText>best</ColorText> audio gear</BlackH2>
                <Paragraph className="about-description">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                    available for you to browse and experience a wide range of our products. Stop by our store to meet
                    some
                    of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </Paragraph>
            </div>
        </AboutWrapper>
    );
};

export default About;

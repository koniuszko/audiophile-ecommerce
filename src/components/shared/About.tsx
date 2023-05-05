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
  }

  h2 {
    margin: 60px 100px 32px;
  }

  p {
    text-align: center;
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
        width: 1110,
        height: 300
    }
    return (
        <AboutWrapper>
            <Image src={bestGear.img} alt={"best-gear"} width={bestGear.width} height={bestGear.height}/>
            <BlackH2>Bringing you the <ColorText>best</ColorText> audio gear</BlackH2>
            <Paragraph>
                Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                available for you to browse and experience a wide range of our products. Stop by our store to meet some
                of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </Paragraph>
        </AboutWrapper>
    );
};

export default About;

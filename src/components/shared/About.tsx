import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import Image from "next/image";

import mobileBestGear from '@assets/shared/mobile/image-best-gear.jpg'
import {BlackH2, ColorText, Paragraph} from "@/styles/textStyles";

interface OwnProps {
}

type Props = OwnProps;

const AboutWrapper = styled.section`
  padding: 120px 24px;
  text-align: center;

  img {
    border-radius: 8px;
  }

  h2 {
    margin: 40px 0;
  }
`

const About: FunctionComponent<Props> = (props) => {
    return (
        <AboutWrapper>
            <Image src={mobileBestGear} alt={"best-gear"} width={327} height={300}/>
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

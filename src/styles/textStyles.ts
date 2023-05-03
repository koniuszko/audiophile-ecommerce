import styled from "styled-components";
import {OverlineProps} from "@/interfaces/interfaces";

export const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  color: #808080;
  text-align: center;
`

export const WhiteParagraph = styled(Paragraph)`
  color: #FFF;
  font-weight: 400;
`

export const BlackParagraph = styled(Paragraph)`
  color: #000;
`

export const ColorParagraph = styled(Paragraph)`
  color: #d87d4a;
`

export const LightParagraph = styled(Paragraph)`
  color: #C6C6C6;;
`

export const ParagraphBold = styled(Paragraph)`
  font-weight: bold;
`

export const PriceText = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 1.29px;
  color: #000;
`

export const Overline = styled.p<OverlineProps>`
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: ${props => props.color};
`

export const Subtitle = styled.p`
  font-size: 13px;
  line-height: 25px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #d87d4a;
`

export const ColorText = styled.span`
  color: #D87D4A;
`

export const H1 = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 40px;
  letter-spacing: 1.29px;
  text-transform: uppercase;
  color: #FFF;
  text-align: center;
`

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
`

export const WhiteH2 = styled(H2)`
  color: #FFF;
`
export const BlackH2 = styled(H2)`
  color: #000;
`

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  letter-spacing: 0.86px;
  text-transform: uppercase;
`

export const H4 = styled.h4`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  letter-spacing: 1.71px;
  text-transform: uppercase;
`

export const H6 = styled.h6`
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
`
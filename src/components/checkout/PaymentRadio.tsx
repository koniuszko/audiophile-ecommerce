import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from "styled-components";


interface RadioProps {
    radioValue: string,
    setRadioValue: (value: string) => void
}

const RadioWrapper = styled.div`


  button {
    all: unset;
  }

  .RadioGroupRoot {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .RadioGroupItem {
    background-color: white;
    width: 20px !important;
    height: 20px !important;
    border-radius: 10px;
    border: 1px solid #cfcfcf;
  }

  .RadioGroupIndicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px !important;
    height: 20px !important;
    position: relative;
  }

  .RadioGroupIndicator::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #d87d4a;
  }

  .Label {
    flex-grow: 1;
    color: #000;
    font-size: 14px;
    font-weight: bold;
    padding-left: 16px;
  }

  .form-radio {
    padding: 16px;
    display: flex;
    align-items: center;
    //justify-content: space-between;
    height: 56px;
    border: 1px solid #cfcfcf;
    border-radius: 8px;

    &:hover {
      border: 1px solid #d87d4a;
    }
`
const PaymentRadio = ({radioValue, setRadioValue}: RadioProps) => (
    <RadioWrapper>
        <RadioGroup.Root className="RadioGroupRoot" defaultValue="credit-card" aria-label="payment" value={radioValue}
                         onValueChange={(e) => setRadioValue(e)}>
            <div className="form-radio">
                <RadioGroup.Item className="RadioGroupItem" value="credit-card" id="r1">
                    <RadioGroup.Indicator className="RadioGroupIndicator"/>
                </RadioGroup.Item>
                <label className="Label" htmlFor="r1">
                    Credit Card
                </label>
            </div>
            <div className="form-radio">
                <RadioGroup.Item className="RadioGroupItem" value="cash-on-delivery" id="r2">
                    <RadioGroup.Indicator className="RadioGroupIndicator"/>
                </RadioGroup.Item>
                <label className="Label" htmlFor="r2">
                    Cash on Delivery
                </label>
            </div>
        </RadioGroup.Root>
    </RadioWrapper>
);

export default PaymentRadio;
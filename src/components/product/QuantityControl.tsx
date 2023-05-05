import React, {FunctionComponent} from 'react';
import styled from "styled-components";


interface OwnProps {
    quantity: number
    setQuantity: (quantity: number) => void
}

type Props = OwnProps;

const QuantityControlWrapper = styled.div`
  background-color: #f1f1f1;
  height: 48px;
  width: 120px;
  display: flex;

  button {
    width: 40px;
    font-size: 13px;
    font-weight: bold;

    &:hover {
      color: #d87d4a;
    }
  }

  input {
    width: 40px;
    border: none;
    background-color: transparent;
    text-align: center;
    text-selection: none;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`

const QuantityControl: FunctionComponent<Props> = ({quantity, setQuantity}) => {
    function increment() {
        setQuantity(quantity + 1);
    }

    function decrement() {
        setQuantity(quantity - 1);
    }

    return (
        <QuantityControlWrapper>
            <button onClick={decrement}>-</button>
            <input type="text" value={quantity} readOnly/>
            <button onClick={increment}>+</button>
        </QuantityControlWrapper>
    );
};

export default QuantityControl;

import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import {useRouter} from "next/router";

interface OwnProps {
}

type Props = OwnProps;

const GoBackButtonWrapper = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: #808080;
  width: 57px;
  margin: 16px 0 24px;

  &:hover {
    color: #d87d4a;
  }
`

const GoBackButton: FunctionComponent<Props> = (props) => {
    const router = useRouter();
    return (
        <GoBackButtonWrapper
            onClick={() => router.back()}
        >Go Back</GoBackButtonWrapper>
    );
};

export default GoBackButton;

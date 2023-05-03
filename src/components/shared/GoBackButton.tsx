import React, {FunctionComponent} from 'react';
import {useRouter} from "next/router";
import {GrayButtonWrapper} from "@/styles/components";

interface OwnProps {
}

type Props = OwnProps;


const GoBackButton: FunctionComponent<Props> = (props) => {
    const router = useRouter();
    return (
        <GrayButtonWrapper
            onClick={() => router.back()}
        >Go Back</GrayButtonWrapper>
    );
};

export default GoBackButton;

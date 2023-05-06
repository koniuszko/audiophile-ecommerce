import React, {FunctionComponent} from 'react';
import {useRouter} from "next/router";
import {GrayButtonWrapper} from "@/styles/components";

const GoBackButton: FunctionComponent = () => {
    const router = useRouter();
    return (
        <GrayButtonWrapper
            onClick={() => router.back()}
        >Go Back</GrayButtonWrapper>
    );
};

export default GoBackButton;

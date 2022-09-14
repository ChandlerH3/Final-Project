import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
    return (
    <Wrapper style={{ width: size, height: size, background: color }}></Wrapper>
    );
};
const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const fade = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const Wrapper = styled.div`
    border-radius: 50%;
    animation: ${scale} 300ms forwards, ${fade} 1000ms forwards;
`;
export default PoppingCircle

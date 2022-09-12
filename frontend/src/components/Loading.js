import React from "react";
import styled from "styled-components";
const loadingImg =
"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => {
    return(
        <Wrapper>
            <img src={loadingImg} alt="Loading..." />
        </Wrapper>
    )
    }
const Wrapper = styled.div`
text-align: center;
`
export default Loading;
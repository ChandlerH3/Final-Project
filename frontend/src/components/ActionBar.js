import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { FiShare, FiMessageCircle } from "react-icons/fi";
import { Context } from "./Context";

const ActionBar = ({id}) => {
    const [expand, set] = useState(false)
    return (
        <Wrapper>
            <Container>
                <FiMessageCircle onClick={()=> set(!expand)} />
            </Container>
            {expand && <p>expand</p>}
        </Wrapper>
    );
};
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 48px;
`;

const Container = styled.div`
display: flex;
align-items: center;
`
const LikeDiv = styled.div`
display:flex;
align-items:center;
`
export default ActionBar;

import styled from "styled-components";

const Loading = () => {
    return(
        <Wrapper>
        </Wrapper>
    )
    }
const Wrapper = styled.div`
border: 10px solid #dcdeed;
border-top: 10px solid #B98F20;
border-radius: 50%;
width: 80px;
height: 80px;
animation: spin 1s linear infinite;
@keyframes spin {
0% {
transform: rotate(0deg);
}
100% {
transform: rotate(360deg);
}
} 
`
export default Loading;
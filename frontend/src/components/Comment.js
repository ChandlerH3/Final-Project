import { BsArrowReturnRight } from "react-icons/bs";
import styled from "styled-components";

export const Comment = () => {
    return (
        <Wrapper> 
        <BsArrowReturnRight style={{height:"50px", backgroundColor:"transparent"}}/>
        <Input />
        </Wrapper>
    )
}
const Input = styled.input`
border-radius: 18px;
padding: 8px 10px;
&:focus{
outline: none;
border-radius: 18px;
}
margin-left:10px;
`

const Wrapper = styled.div`
display: flex;
align-items: center`
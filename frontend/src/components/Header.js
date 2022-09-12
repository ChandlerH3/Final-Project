import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import AuthNav from './auth-nav';



export const Header = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    } 
    return (
        <>
            <Wrapper>
                <Container>
                    <p onClick={handleClick}>The District</p>
                </Container>
                <Menu>
                    <Div>
                        <StyledLink to="/community">Community</StyledLink>
                    </Div>
                    <AuthNav/>
                </Menu>
            </Wrapper>
        </>
    )
}
const Div = styled.div`
display: flex;
flex-direction: column;
`
const StyledLink = styled(Link)`
text-decoration: none;
margin-right: 10px;
opacity: 0.8;
transition: all 150ms ease-in-out;
    &:visited{
        color:black;
    }
    &:hover{
        opacity: 1;
    }
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width:100%;
align-items: center;
padding: 10px 10px;
`
const Container = styled.div`
display: flex;
align-items: center;
`

const Menu = styled.div`
display: flex;
align-items: center;
`

const Input = styled.input`
display: block;
border-radius: 5px;
border: 1px solid lightgrey;
margin-right: 8px;
height: 30px;
width: 20rem;
&:focus{
    outline: none;
    }
`
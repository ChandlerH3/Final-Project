import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import AuthNav from './auth-nav';


export const Header = () => {
    const {user, isAuthenticated} = useAuth0()
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
                {isAuthenticated && <p style={{opacity:0.8}}>Welcome {user?.nickname}</p>}
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
margin-right: 10px;
`
const StyledLink = styled(Link)`
font-weight: bolder;
text-decoration: none;
margin-right: 20px;
opacity: 0.8;
transition: all 150ms ease-in-out;
color: #dcdeed;
    &:visited{
        color:#dcdeed;
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
padding: 15px;
border-bottom: 2px solid #B98F20;
font-size:20px;
`
const Container = styled.div`
display: flex;
align-items: center;
font-weight: bolder;
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
import { useState, useEffect, useContext} from "react"
import styled from "styled-components"
import { Context } from "./Context"
import { ListBlock } from "./ListBlock"
import { BiArrowToRight } from "react-icons/bi";
import apple from "../img/apple.jpg"
import disney from "../img/disney.jpg"
import netflix from "../img/netflix.jpg"
import hulu from "../img/hulu.jpg"
import prime from "../img/prime.jpg"
import { Link } from "react-router-dom"
import { useTransition, animated } from 'react-spring'
import { useAuth0 } from "@auth0/auth0-react"

export const Homepage = () => {
    const { loginWithRedirect } = useAuth0();
    const slides = [ apple, disney, netflix, hulu, prime];
    const [index, set] = useState(0);
    const {isAuthenticated} = useContext(Context)
    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0,
            height:"600px",
            backgroundSize: "cover",
            display: "inlineBlock",
            width:"800px",},
        enter: { opacity: 1, 
            height:"600px",
            backgroundSize: "cover",
            display: "inlineBlock",
            width:"800px",},
        leave: { opacity: 0,
            height:"600px",
            backgroundSize: "cover",
            display: "inlineBlock",
            width:"800px", },
        config: { duration: 2000,mass: 1, tension: 210, friction: 20},
        exitBeforeEnter: true,
})
    useEffect(() => void setInterval(() => set(state=> (state + 1) % 5), 2000), [])

    return (
    <Wrapper>
        <Banner>
            <Content>
                    <Title>This is <span style={{fontStyle:"italic"}}>THE DISTRICT</span></Title>
                    <p style={{fontSize: "28px", width:"550px", textAlign:"left", marginTop: "15px", lineHeight:"1.1", marginBottom:"40px", color:"#dcdeed"}}>A website to share your experience with your favourite streaming platform</p>
                    {isAuthenticated ? <StyledLink to="/community">Visit the Community<BiArrowToRight style={{backgroundColor:"transparent"}}/></StyledLink>
                    :
                    <Login onClick={() => loginWithRedirect({
                        appState: {
                            returnTo: window.location.origin
                        }
                    })}>Log in &amp; Start voting<BiArrowToRight style={{backgroundColor:"transparent"}}/></Login>  }        
            </Content>
            <SlideContainer>
                <SlideBlock>
                    {transitions((style, i) => (
                        <animated.div
                            style={{
                                ...style,
                                backgroundImage: `url('${slides[i]}')`
                            }}
                            />
                        ))}
                </SlideBlock>
            </SlideContainer>
        </Banner>
        <ListBlock />
    </Wrapper>
    )
} 
const Login = styled.div`
color:#B98F20;
font-size:24px;
text-decoration:none;
border-bottom:1px solid #B98F20;
padding-bottom:5px;
text-align: center;
width: 52%;
display: flex;
align-items: center;
justify-content: space-around;
margin-top:10px;
cursor:pointer;
`
const StyledLink = styled(Link)`
cursor:pointer;
margin-top:10px;
color:#B98F20;
font-size:24px;
text-decoration:none;
border-bottom:1px solid #B98F20;
padding-bottom:5px;
text-align: center;
display: flex;
align-items: center;
justify-content: space-around;
width: 52%;
    &:visited{
        color:#B98F20;
    }
`
const Title = styled.div`
font-size: 48px;
text-align: left;
font-weight: bold;
`
const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-right: -40px;
`
const SlideContainer = styled.div`
margin: 0;
overflow: hidden;
height: 100%;
`

const SlideBlock = styled.div`
white-space: nowrap;
-webkit-clip-path: polygon(60% 0, 100% 0%, 100% 100%, 40% 100%);
clip-path: polygon(20% 0, 100% 0%, 100% 100%, 10% 100%); 
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
`
const Banner = styled.div`
display: flex;
height: 520px;
justify-content: right;
padding: 0;
margin: 0;
width: 100%;
`

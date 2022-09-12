import { useState, useEffect, useContext} from "react"
import styled from "styled-components"
import { Context } from "./Context"
import { ListBlock } from "./ListBlock"
import LoginButton from "./login-button"
import apple from "../img/apple.jpg"
import disney from "../img/disney.jpg"
import netflix from "../img/netflix.jpg"
import hulu from "../img/hulu.jpg"
import prime from "../img/prime.jpg"
import { Link } from "react-router-dom"
import { useTransition, animated } from 'react-spring'

export const Homepage = () => {
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
                    <p>Welcome to <span>The District</span></p>
                    {isAuthenticated ? <Link to="/community">Visit the Community</Link>
                    :
                    <>
                    <LoginButton text="Log in to vote your favourite streaming platform"/>
                    </>}                
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

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding-left: 100px;
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
justify-content: space-between;
align-items: stretch;
padding: 0;
margin: 0;

`
// const BarDiv = styled.div`
// width: 100%;
// `

// const ItemName = styled.p`
// width: 60px;`
// const VoteItem = styled.div`
// display:flex;
// `
// const VoteContainer = styled.div`
// display:flex;
// flex-direction: column;
// `

// const Name = styled.p`
// text-align:center;
// margin-top: 15px;
// margin-bottom: 10px;
// `
// const Price = styled.p`
// text-align: center;
// `
const Img = styled.img`
width: 100px;
height:100px;
align-self: center;`


const Feature= styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
gap:1.875rem;
margin-top: 20px;
`

// const Wrapper = styled.div`
// display:flex;
// flex-direction: column;
// margin-left: 20px;
// margin-right: 20px;
// align-self: center;
// justify-content: center;
// `

const Movie = styled.div`
display: flex;
flex-direction: column;
text-decoration: none;
margin-top: 20px;
padding: 20px;
color:black;
box-shadow: 0px 3px 12px rgba(0,0,0,0.15);
transition: all 150ms ease-in-out;
    &:visited{
        color:black;
    }
    &:hover{
            transform:scale(1.05)
        }
`

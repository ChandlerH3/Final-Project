import { useState, useEffect} from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Context } from "./Context"

export const Homepage = () => {
    const [message, setMessage] = useState('No messages')

    const streamingList = [
        {name: "Netflix", id:"netflix"},
        {name: "Disney", id:"disney"},
        {name: "Prime", id:"prime"},
        {name: "Apple", id:"apple"},
        {name: "Hulu", id:"hulu"}
    ]
    return (
        <Wrapper>
        <Streaming>
            {streamingList?.map((item)=> {
                return(
                    <StyleLink key={item.id} to={`/${item.name.toLowerCase()}`}>
                        {/* <Img src = {product.imageSrc}/> */}
                        <Name>{item.name}</Name>
                    </StyleLink>
                )
            })}
        </Streaming>
    </Wrapper>
    )
}
const Name = styled.p`
text-align:center;
margin-top: 15px;
margin-bottom: 10px;
`
const Price = styled.p`
text-align: center;
`
const Img = styled.img`
width: 100px;
height:100px;
align-self: center;`


const Streaming= styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
gap:1.875rem;
margin-top: 20px;
`

const Wrapper = styled.div`
display:flex;
flex-direction: column;
margin-left: 20px;
margin-right: 20px;
align-self: center;
justify-content: center;
`

const StyleLink = styled(Link)`
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

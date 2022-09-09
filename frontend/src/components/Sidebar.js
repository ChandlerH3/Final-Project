import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Context } from "./Context"
import { FiChevronUp } from "react-icons/fi";

export const Sidebar = () => {
    const {filtered} = useContext(Context)
    console.log(filtered)
    const [fullPost, set] = useState()
    useEffect(()=> {
            fetch('/getposts')
            .then((res)=>res.json())
            .then((data)=>{
                set(data.data)
            }) 
    }, [])
    const postArray = fullPost?.map(item => item.community)
    const rankArray = {}
    if (postArray){
        for (const item of postArray) {
        if (rankArray[item]) {
        rankArray[item] += 1;
    } else {
        rankArray[item] = 1;
    }
    }}
    const result = Object.entries(rankArray).sort((a, b)=> b[1] -a[1])

    return (
        <Wrapper>
            <Top>
                <Title>
                    Top Communities
                </Title>
                {result?.map((item, index) => {
                    console.log(item[0])
                    return (
                        <Rank>
                            <Number>{index+1}<FiChevronUp/>{item[0].charAt(0).toUpperCase() + item[0].slice(1)}</Number>
                            <StyledLink to={`/community/${item[0]}`}>join</StyledLink>
                        </Rank>
                    )
                })}   
            </Top>
            <Popular>
                <Title>
                    Popular Movies
                </Title>
                <ItemContainer>
                {filtered?.map((item, index) => {
                    return (
                        // <ItemContainer>
                            <Item>
                                {item}
                            </Item>
                        // </ItemContainer>
                    )
                })}
                </ItemContainer>
            </Popular>
        </Wrapper>
    )
}
const Number = styled.div`
width: 100px;
align-items: center;
`
const Wrapper = styled.div`
display:flex;
flex-direction: column;
width:30%;
margin-left: 20px;
`
const Top = styled.div`
display:flex;
flex-direction: column;
margin-bottom: 20px;
border: 1px solid black;
padding: 10px;
border-radius: 1px;
`
const Popular = styled.div`
display:flex;
flex-direction: column;
border: 1px solid black;
padding: 10px;
border-radius: 1px;
`
const Title = styled.h1`
margin-bottom: 10px;
`
const Rank = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
const ItemContainer = styled.div`
display: flex;
flex-flow: row wrap;
`
const Item = styled.div`
font-size: 10px;
border-radius: 8px;
border: 1px solid black;
padding: 5px 8px;
margin-right: 10px;
margin-bottom: 10px;
`
const StyledLink = styled(Link)`
display: block;
border: 1px solid black;
border-radius: 8px;
padding: 5px 8px;
text-decoration: none;
&:visited{
        color:black;
    }
`
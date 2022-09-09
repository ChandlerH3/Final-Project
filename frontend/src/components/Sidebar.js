import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { Context } from "./Context"

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
                    return (
                        <Rank>
                            <>{index+1}: {item[0]}</>
                            <button>join</button>
                        </Rank>
                    )
                })}   
            </Top>
            <Popular>
                <Title>
                    Popular Movies
                </Title>
                {filtered?.map((item, index) => {
                    return (
                        <ItemContainer>
                            <Item>
                                {item}
                            </Item>
                        </ItemContainer>
                    )
                })}
            </Popular>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display:flex;
flex-direction: column;
`
const Top = styled.div`
display:flex;
flex-direction: column;
`
const Popular = styled.div`
display:flex;
flex-direction: column;
`
const Title = styled.h1`
`
const Rank = styled.div`
`
const ItemContainer = styled.div`
display: flex;
flex-flow: row wrap;
`
const Item = styled.div`
/* border-radius: 8px; */
border: 1px solid black;
`
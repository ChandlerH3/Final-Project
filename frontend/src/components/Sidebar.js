import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Context } from "./Context"
import { FiChevronUp } from "react-icons/fi";
import { SiPrime, SiNetflix, SiAppletv, SiHulu} from "react-icons/si";
import disneyLogo from "../img/disney-plus-5636.png"

export const Sidebar = () => {
    const {filtered, movies} = useContext(Context)
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
                        <Rank key={index}>
                            <Number>{index+1}
                                <FiChevronUp/>
                            </Number>
                            <Community>
                                <>{item[0]==="netflix" && <SiNetflix style={{width:"32px", height:"32px"}} />}
                                {item[0]==="apple" && <SiAppletv style={{width:"32px", height:"32px"}} />}
                                {item[0]==="hulu" && <SiHulu style={{width:"32px", height:"32px"}} />}
                                {item[0]==="prime" && <SiPrime style={{width:"32px", height:"32px"}} />}
                                {item[0]==="disney" && <img src={disneyLogo} style={{width:"32px", height:"32px"}}/>}
                                </>
                                <div style={{marginLeft:"10px"}}>  {item[0].charAt(0).toUpperCase() + item[0].slice(1)}</div>
                            </Community>
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
                {movies?.map((item, index) => {
                    return (
                            <ItemLink key={index} to={`/${item.imdbID}`}>
                                {item.title}
                            </ItemLink>
                    )
                })}
                </ItemContainer>
            </Popular>
        </Wrapper>
    )
}
const ItemLink = styled(Link)`
font-size: 10px;
border-radius: 8px;
border: 1px solid black;
padding: 5px 8px;
margin-right: 10px;
margin-bottom: 10px;
text-decoration: none;
color: black;
&:visited{
        color:black;
    }
`
const Community = styled.div`
display: flex;
align-items: center;
margin-left: -20px;
width: 100px;
`
const Number = styled.div`
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
align-items: center;
margin-bottom: 10px;
`
const ItemContainer = styled.div`
display: flex;
flex-flow: row wrap;
`
const StyledLink = styled(Link)`
display: block;
border: 1px solid black;
border-radius: 8px;
padding: 5px 8px;
color: black;
text-decoration: none;
&:visited{
        color:black;
    }
`
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Context } from "./Context"
import { FiChevronUp } from "react-icons/fi";
import { SiPrime, SiNetflix, SiAppletv, SiHulu} from "react-icons/si";
import disneyLogo from "../img/disney-plus-5636.png"
import Loading from "./Loading";

export const Sidebar = () => {
    const {merg, genres, netflixD} = useContext(Context)
    const movies = []
    if (netflixD) {
    merg.map((item)=> {
        Object.values(item).forEach((movie) => {
            movie.forEach((each) => {
                movies.push(each)
            })
            
        })
    }
        )
    }
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
                {result.length ? result.map((item, index) => {
                    return (
                        <Rank key={index}>
                            <Number>
                                <>{index+1}</>
                                <FiChevronUp style ={{color:"white", backgroundColor:"transparent"}}/>
                            </Number>
                            <CommunityLink to={`/community/${item[0]}`}>
                                <>{item[0]==="netflix" && <SiNetflix style={{width:"50px", height:"45px",color:"black", backgroundColor:"white", borderRadius: "50%",padding:"7px" }} />}
                                {item[0]==="apple" && <SiAppletv style={{width:"50px", height:"45px",color:"black", backgroundColor:"white", borderRadius: "50%",padding:"7px" }} />}
                                {item[0]==="hulu" && <SiHulu style={{width:"50px", height:"45px",color:"black", backgroundColor:"white", borderRadius: "50%",padding:"7px" }} />}
                                {item[0]==="prime" && <SiPrime style={{width:"50px", height:"45px",color:"black", backgroundColor:"white", borderRadius: "50%", padding:"7px" }} />}
                                {item[0]==="disney" && <img src={disneyLogo} style={{width:"50px", height:"40px",color:"black", backgroundColor:"white", borderRadius: "50%",padding:"7px" }}/>}
                                </>
                                <div style={{marginLeft:"10px"}}>  {item[0].charAt(0).toUpperCase() + item[0].slice(1)}</div>
                            </CommunityLink>
                            <StyledLink to={`/community/${item[0]}`}>join</StyledLink>
                        </Rank>
                    )
                })  
                : <div style={{display: "flex",
                justifyContent: "center"}}><Loading /></div>
            } 
            </Top>
            <Popular>
                <Title>
                    Popular Movies
                </Title>
                <ItemContainer>
                {movies?.map((item, index) => {      
                    return (
                            <ItemLink key={index} to={`/${item?.imdbID}`}>
                                {item?.title}
                            </ItemLink>
                    )
                })}
                </ItemContainer>
            </Popular>
        </Wrapper>
    )
}
const ItemLink = styled(Link)`
font-size: 12px;
border-radius: 8px;
border: 1px solid black;
padding: 10px 12px;
margin-right: 10px;
margin-bottom: 10px;
text-decoration: none;
background-color:#dcdeed;
color: black;
opacity: 0.8;
    &:hover{
        opacity: 1;
    }
&:visited{
        color: black;
    }
`
const CommunityLink = styled(Link)`
display: flex;
align-items: center;
margin-left: -20px;
width: 100px;
text-decoration: none;
&:visited{
        color: #dcdeed;
    }
`
const Number = styled.div`
align-items: center;
color: #B98F20;
`
const Wrapper = styled.div`
display:flex;
flex-direction: column;
width:30%;
padding-left: 20px;
padding-top: 30px;
padding-right: 30px;
background-color: #b98f20d1;
`
const Top = styled.div`
display:flex;
flex-direction: column;
margin-bottom: 20px;
border: 1px solid #b98f20d1;
padding: 10px;
border-radius: 1px;
`
const Popular = styled.div`
display:flex;
flex-direction: column;
border: 1px solid #b98f20d1;
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
border: 1px solid black;
border-radius: 18px;
padding: 10px 15px;
opacity: 0.8;
background-color: white;
color:black;
text-decoration: none;
transition: all 150ms ease-in-out;
opacity: 0.8;
cursor:pointer;
    &:hover{
        opacity: 1;
    }
    &:visited{
        color:black;
    }
`
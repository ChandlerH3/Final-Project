import styled from "styled-components"
import { useContext } from "react"
import { Context } from "./Context"
import { Link } from "react-router-dom"

export const ListBlock = () => {
    const {netflixD, merg} = useContext(Context)
    // const nA = []
    // const dA = []
    // const pA = []
    // const aA = []
    // const hA = []
    // if (netflixD.length > 0){
    // for (let i = 0; i < 3; i++){
    //     nA.push(netflixD[i])
    //     dA.push(disneyD[i])
    //     pA.push(primeD[i])
    //     aA.push(appleD[i])
    //     hA.push(huluD[i])
    // }}
    //     const merg = [{'Netflix': nA }, {'Disney': dA}, {"Prime": pA}, {"Apple": aA}, {"Hulu": hA}]
        // const merg = [{'Netflix': nA }]
    // if (nA.length > 0 && dA.length > 0){
    //     nA.forEach((movie)=>{
    //         return merg.netflix = {...movie}
    //     })
    // }

    return (
        <>
        {netflixD && merg.map((item, index) =>{
            return (
            <List key={index}>
                <Title>{Object.keys(item)}</Title>
                <Feature>
                    {Object.values(item)[0].map((movie, index)=>{
                        return (
                        <MovieContainer key={index} to={`/${movie.imdbID}`}>
                                <Movie style={{backgroundImage: `url(${movie?.backdropURLs.original})`}}>
                                    <Img src = {movie?.backdropURLs.original}/>
                                </Movie>
                                <MovieTitle>{movie.originalTitle}</MovieTitle>
                        </MovieContainer>  
                        )   
                    })}
                </Feature>
            </List>
            ) 
        })}
        </>
    )
}
const MovieTitle = styled.div`
text-align:center;
border-top: 1px solid black;
padding-top: 10px;
padding-bottom: 10px;
`
const MovieContainer = styled(Link)`
color:black;
box-shadow: 0px 3px 12px rgba(0,0,0,0.15);
text-decoration: none;
    &:visited{
        color:black;
    }
`
const List = styled.div`
margin-bottom: 20px;
margin-left: 50px;
margin-right: 50px;
`
const Title = styled.div`
font-weight: bolder;
`
const Img = styled.img`
align-self: center; 
width:275px;
height: auto;
`
const Feature= styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
gap:1.875rem;
margin-top: 10px;
`
const Movie = styled.div`
display: flex;
flex-direction: column;
text-decoration: none;
/* margin-top: 20px;
margin-bottom:20px; */
color:black;
box-shadow: 0px 3px 12px rgba(0,0,0,0.15);
transition: all 150ms ease-in-out;
    &:visited{
        color:black;
    }
    /* &:hover{
            transform:scale(1.05)
        } */
`

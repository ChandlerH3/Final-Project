import styled from "styled-components"
import { useContext } from "react"
import { Context } from "./Context"
import { Link } from "react-router-dom"

export const ListBlock = () => {
    const {netflixD, merg} = useContext(Context)

    return (
        <div style={{paddingTop: "30px",
            backgroundColor:"#1e1e1c"}}>
        {netflixD && merg?.map((item, index) =>{
            return (
            <List key={index}>
                <Title>{Object.keys(item)}</Title>
                <Feature>
                    {Object.values(item)[0]?.map((movie, index)=>{
                        return (
                        <MovieContainer key={index} to={`/${movie?.imdbID}`}>
                                <Movie style={{backgroundImage: `url(${movie?.backdropURLs.original})`}}>
                                    <Img src = {movie?.backdropURLs.original}/>
                                </Movie>
                                <MovieTitle>{movie?.originalTitle}</MovieTitle>
                        </MovieContainer>  
                        )   
                    })}
                </Feature>
            </List>
            ) 
        })}
        </div>
    )
}
const MovieTitle = styled.div`
text-align:left;
border-top: 2px solid #B98F20;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
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
padding-bottom: 20px;
padding-left: 50px;
padding-right: 50px;

`
const Title = styled.div`
font-weight: bolder;
font-size: 30px;
padding-top: 20px;
padding-bottom: 10px;
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
color:black;
box-shadow: 0px 3px 12px rgba(0,0,0,0.15);
transition: all 150ms ease-in-out;
    &:visited{
        color:black;
    }
`

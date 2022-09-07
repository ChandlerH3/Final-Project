import styled from "styled-components"
import { useContext } from "react"
import { Context } from "./Context"

export const ListBlock = () => {
    const {netflixD, disneyD, primeD, appleD, huluD} = useContext(Context)
    const nA = []
    const dA = []
    const pA = []
    const aA = []
    const hA = []
    if (netflixD.length > 0){
    for (let i = 0; i < 2; i++){
        nA.push(netflixD[i])
        dA.push(disneyD[i])
        pA.push(primeD[i])
        aA.push(appleD[i])
        hA.push(huluD[i])
    }}
        // const merg = [{'Netflix': nA }, {'Disney': dA}, {"Prime": pA}, {"Apple": aA}, {"Hulu": hA}]
        const merg = [{'Netflix': nA }]
    // if (nA.length > 0 && dA.length > 0){
    //     nA.forEach((movie)=>{
    //         return merg.netflix = {...movie}
    //     })
    // }
    console.log(merg)
    return (
        <>
        {netflixD && merg.map((item, index) =>{
            const filtered = Object.values(item)[0]
            return (
            <List key={index}>
                <Title>{Object.keys(item)}</Title>
                <Feature>
                    {filtered.map((movie, index)=>{
                        return (
                        <div key={index}>
                                <Movie>
                                    <Img src = {movie?.posterURLs.original}/>
                                </Movie>
                                <p>{movie.originalTitle}</p>
                            </div>  
                        )   
                    })}
                </Feature>
            </List>
            ) 
        })}
        </>
    )
}
const List = styled.div`
margin-bottom: 20px;
`
const Title = styled.div`
`
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
    /* &:hover{
            transform:scale(1.05)
        } */
`

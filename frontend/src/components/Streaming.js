import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Context } from "./Context"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FiPlus} from "react-icons/fi";

export const Streaming = () => {
    const name = useParams()
    const {netflixD, genres,huluD} = useContext(Context)
    // netflixD.forEach((item)=> {
    //     item.genres.forEach((genre)=>{
    //         console.log(genres[genre])
    //     })
    // })
    console.log(huluD)
    const allD = netflixD.concat(huluD)
    const filteredD = allD.filter((item => Object.keys(item.streamingInfo) == name.streaming))

    return (
        <Wrapper>
            <Movies>
                {filteredD?.map((item)=> {
                    return(
                        <StyleLink to="">
                            <Img src = {item.posterURLs.original}/>
                            <Container>
                                <Left>
                                    <Name>{item.originalTitle}</Name>
                                    <p>{item.year}</p>
                                    <Genre>{item.genres.map((genre)=> {
                                        return (
                                                <p>{genres[genre]}</p>
                                        )
                                        })}
                                    </Genre>
                                    <p>{Object.keys(item.streamingInfo)[0].charAt(0).toUpperCase() + Object.keys(item.streamingInfo)[0].slice(1)}</p>
                                </Left>
                                <Right>
                                    <FiPlus/>
                                </Right>
                            </Container>
                            
                        </StyleLink>
                    )
                })}
            </Movies>
    </Wrapper>
    )
}

const Genre = styled.div`
display:flex;
`
const Container = styled.div`
display:flex;
justify-content: space-between;
`
const Left = styled.div`
display: flex;
flex-direction: column;
`
const Right = styled.div`
display: flex;
`
const Name = styled.p`
`
const Img = styled.img`
max-width:100%;
height:auto;
align-self: center;
border-radius: 8px;
`


const Movies = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
gap:1.875rem;
margin-top: 20px;
border-radius: 8px;
padding: 0;
`

const Wrapper = styled.div`
display:flex;
flex-direction: column;
margin-left: 20px;
margin-right: 20px;
align-self: center;
justify-content: center;
border-radius: 8px;
`

const StyleLink = styled(Link)`
display: flex;
flex-direction: column;
text-decoration: none;
margin-top: 20px;
color:black;
box-shadow: 0px 3px 12px rgba(0,0,0,0.15);
transition: all 150ms ease-in-out;
    &:visited{
        color:black;
    }
`

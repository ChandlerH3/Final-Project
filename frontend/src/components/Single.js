import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Context } from "./Context"
import styled from "styled-components"
import { SiPrime, SiNetflix, SiAppletv, SiHulu, SiSlideshare} from "react-icons/si";
import { BsFillShareFill } from "react-icons/bs";
import disneyLogo from "../img/disney-plus-5636.png"

export const Single = () => {
    const navigate = useNavigate()
    const name = useParams()
    const {merg, genres, netflixD, setTopic} = useContext(Context)
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
    const filter = movies?.findIndex((movie)=> 
        movie.imdbID === name.single
    )
    return (
        <>
        {movies[filter] ? 
            <Wrapper>
                <Container>
                    <Img src = {movies[filter].posterURLs.original}/>
                    <Right>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                        <Title>
                            <Name>{movies[filter].originalTitle}</Name>
                            <p>{movies[filter].year}</p>
                        </Title>
                        <BsFillShareFill style={{backgroundColor:"transparent", color:"#B98F20", fontSize:"28px", cursor:"pointer"}} onClick={()=>{setTopic(movies[filter].originalTitle)
                            navigate("/community")}} />
                        </div>
                        
                        <Genre>{movies[filter].genres.map((genre, index)=> {
                                return (
                                        <Pill key={index}>{genres[genre]}</Pill>
                                )
                                })}
                        </Genre>
                        <Description><p style={{fontWeight: "bolder"}}>Overview</p>{movies[filter].overview}</Description>
                        <Availability>
                            <p style={{fontWeight: "bolder"}}>Availabe on:</p>  
                        {Object.keys(movies[filter].streamingInfo).length === 1 ? 
                        <>
                        {Object.keys(movies[filter].streamingInfo)[0]==="netflix" && <SiNetflix style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color:"#E50914"}} />}
                        {Object.keys(movies[filter].streamingInfo)[0]==="apple" && <SiAppletv style={{width:"50px", height:"50px",backgroundColor:"white", color:"#555555",borderRadius: "50%",padding:"7px"}} />}
                        {Object.keys(movies[filter].streamingInfo)[0]==="hulu" && <SiHulu style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color:"#1ce783"}} />}
                        {Object.keys(movies[filter].streamingInfo)[0]==="prime" && <SiPrime style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color:"#00A8E1"}} />}
                        {Object.keys(movies[filter].streamingInfo)[0]==="disney" && <img src={disneyLogo} style={{width:"50px", height:"50px",backgroundColor:"white", borderRadius: "50%",padding:"7px"}}/>}
                        </>
                        :
                        movies[filter].streamingInfo.map((streaming, index)=> {
                                return (
                                    <div key={index}>
                                        {Object.keys(streaming)[0]==="netflix" && <SiNetflix style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color: "#E50914"}} />}
                                        {Object.keys(streaming)[0]==="apple" && <SiAppletv style={{width:"50px", height:"50px",backgroundColor:"white", color:"#555555",borderRadius: "50%",padding:"7px"}} />}
                                        {Object.keys(streaming)[0]==="hulu" && <SiHulu style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color:"#1ce783"}} />}
                                        {Object.keys(streaming)[0]==="prime" && <SiPrime style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color:"#00A8E1"}} />}
                                        {Object.keys(streaming)[0]==="disney" && <img src={disneyLogo} style={{width:"50px", height:"50px",backgroundColor:"white", borderRadius: "50%",padding:"7px"}}/>}
                                    </div>
                                )
                                })
                        }
                        
                        </Availability>
                    </Right> 
                </Container>
            </Wrapper>
        :
        <div>loading</div>
        }
        </>
        
    )
}
const Container = styled.div`
display:flex;
width: 80%;
`
const Description = styled.div`
margin-bottom: 20px;
line-height:1.5;
word-spacing: 2px;
`

const Availability = styled.div`
display:flex;
align-items: center;`

const Title = styled.div`
display:flex;
align-items:center;
margin-bottom: 20px;
`
const Pill = styled.div`
border-radius: 50px;
margin-right: 10px;
border: 1px solid black;
padding: 5px 8px;
border:none;
background-color:#dcdeed;
color: black;
`
const Genre = styled.div`
display:flex;
margin-bottom: 20px;
`
const Right = styled.div`
display: flex;
flex-direction: column;
padding-left: 50px;
`
const Name = styled.p`
font-size: 2em;
margin-right: 5px;
font-weight: bolder;
color: #B98F20;
`
const Img = styled.img`
width: 300px;
height:auto;
align-self: center;
`

const Wrapper = styled.div`
display:flex;
justify-content: center;
padding-top:100px;
padding-bottom: 100px;
border-bottom: 2px solid #B98F20;
`

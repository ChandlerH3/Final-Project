import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "./Context";
import { SiPrime, SiNetflix, SiAppletv, SiHulu} from "react-icons/si";
import disneyLogo from "../img/disney-plus-5636.png"
import { BsDot } from "react-icons/bs";
import ActionBar from "./ActionBar";
import Loading from "./Loading";

export const PostList = () => {
    const {postList} = useContext(Context)
    return (
        <Wrapper>
                        <Content>
                            {postList ? postList.map((post, index) => {
                                return (
                            <Post key={index} >
                                <StyledLink to={`/community/${post.community}`}>
                                {post.community==="netflix" && <SiNetflix style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color: "#E50914"}} />}
                                        {post.community==="apple" && <SiAppletv style={{width:"50px", height:"50px",backgroundColor:"white", color:"#555555",borderRadius: "50%",padding:"7px"}} />}
                                        {post.community==="hulu" && <SiHulu style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color:"#1ce783"}} />}
                                        {post.community==="prime" && <SiPrime style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color:"#00A8E1"}} />}
                                        {post.community==="disney" && <img src={disneyLogo} style={{width:"50px", height:"50px",backgroundColor:"white", borderRadius: "50%",padding:"7px"}}/>}
                                </StyledLink>
                                <Details key={post.id}>
                                    <Bio style={{display:"flex"}}>
                                        <Avatar src={post.picture} />
                                        <Name>{post.user}</Name>
                                        <Handle><BsDot style={{alignSelf: 'center',backgroundColor:"transparent", color:"white"}}/>{post.date}</Handle>
                                    </Bio>
                                    <Feed>{post.post.charAt(0).toUpperCase() + post.post.slice(1)}</Feed>
                                    <ActionBar id={post.id}/>
                                </Details>
                            </Post >
                                )
                            })
                            : <div style={{display: "flex",
                            justifyContent: "center"}}><Loading /></div>
                        }
                        </Content>
        </Wrapper>
    );
}

const StyledLink = styled(Link)`
margin-right: 20px;
display: block;
text-decoration: none;
width: 75px;
text-align: center;
&:visited{
        color:black;
    }
    border-right: 1px solid #B98F20;
`
const Details = styled.div`
`
const Post = styled.div`
border-radius: 1px;
border: 1px solid #B98F20;
margin-bottom: 20px;
display: flex;
align-items: center;
padding: 8px 10px;
`
const Bio = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
`
const Content = styled.div`
margin-left:10px;
width:100%;
background-color: #B98F20;
`
const Feed = styled.p`
margin-bottom: 10px;
`

const Name = styled.p`
font-size: 1rem;
font-weight: bold;
color: #B98F20;
`

const Handle = styled.p`
color: grey;
align-self: center;
margin-left: 5px;
display:flex;`

const Avatar = styled.img`
border-radius: 50%;
width: 50px;
height: 50px;
margin-right:10px;`

const Wrapper = styled.div`
width: 500px;
background-color: #B98F20;
padding-left: 20px;
`
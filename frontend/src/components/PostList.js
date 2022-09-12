import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "./Context";
import { SiPrime, SiNetflix, SiAppletv, SiHulu} from "react-icons/si";
import disneyLogo from "../img/disney-plus-5636.png"
import { BsDot } from "react-icons/bs";

export const PostList = () => {
    const {postList} = useContext(Context)
    return (
        <Wrapper>
            <Title>
                        <Content>
                            {postList && postList.map((post, index) => {
                                return (
                            <Post key={index} >
                                <StyledLink to={`/community/${post.community}`}>
                                {post.community==="netflix" && <SiNetflix style={{width:"32px", height:"32px"}} />}
                                {post.community==="apple" && <SiAppletv style={{width:"32px", height:"32px"}} />}
                                {post.community==="hulu" && <SiHulu style={{width:"32px", height:"32px"}} />}
                                {post.community==="prime" && <SiPrime style={{width:"32px", height:"32px"}} />}
                                {post.community==="disney" && <img src={disneyLogo} style={{width:"48px", height:"48px"}}/>}
                                </StyledLink>
                                <Details key={post.id}>
                                    <Bio style={{display:"flex"}}>
                                        <Avatar src={post.picture} />
                                        <Name>{post.user}</Name>
                                        <Handle><BsDot style={{alignSelf: 'center'}}/>{post.date}</Handle>
                                    </Bio>
                                    <Feed>{post.post.charAt(0).toUpperCase() + post.post.slice(1)}</Feed>
                                </Details>
                            </Post >
                                )
                            })}
                        </Content>
            </Title>
        </Wrapper>
    );
}

const StyledLink = styled(Link)`
display: block;
text-decoration: none;
width: 75px;
text-align: center;
&:visited{
        color:black;
    }
`
const Details = styled.div`
`
const Post = styled.div`
border-radius: 1px;
border: 1px solid black;
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
`
const Feed = styled.p`
margin-bottom: 10px;
`

const Name = styled.p`
font-size: 1rem;
font-weight: bold;
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

const Title = styled.div`
display: flex;
`
const Wrapper = styled.div`
width: 500px;
`
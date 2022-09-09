import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "./Context";
import { SiPrime, SiNetflix, SiAppletv, SiHulu} from "react-icons/si";
import disneyLogo from "../img/disney-plus-5636.png"

export const PostList = () => {
    const {postList} = useContext(Context)
    return (
        <TweetLink>
            <Title>
                    {/* <Avatar src={tweet.author.avatarSrc} onClick={(e)=>{
                        e.preventDefault();
                        handleClick()} }>
                        </Avatar> */}
                        <Content>
                            {postList && postList.map((post) => {
                                return (
                            // {/* <Bio onClick={(e)=>{
                            //     e.preventDefault();
                            //     handleClick()} }>
                            //     <Name>{tweet.author.displayName}</Name>
                            //     <Handle>@{tweet.author.handle}<BsDot style={{alignSelf: 'center'}}/>{moment(tweet.timestamp).format('MMMM Do')}</Handle>
                            // </Bio> */}
                            <Post >
                                <StyledLink to={`/community/${post.community}`}>
                                {post.community==="netflix" && <SiNetflix style={{width:"32px", height:"32px"}} />}
                                {post.community==="apple" && <SiAppletv style={{width:"32px", height:"32px"}} />}
                                {post.community==="hulu" && <SiHulu style={{width:"32px", height:"32px"}} />}
                                {post.community==="prime" && <SiPrime style={{width:"32px", height:"32px"}} />}
                                {post.community==="disney" && <img src={disneyLogo} style={{width:"48px", height:"48px"}}/>}
                                </StyledLink>
                                <Details key={post.id}>
                                    <Handle>{post.date}</Handle>
                                    <Feed>{post.post}</Feed>
                                </Details>
                            </Post >
                            
                                )
                            })}
                        </Content>
            </Title>
        </TweetLink>
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
font-size: 1.1rem;
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
height: 50px;`

const Title = styled.div`
display: flex;
`
const TweetImg = styled.img`
border-radius: 20px;
width: 800px;
`

const TweetLink = styled.div`
width: 500px;
`

const Wrapper = styled.div`
border-top: 1px solid lightgrey;`
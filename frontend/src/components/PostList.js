import { useContext } from "react";
import styled from "styled-components";
import { Context } from "./Context";

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
                            <div key={post.id}>
                            <Handle>{post.date} {post.community}</Handle>
                            <Feed>{post.post}</Feed>
                            </div>
                                )
                            })}
                        </Content>
            </Title>
        </TweetLink>
    );
}
const Bio = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
`
const Content = styled.div`
margin-left:10px;
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
margin-left: 10px;
margin-top: 20px;
`
const TweetImg = styled.img`
border-radius: 20px;
width: 800px;
`

const TweetLink = styled.div`
color: black;
border-top: 1px solid lightgrey;
`

const Wrapper = styled.div`
border-top: 1px solid lightgrey;`
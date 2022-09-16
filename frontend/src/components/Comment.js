import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import styled from "styled-components";
import { Context } from "./Context";
import { BsDot } from "react-icons/bs";

export const Comment = ({post, params, date}) => {
    const {c, setC, postList, setPostList} = useContext(Context)
    const { user } = useAuth0()
    console.log(post.comments)
    const handleComment = () =>{
        if (Object.keys(params).length > 0 ){
        fetch('/patchComments', {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comments: [{"user": user.nickname, "pic":  user.picture, "comments": c, "date": date}],
                id: post.id
            }),
            })
            .then((res) => res.json())
                .then((data) => {
                    fetch(`/getposts/${params.community}`)
                    .then((res)=>res.json())
                    .then((data)=>{
                        setPostList(data.data)
                    })
                })
            .catch((err) => {
                console.error(err);
            });
        }
    }
    return (
            <Wrapper> 
            <BsArrowReturnRight style={{height:"50px", backgroundColor:"transparent"}}/>
            {post.comments.length > 0 ? 
                <Div>
                {post.comments.length > 0 && <>
                <Post >
                <Details>
                    <Bio style={{display:"flex"}}>
                        <Avatar src={post.comments[0].pic} />
                        <Name>{post.comments[0].user}</Name>
                        <Handle>
                            <BsDot style={{alignSelf: 'center',backgroundColor:"transparent", color:"#dcdeed"}}/>
                            {post.comments[0].date}
                        </Handle>
                    </Bio>
                    <Feed>{post.comments[0]?.comments}</Feed>
                </Details>
                </Post >
                </>
                }
            </Div>
            : 
            <> 
                <Input row="1" type='text' placeholder="Commenting..." onChange={(e)=> {e.preventDefault(); setC(e.target.value)}} />
                <Button onClick={handleComment}>Comment</Button>
            </>}
            </Wrapper>
    )
}
const Button = styled.button`
border:none;
border-radius: 18px;
padding: 5px 10px;
background-color: #B98F20;
color:#dcdeed;
margin-left: 10px;
`
const Input = styled.textarea`
border-radius: 18px;
padding: 10px 10px;
&:focus{
outline: none;
border-radius: 18px;
}
margin-left:10px;
`

const Wrapper = styled.div`
display: flex;
align-items: center;`

const Details = styled.div`
`
const Post = styled.div`
border-radius: 1px;
display: flex;
align-items: center;
padding: 8px 10px;
`
const Bio = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
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

const Div = styled.div`
width: 250px;
margin-left: 20px;
`
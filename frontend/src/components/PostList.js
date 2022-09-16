import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "./Context";
import { SiPrime, SiNetflix, SiAppletv, SiHulu} from "react-icons/si";
import disneyLogo from "../img/disney-plus-5636.png"
import { BsDot, BsFillTrashFill } from "react-icons/bs";
import ActionBar from "./ActionBar";
import Loading from "./Loading";
import { useAuth0 } from "@auth0/auth0-react";


export const PostList = ({handle, params, date}) => {
    const {postList, c, setPostList} = useContext(Context)
    const { user } = useAuth0()
    const handleDelete = (props) => {
        if (Object.keys(params).length > 0){
        fetch('/deletePosts', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: props.id
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
                            {postList ? postList.map((post, index) => {
                                return (
                            <Post key={index} >
                                <StyledLink to={`/community/${post.community}`}>
                                {post.community==="netflix" && <SiNetflix style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color: "#E50914"}} />}
                                        {post.community==="apple" && <SiAppletv style={{width:"40px", height:"40px",backgroundColor:"white", color:"#555555",borderRadius: "50%",padding:"7px", marginRight:"10px"}} />}
                                        {post.community==="hulu" && <SiHulu style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color:"#1ce783"}} />}
                                        {post.community==="prime" && <SiPrime style={{width:"32px", height:"32px", marginRight:"10px",color:"black",backgroundColor:"transparent", color:"#00A8E1"}} />}
                                        {post.community==="disney" && <img src={disneyLogo} style={{width:"45px", height:"45px",backgroundColor:"white", borderRadius: "50%",padding:"7px"}}/>}
                                </StyledLink>
                                <Details>
                                    <Bio style={{display:"flex"}}>
                                        <div style={{display:"flex", alignItems:"center"}}>
                                            <Avatar src={post.picture} />
                                            <Name>{post.user}</Name>
                                            <Handle><BsDot style={{alignSelf: 'center',backgroundColor:"transparent", color:"white"}}/>{post.date}</Handle>
                                        </div>
                                        <>
                                        {post.user === user?.nickname && 
                                        <Div onClick={()=>handleDelete(post)}>
                                            <BsFillTrashFill style={{backgroundColor:"transparent"}}/>
                                        </Div>
                                        }
                                        </>
                                    </Bio>
                                    <Feed>{post.post.charAt(0).toUpperCase() + post.post.slice(1)}</Feed>
                                    <ActionBar id={post.id} number={post.likes} handle={handle} params={params} post={post} date={date} commentN={post.comments.length}/>
                                </Details>
                            </Post >
                                )
                            })
                            : <div style={{display: "flex",
                            justifyContent: "center"}}><Loading /></div>
                        }
        </Wrapper>
    );
}
const Div = styled.div`
opacity: 0.8;
cursor: pointer;
&:hover{
        opacity: 1;
    }
`
const StyledLink = styled(Link)`
margin-right: 20px;
display: block;
text-decoration: none;
width: 75px;
text-align: center;
&:visited{
        color:black;
    }
    border-right: 1px solid #b98f20d1;
`
const Details = styled.div`
`
const Post = styled.div`
border-radius: 1px;
display: flex;
align-items: center;
padding: 8px 10px;
border-bottom: 20px solid #b98f20d1;
`
const Bio = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
justify-content: space-between;
width: 400px;
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
padding-left: 20px;
padding-top:30px;
background-color: #b98f20d1;
`
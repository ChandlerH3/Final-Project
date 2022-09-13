import { useContext, useEffect, useState} from "react"
import { Context } from "./Context"
import styled from "styled-components"
import { PostList } from "./PostList"
import { useAuth0 } from "@auth0/auth0-react"
import { Sidebar } from "./Sidebar"
import { useParams } from "react-router-dom"


export const Community = () => {
    const params = useParams()
    const community = params.community
    const {post, setPost, setPostList, voted, l} = useContext(Context)
    const { isAuthenticated, user } = useAuth0()
    //timestamp
    let dateObj = new Date()
    let month = dateObj.getUTCMonth() + 1
    let day = dateObj.getUTCDate()
    let year = dateObj.getUTCFullYear()
    const date = year + "/" + month + "/" + day


    //get postList from db
    useEffect(()=> {
        if (Object.keys(params).length === 0){
            fetch('/getposts')
            .then((res)=>res.json())
            .then((data)=>{
                setPostList(data.data)
            })
        }
        if (Object.keys(params).length > 0){
            console.log("fetch each")
            fetch(`/getposts/${params.community}`)
            .then((res)=>res.json())
            .then((data)=>{
                setPostList(data.data)
            })
        }
        
    }, [params])

    const handleSubmit = (e) => {
            fetch('/addPosts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                likes: l,
                picture: user.picture,
                user: user.nickname,
                community: community,
                post: post,
                date: date
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
    return (
        isAuthenticated ? 
        <Wrapper>
            <Home>
            {Object.keys(params).length > 0 && 
            <>
                <textarea rows='5' cols='50' type='text' placeholder="What's steaming?" style={{}} onChange={(e)=> {e.preventDefault(); setPost(e.target.value)}}></textarea>
                <Button type="submit" onClick={handleSubmit} disabled={post.length <= 5 ? true : false}>Post</Button>
            </>
}
                <PostList />
            </Home>
            <Sidebar />
        </Wrapper>
        :
        <Wrapper>
            <PostList />
            <Sidebar />
        </Wrapper>
        
    )
}
const Wrapper = styled.div`
display:flex;
justify-content: center;
margin-top: 30px;
`
const Home = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`

const Button = styled.button`
margin-top: 20px;
margin-bottom: 20px;
background-color: #B98F20;
border-radius: 50px;
padding:10px 20px;
font-size: 16px;
border: none;
color: white;
&:disabled{
    opacity: 0.5;
    border: none;
}`

const P = styled.p`
padding:10px 20px;
align-self:center;
color: grey;
`

const RedP = styled.p`
padding:10px 20px;
align-self:center;
color: red`

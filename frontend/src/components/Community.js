import { useContext, useEffect} from "react"
import { Context } from "./Context"
import styled from "styled-components"
import { PostList } from "./PostList"
import { useAuth0 } from "@auth0/auth0-react"

export const Community = () => {
    const {post, setPost, setPostList} = useContext(Context)
    const { isAuthenticated } = useAuth0()
    //timestamp
    let dateObj = new Date()
    let month = dateObj.getUTCMonth() + 1
    let day = dateObj.getUTCDate()
    let year = dateObj.getUTCFullYear()
    const date = year + "/" + month + "/" + day

    //get postList from db
    useEffect(()=> {
        fetch('/getposts')
            .then((res)=>res.json())
            .then((data)=>{
                setPostList(data.data)
            })
    }, [])

    const handleSubmit = (e) => {
            fetch('/addPosts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post: post,
                date: date
            }),
            })
            .then((res) => res.json())
            .then((data) => {
                fetch('/getposts')
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
        <Home>
            <textarea rows='10' cols='50' type='text' placeholder="What's happening?" onChange={(e)=> {e.preventDefault(); setPost(e.target.value)}}></textarea>
            <ButtonDiv>
                {post.length <= 10 ? <P> {10-post.length}</P> : <RedP> {10-post.length}</RedP>}
                <Button type="submit" onClick={handleSubmit} disabled={post.length <= 5 ? true : false}>Post</Button>
            </ButtonDiv>
            <PostList/>
        </Home> :
        <>results of voting</>
    )
}
const Home = styled.form`
display: flex;
flex-direction: column;
margin-top: 20px;
align-items: center;
`

const ButtonDiv = styled.div`
display: flex;
justify-content: end;
margin-top: 20px;
margin-bottom: 20px;
`

const Button = styled.button`
background-color: pink;
border-radius: 50px;
color: white;
padding:10px 20px;
font-size: 16px;
border: none;
&:disabled{
    background-color: rgb(77 0 255 / 20%);
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

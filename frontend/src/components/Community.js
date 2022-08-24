import { useContext } from "react"
import { Context } from "./Context"
import styled from "styled-components"

export const Community = () => {
    //feed if signed in
    //result of voting if not signed in
    const {netflixD, post, setPost} = useContext(Context)
    console.log(netflixD)
    return (
        <Home>
            <h1>Home</h1>
            <textarea rows='10' cols='50' type='text' placeholder="What's happening?" onChange={(e)=> setPost(e)}></textarea>
            <ButtonDiv>
                {post.length <= 280 ? <P> {280-post}</P> : <RedP> {280-post.length}</RedP>}
                <Button type="submit" onClick={(e)=> console.log(e)} disabled={post.length <= 280 ? false : true}>Post</Button>
            </ButtonDiv>
        </Home>
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
color: grey`

const RedP = styled.p`
padding:10px 20px;
align-self:center;
color: red`

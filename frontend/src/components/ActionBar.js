import styled from "styled-components";
import { useContext, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { Context } from "./Context";
import LikeButton from "./LikeButton/LikeButton"
import { Comment } from "./Comment";
import { useAuth0 } from "@auth0/auth0-react";

const ActionBar = ({number, params, id, post, date, commentN}) => {
    const [like, setLike] = useState(false);
    const {l, setPostList} = useContext(Context)
    const [expand, set] = useState(false)
    const {isAuthenticated} = useAuth0()

    //add likes number to post data using id
    const handleToggleLike = () =>{
    if (Object.keys(params).length > 0 ){
    setLike(true);
    fetch('/patchLikes', {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            likes: number+1,
            id: id
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
        <>
        <Wrapper>
            <Container>
                <div onClick={handleToggleLike}><LikeButton like={like}/></div>
            </Container>
            <p>{number}</p>
            <FiMessageCircle style={{backgroundColor:"transparent", width:"18px", height:"18px", marginLeft:"10px", marginRight:"10px"}} onClick={()=> set(!expand)} />
            <p>{commentN}</p>
        </Wrapper>
        {expand && isAuthenticated && <Comment post={post} params={params} date={date}/>}
        </>
    );
};
const Wrapper = styled.div`
display: flex;
align-items: center;
height: 48px;
`;

const Container = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
`
const LikeDiv = styled.div`
display:flex;
align-items:center;
`
export default ActionBar;

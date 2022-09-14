import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { FiShare, FiMessageCircle } from "react-icons/fi";
import { Context } from "./Context";
import LikeButton from "./LikeButton/LikeButton"

const ActionBar = ({number, params, id}) => {
    const [like, setLike] = useState(false);
    const [numOfLikes, setNumOfLikes] = useState(0)
    const {l, setPostList} = useContext(Context)
    const handleToggleLike = () =>{
    setLike(true);
    // setNumOfLikes(l+1)
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
    return (
        <Wrapper>
            <Container>
                {/* <FiMessageCircle onClick={()=> set(!expand)} /> */}
                <div onClick={handleToggleLike}><LikeButton like={like}/></div>
            </Container>
            <p>{number}</p>
            {/* {expand && <p>expand</p>} */}
        </Wrapper>
    );
};
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 48px;
`;

const Container = styled.div`
display: flex;
align-items: center;
`
const LikeDiv = styled.div`
display:flex;
align-items:center;
`
export default ActionBar;

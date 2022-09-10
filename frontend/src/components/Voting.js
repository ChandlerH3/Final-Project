import { useContext, useState } from 'react'
import { Context } from './Context'
import { Bar } from './Bar'
import styled from 'styled-components'
import { SiPrime, SiNetflix, SiAppletv, SiHulu} from "react-icons/si";
import disneyLogo from "../img/disney-plus-5636.png"

export const Voting =({width})=> {
    const {nVote, setNVote,dVote,setDVote,aVote,setAVote,pVote,setPVote,hVote,setHVote, voted, setVoted, isAuthenticated, voteResult, setVoteResult} = useContext(Context)
    const [test, setTest] = useState(false)
    //votes calculation
    const votes = [nVote, dVote, pVote, aVote, hVote]
    const result = votes.reduce((a,b)=> a+b, 0)
    const percentage = []
    for(let i = 0; i< votes.length; i++){
        if (result > 0){
        percentage.push(Math.round(votes[i]/result*100))
        } 
    }

    const streamingList = [
        {name: "Netflix", id:"netflix", vote: `${nVote}`, percentage: `${percentage[0]}`},
        {name: "Disney", id:"disney", vote: `${dVote}`, percentage: `${percentage[1]}`},
        {name: "Prime", id:"prime", vote: `${pVote}`, percentage: `${percentage[2]}`},
        {name: "Apple", id:"apple", vote: `${aVote}`, percentage: `${percentage[3]}`},
        {name: "Hulu", id:"hulu", vote: `${hVote}`, percentage: `${percentage[4]}`}
    ]

    const handleClick = (props) => {
        setVoted(props)
        switch (props){
            case "Netflix":
            setNVote(nVote+1);
            break;
            case "Disney":
            setDVote(dVote+1);
            break;
            case "Prime":
            setPVote(pVote+1);
            break;
            case "Apple":
            setAVote(aVote+1);
            break;
            case "Hulu":
            setHVote(hVote+1);
            break;
        }     
        setTest(true);
    }
    //post if no vote data in db after voting
    if (test && voteResult.length == 0 ) {
        console.log("post data")
        fetch('/addvotes', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        votes: votes,
    }),
    })
    .then((res) => res.json())
    .then((data) => {
        setTest(false)
        fetch('/getvotes')
        .then((res)=>res.json())
        .then((data)=>{
            console.log("clicked", data)
            setVoteResult(data.data)
        })
    })
    .catch((err) => {
        console.error(err);
    }); 
    } 

    //patch if db already has data aftter voting
    if (test && voteResult.length > 0) {
        console.log("patch data")
        fetch("/addvotes", {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                votes: votes,
            }),
            })
            .then((res) => res.json())
            .then((data) => {
                setTest(false)
                fetch('/getvotes')
                .then((res)=>res.json())
                .then((data)=>{
                    console.log("clicked", data)
                    setVoteResult(data.data)
                })
            })
            .catch((err) => {
            console.log("Error :", err);
            });
    }
    console.log(voted)
    return ( 
        <Wrapper>
            {isAuthenticated ? 
            <>
                <List>
                {streamingList?.map((item, index)=> {
                    return(
                        <Container key={index}>
                            {/* <Img src = {product.imageSrc}/> */}
                            <p>
                                    {item.name ==="Netflix" && <SiNetflix style={{width:"32px", height:"32px"}} />}
                                    {item.name==="Apple" && <SiAppletv style={{width:"32px", height:"32px"}} />}
                                    {item.name==="Hulu" && <SiHulu style={{width:"32px", height:"32px"}} />}
                                    {item.name==="Prime" && <SiPrime style={{width:"32px", height:"32px"}} />}
                                    {item.name==="Disney" && <img src={disneyLogo} style={{width:"32px", height:"32px"}}/>}
                            </p>
                            <Cart onClick={() => {handleClick(item.name)}} >{voted === undefined ? "Vote" : "Voted"}</Cart>
                            
                            <Result>
                                    <Bar key={index} width={voted ? item.percentage : 50}/>
                            </Result>
                        </Container>
                    )
                })}
                </List>

                
            </>
            : <>loading</>}
        </Wrapper>
    )
}

const Cart = styled.p`
text-align: center;
border-radius: 8px;
width:200px;
transition: all 150ms ease-in-out;
cursor: pointer;
    &:active{
        transform: scale(0.9);
    }
`
const DisabledCart = styled.p`
color: #ccc;
background-color: #e7e7e7;
padding:10px;
text-align: center;
border-radius: 8px;
width:200px;
font-size:20px;
border:none;
`
const List = styled.div`
display:flex;
justify-content: center;
`

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 3px 12px rgba(0,0,0,0.15);
margin-left:20px;
text-decoration: none;
    &:visited{
        color:black;
    }
`
const Wrapper = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
gap:1.875rem;
margin-top: 10px;
`

const Result = styled.div`
display: flex;
flex-direction: column;
width: 100%`
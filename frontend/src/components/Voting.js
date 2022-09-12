import { useContext, useState } from 'react'
import { Context } from './Context'
import { Bar } from './Bar'
import styled from 'styled-components'
import { SiPrime, SiNetflix, SiAppletv, SiHulu} from "react-icons/si";
import disneyLogo from "../img/disney-plus-5636.png"
import { Link } from 'react-router-dom';
import wp from "../img/wp.jpg"
import Loading from './Loading';

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
    return ( 
        <Wrapper>
            {isAuthenticated ? 
            <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
                <List>
                {streamingList?.map((item, index)=> {
                    return(
                        <Container key={index}>
                            <Img src={wp} />
                            <Logo>
                                    {item.name ==="Netflix" && <SiNetflix style={{width:"32px", height:"32px", borderRadius: "10%", color:"black",backgroundColor:"transparent"}} />}
                                    {item.name==="Apple" && <SiAppletv style={{width:"32px", height:"32px",borderRadius: "50%",color:"black",backgroundColor:"transparent"}} />}
                                    {item.name==="Hulu" && <SiHulu style={{width:"32px", height:"32px",borderRadius: "50%",color:"black", padding:"3px",backgroundColor:"transparent"}} />}
                                    {item.name==="Prime" && <SiPrime style={{width:"32px", height:"32px", borderRadius: "50%", color:"black",padding:"3px", backgroundColor:"transparent"}} />}
                                    {item.name==="Disney" && <img src={disneyLogo} style={{width:"32px", height:"32px", borderRadius: "50%",color:"black", backgroundColor:"transparent"}}/>}
                            </Logo>
                            {voted === undefined ? <Vote onClick={() => {handleClick(item.name)}} > Vote</Vote>
                                : <DisabledV>Vote</DisabledV>}
                            <Result>
                                    <Bar key={index} width={voted && item.percentage}/>
                            </Result>
                        </Container>
                    )
                })}
                </List>   
                {voted && <Suggestion>You voted {voted}. Click <StyledLink to={`/community/${voted.charAt(0).toLowerCase() + voted.slice(1)}`}>HERE</StyledLink> see what's popping in its' community</Suggestion>}
            </div>
            : <Loading />}
        </Wrapper>
    )
}
const Logo = styled.div`
margin-top: -20px;
border-radius: 50%;
border: 1px solid black;
padding: 10px;
margin-bottom: 10px;
background-color: white;
`
const StyledLink = styled(Link)`
`
const Suggestion = styled.div`
border: 1px solid black;
padding: 11px 15px;
margin-top: 75px;
border-radius: 8px;
`
const Vote = styled.p`
border: 1px solid black;
border-radius: 8px;
padding: 5px 8px;
transition: all 150ms ease-in-out;
cursor: pointer;
    &:active{
        transform: scale(0.9);
    }
    margin-bottom: 10px;
`
const DisabledV = styled.p`
color:grey;
border: 1px solid grey;
border-radius: 8px;
padding: 5px 8px;
transition: all 150ms ease-in-out;
cursor: pointer;
    &:active{
        transform: scale(0.9);
    }
margin-bottom: 10px;
`
const Img = styled.img`
width: 100%;
`
const List = styled.div`
display:flex;
justify-content: center;
width: 100%;
`

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 3px 12px rgba(0,0,0,0.15);
margin-left:20px;
width: 15%;
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
width: 100%;
margin-bottom: 10px;`

import { useSpring, animated, config } from 'react-spring'
import { useContext, useState } from 'react'
import { Context } from './Context'
import { Bar } from './Bar'
import styled from 'styled-components'

export const Voting =({width})=> {
    const {nVote, setNVote,dVote,setDVote,aVote,setAVote,pVote,setPVote,hVote,setHVote, setVoted, isAuthenticated, voteResult, setVoteResult} = useContext(Context)
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
        {name: "Netflix", id:"netflix", vote: `${nVote}`, percentage: `${percentage[0]}`, colors: ["#0088FE", "#00C49F", "#FFBB28"]},
        {name: "Disney", id:"disney", vote: `${dVote}`, percentage: `${percentage[1]}`, colors: ["#0088FE", "#00C49F", "#FFBB28"]},
        {name: "Prime", id:"prime", vote: `${pVote}`, percentage: `${percentage[2]}`, colors: ["#0088FE", "#00C49F", "#FFBB28"]},
        {name: "Apple", id:"apple", vote: `${aVote}`, percentage: `${percentage[3]}`, colors: ["#0088FE", "#00C49F", "#FFBB28"]},
        {name: "Hulu", id:"hulu", vote: `${hVote}`, percentage: `${percentage[4]}`, colors: ["#0088FE", "#00C49F", "#FFBB28"]}
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
            <>
            <>
            {streamingList?.map((item)=> {
                return(
                    <Container>
                        {/* <Img src = {product.imageSrc}/> */}
                        <p>{item.name} : {item.percentage}</p>
                        <p>{item.vote}</p> 
                        <p onClick={() => {handleClick(item.name)}} >Vote</p>
                    </Container>
                )
            })}
        </>

            <Result>
            { percentage.length>0 && percentage.map((item) => {
                    return (
                        <Bar width={item}/>
                    )
                })
                }
            </Result>
            </>
            : <>loading</>}
        </Wrapper>
    )
}

const Container = styled.div`
display:flex;
flex-direction: column;
`
const Wrapper = styled.div`
display:flex;
justify-content: center;
`

const Result = styled.div`
display: flex;
flex-direction: column;
width: 50%;`
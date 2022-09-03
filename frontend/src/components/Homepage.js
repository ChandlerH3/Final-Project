import { useState, useEffect, useContext} from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Context } from "./Context"

export const Homepage = () => {
    const {nVote, setNVote,dVote,setDVote,aVote,setAVote,pVote,setPVote,hVote,setHVote} = useContext(Context)
    const [voteResult, setVoteResult] = useState([])
    const [test, setTest] = useState(false)

    //retrieve percentage data from db
    useEffect(()=> {
        fetch('/getvotes')
            .then((res)=>res.json())
            .then((data)=>{
                console.log("first", data)
                setVoteResult(data.data)
            })
    }, [])

    //streaming data
    const streamingList = [
        {name: "Netflix", id:"netflix", vote: `${nVote}`},
        {name: "Disney", id:"disney", vote: `${dVote}`},
        {name: "Prime", id:"prime", vote: `${pVote}`},
        {name: "Apple", id:"apple", vote: `${aVote}`},
        {name: "Hulu", id:"hulu", vote: `${hVote}`}
    ]
    
    //votes calculation
    const votes = [nVote, dVote, pVote, aVote, hVote]
    const result = votes.reduce((a,b)=> a+b, 0)
    const percentage = []
    for(let i = 0; i< votes.length; i++){
        if (result > 0){
        percentage.push(Math.round(votes[i]/result*100))
        } 
    }
    console.log(percentage)
    
    const handleClick = (props) => {
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
        <Streaming>
            {streamingList?.map((item)=> {
                return(
                    <>
                        <StyleLink key={item.id} to={`/${item.name.toLowerCase()}`}>
                            {/* <Img src = {product.imageSrc}/> */}
                            <Name>{item.name}</Name>
                            <p>{item.vote}</p> 
                        </StyleLink>
                        {test ? 
                        
                        <p>voted</p> :
                        <p onClick={() => {handleClick(item.name)}} >Vote</p>
                        }
                    </>
                )
            })}
        </Streaming>
    </Wrapper>
    )
}
const Name = styled.p`
text-align:center;
margin-top: 15px;
margin-bottom: 10px;
`
const Price = styled.p`
text-align: center;
`
const Img = styled.img`
width: 100px;
height:100px;
align-self: center;`


const Streaming= styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
gap:1.875rem;
margin-top: 20px;
`

const Wrapper = styled.div`
display:flex;
flex-direction: column;
margin-left: 20px;
margin-right: 20px;
align-self: center;
justify-content: center;
`

const StyleLink = styled(Link)`
display: flex;
flex-direction: column;
text-decoration: none;
margin-top: 20px;
padding: 20px;
color:black;
box-shadow: 0px 3px 12px rgba(0,0,0,0.15);
transition: all 150ms ease-in-out;
    &:visited{
        color:black;
    }
    &:hover{
            transform:scale(1.05)
        }
`

import { useState, useEffect, useContext} from "react"
import styled from "styled-components"
import { Context } from "./Context"
import { ListBlock } from "./ListBlock"
import LoginButton from "./login-button"
import apple from "../img/apple.jpg"
import disney from "../img/disney.jpg"
import netflix from "../img/netflix.jpg"
import hulu from "../img/hulu.jpg"
import prime from "../img/prime.jpg"

export const Homepage = () => {
    const img = [apple, 
    disney, 
    netflix,
    hulu,
    prime
];
    const [index, setIndex] = useState(0);
    const {isAuthenticated} = useContext(Context)
    // useEffect(() => {
    // setTimeout(() =>
    //     // setIndex((prevIndex) =>
    //     // prevIndex === colors.length - 1 ? 0 : prevIndex + 1
    //     // ), 2000
    //     {colors.length - index === 1 ? setIndex(0) : setIndex(index+1)}, 2000
    // );
    // }, []);
    useEffect(() => void setInterval(() => setIndex(index => (index + 1) % 5), 3000), [])
    const singleImg = img[3]

    return (
    //     <Wrapper>
    //         {isAuthenticated ? 
    //         <Streaming>
    //         {streamingList?.map((item)=> {
    //             return(
    //                 <>
    //                     <StyleLink key={item.id} to={`/${item.name.toLowerCase()}`}>
    //                         {/* <Img src = {product.imageSrc}/> */}
    //                         <div style={{backgroundColor: `${item.colors[0]}`}}></div>
    //                         <Name>{item.name} : {item.percentage}</Name>
    //                         <p>{item.vote}</p> 
    //                     </StyleLink>
    //                     {test ? 
                        
    //                     <p>voted</p> :
    //                     <p onClick={() => {handleClick(item.name)}} >Vote</p>
    //                     }
    //                 </>
    //             )
    //         })}
    //     </Streaming>
    //     : 
    //     <>
    //     {percentage && streamingList.map((item) => {
    //         return (
    //             <VoteContainer>
    //                 <VoteItem>
    //                     <ItemName>{item.name}: </ItemName>   
    //                     <BarDiv>
    //                         <Bar width={item.percentage} />
    //                         {item.percentage > 0 ? 
    //                         <>{item.percentage}%</> :
    //                         <>0</>}    
    //                     </BarDiv>  
    //                 </VoteItem>
                    
    //             </VoteContainer>
    //         )
    //     })}
    //     </>
    //     }
        
    // </Wrapper>
    <Wrapper>
        <Banner>
            <Content>
                    <p>Welcome to <span>The District</span></p>
                    {isAuthenticated ? <button>Visit the Community</button>
                    :
                    <>
                    <p>Click below to vote your favourite streaming plateform</p>
                    <LoginButton />
                    </>}                
            </Content>
            <SlideContainer>
                <SlideBlock>
                    <Slides key={index} style={{backgroundImage: `url('${singleImg}')`}}></Slides>
                </SlideBlock>
            </SlideContainer>
        </Banner>
        <ListBlock />
    </Wrapper>
    )
}

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding-left: 100px;
`
const SlideContainer = styled.div`
margin: 0;
overflow: hidden;
height: 100%;
`

const SlideBlock = styled.div`
white-space: nowrap;
transition: ease 1000ms;
`

const Slides = styled.div`
display: inline-block;
height:600px;
width:800px;
background-size: cover;
-webkit-clip-path: polygon(60% 0, 100% 0%, 100% 100%, 40% 100%);
clip-path: polygon(20% 0, 100% 0%, 100% 100%, 10% 100%);
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
`
const Banner = styled.div`
display: flex;
height: 520px;
justify-content: space-between;
align-items: stretch;
padding: 0;
margin: 0;

`
// const BarDiv = styled.div`
// width: 100%;
// `

// const ItemName = styled.p`
// width: 60px;`
// const VoteItem = styled.div`
// display:flex;
// `
// const VoteContainer = styled.div`
// display:flex;
// flex-direction: column;
// `

// const Name = styled.p`
// text-align:center;
// margin-top: 15px;
// margin-bottom: 10px;
// `
// const Price = styled.p`
// text-align: center;
// `
const Img = styled.img`
width: 100px;
height:100px;
align-self: center;`


const Feature= styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
gap:1.875rem;
margin-top: 20px;
`

// const Wrapper = styled.div`
// display:flex;
// flex-direction: column;
// margin-left: 20px;
// margin-right: 20px;
// align-self: center;
// justify-content: center;
// `

const Movie = styled.div`
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

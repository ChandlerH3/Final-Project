import { useState, useEffect, useContext} from "react"
import styled from "styled-components"
import { Context } from "./Context"
import { ListBlock } from "./ListBlock"
import LoginButton from "./login-button"

export const Homepage = () => {
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
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
    useEffect(() => {setInterval(() => setIndex(index => (index + 1) % 3), 2000)}, [])
    const singleImg = colors[index]

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
                    <p>Click below to vote your favourite streaming plateform</p>
                    {isAuthenticated ? <button>Your community</button>
                    : <LoginButton />}                
            </Content>
            <SlideContainer>
                <SlideBlock>
                    <Slides key={index} style={{backgroundColor: `${singleImg}`}}></Slides>
                </SlideBlock>
            </SlideContainer>
        </Banner>
        <ListBlock />
    </Wrapper>
    )
}
const Title = styled.div`
`
const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const SlideContainer = styled.div`
margin: 0 auto;
overflow: hidden;
width:50%;
`

const SlideBlock = styled.div`
white-space: nowrap;
transition: ease 1000ms;
`

const Slides = styled.div`
display: inline-block;
height:100px;
width:100%;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
`
const Banner = styled.div`
display: flex;
`
const List = styled.div`
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

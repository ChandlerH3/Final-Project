import { useState } from "react"
import styled from "styled-components"

export const Search = () => {
    const [value, setValue] = useState()
    return (
        <Wrapper>
                    <Main>
                        <Input
                        type='text'
                        value={value}
                        placeholder="what's in your mind?"
                        onChange={(e)=> setValue(e.target.value)}
                        // onKeyDown={(e)=>{
                            // console.log(e)
                        // switch (e.key){
                        //     case 'Enter': {
                        //     alert(filteredArray[index]);
                        //     return;
                        //             }
                        //     case 'ArrowUp': {
                        //         if(select>=1){
                        //     setSelect(select-1)
                        //         }
                        //     return;
                        //             }
                        //     case 'ArrowDown': {
                        //         if (select+1 < limit)
                        //             setSelect(select+1);
                        //         return;
                        //                 }
                        //         }
                            // }
                        // }
                        />
                    </Main> 
                    <ListBlock>
                        movie list
                    </ListBlock>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
`

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`

const Input = styled.input`
display: block;
border-radius: 3px;
border: 1px solid lightgrey;
margin-right: 8px;
height: 40px;
width: 100%;
&:focus{
    outline: none;
    }
`
const ListBlock = styled.ul`
background-color: yellow;
display: block;
margin-top: 10px;
width: 100%;
box-shadow: 0px 5px 20px rgba(149, 157, 165, 0.2);
max-height:300px;
overflow: auto;
`
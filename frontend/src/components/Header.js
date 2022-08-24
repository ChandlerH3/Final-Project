import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Context } from "./Context"
import { SignInModal } from "./SignInModal"


export const Header = () => {
    const {modal, setModal} = useContext(Context)
    const toggle = () => {
        setModal(true)
    }
    return (
        <>
            <Wrapper>
                <Container>
                    <p>Streaming Community</p>
                    <Input
                    type='text'
                    value=''
                    placeholder="what's in your mind?"
                    onChange={(e)=> console.log(e)}
                    onKeyDown={(e)=>{
                        console.log(e)
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
                        }
                    }
            />
                </Container>
                <Menu>
                    <>
                    <Link to="/community">Community</Link>
                    </>
                    <>
                    <button onClick={toggle}>Sign in</button>
                    </>
                </Menu>
            </Wrapper>
            {modal && <SignInModal/>}
        </>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width:100%;
align-items: center;
padding-top:20px;
padding-bottom:20px;
background-color: pink;
`
const Container = styled.div`
display: flex;
align-items: center;
`

const Menu = styled.div`
display:flex;`

const Input = styled.input`
display: block;
border-radius: 5px;
border: 1px solid lightgrey;
margin-right: 8px;
height: 30px;
width: 20rem;
&:focus{
    outline: none;
    }
`
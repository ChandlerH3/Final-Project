import { useEffect, useState } from "react"
import styled from "styled-components"

export const SignIn = () => {
    const [email, setEmail] = useState()
    const handleError = (e) => {
        e.preventDefault()    
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }   
    return(
        <Wrapper>
        <CheckoutDetails>
            <h3 style={{fontWeight: "bold", fontSize: "16px", marginBottom: "1rem"}}>SignIn</h3>
            <>
                <p>First Name</p>
                <Input type="text" name="fname" style={{marginBottom: "1rem"}} onChange={(e)=> {setEmail(e.target.value)}} />
            </>
            {email ?
            <Button onClick={handleSubmit}>PLACE ORDER</Button> : 
            <DisabledB onClick={handleError}> PLACE ORDER</DisabledB>
            }
        </CheckoutDetails>
        <Cart>
            img
        </Cart>
    </Wrapper>
    )
}
const Error = styled.div`
text-align:center;
color: red;
`
const Input = styled.input`
border: none;
border-bottom: 1.5px solid #ccc;
outline: none;
padding:5px;
    &:-internal-autofill-selected{
    background-color: transparent !important;
    }
`
const DisabledB = styled.button`
color: #ccc;
background-color: #e7e7e7;
padding:10px;
text-align: center;
border-radius: 8px;
width:100%;
font-size:16px;
border:none;
letter-spacing: 1px;
`
const Button = styled.button`
color: white;
background-color: black;
padding:10px;
text-align: center;
border-radius: 8px;
width:100%;
font-size:16px;
letter-spacing: 1px;
transition: all 150ms ease-in-out;
cursor: pointer;
    &:active{
        transform: scale(0.9);
    }
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
margin-top:2rem;
letter-spacing: 1px;
`
const Cart = styled.div`
display:flex;
flex-direction: column;
margin: 4rem;
`
const Item = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 20rem;
margin-bottom: 1rem;
`
const Img = styled.img`
width: 100px;
padding: 15px 15px;
`

const Total = styled.div`
display:flex;
justify-content: space-between;
`
const Span = styled.div`
border-top:1px solid black;
margin-top: 1rem;
margin-bottom: 1rem;
`
const Card = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 1rem;
margin-top: 1rem;
`
const CheckoutDetails = styled.form`
display:grid;
grid-gap: 1rem;
margin: 4rem;
`
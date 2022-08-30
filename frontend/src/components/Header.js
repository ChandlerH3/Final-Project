import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Context } from "./Context"

import AuthNav from './auth-nav';
import { Search } from "./Search"



export const Header = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return (
        <>
            <Wrapper>
                <Container>
                    <p onClick={handleClick}>The District</p>
                </Container>
                <Menu>
                    <>
                    <Link to="/community">Community</Link>
                    </>
                    <>
                    <AuthNav/>
                    </>
                </Menu>
            </Wrapper>
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
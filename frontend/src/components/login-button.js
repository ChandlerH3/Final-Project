import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LoginButton = ({text}) => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button onClick={() => loginWithRedirect({
            appState: {
               returnTo: window.location.origin // here
            }
        })}>
            {text}
        </Button>
    );
    };

const Button = styled.button`
border: 1px solid black;
border-radius: 18px;
padding: 10px 15px;
cursor: pointer;
opacity: 0.8;
font-size: 18px;
transition: all 150ms ease-in-out;
    &:hover{
        opacity: 1;
    }`
export default LoginButton;
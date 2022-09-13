import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
    <Button onClick={() =>
    logout({
        returnTo: window.location.origin,
    })
    }>
        Log Out
    </Button>
    );
};

const Button = styled.button`
border: 1px solid black;
border-radius: 18px;
padding: 10px 15px;
cursor: pointer;
font-size:18px;
transition: all 150ms ease-in-out;
opacity: 0.8;
    &:hover{
        opacity: 1;
    }`

export default LogoutButton;
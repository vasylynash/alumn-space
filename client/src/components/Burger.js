import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const BurgerStyled = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 10px;
    right: 20px;
    z-index: 20;
    color: red;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#FF8985': '#707070'};
        border-radius: 10px;
        transform-origin: 1px;  
        transition: all 0.3s linear;

        &:nth-child(1) {
        transform: ${({ open })=> open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open })=> open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open })=> open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open })=> open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

`

function Burger() {

    const [open, setOpen] = useState();

    return (
        <>
        <BurgerStyled open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </BurgerStyled>
        <RightNav open ={open}/>
        </>
    )
}

export default Burger

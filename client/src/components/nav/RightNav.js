import React from 'react';
import Auth from '../../utils/auth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row;
    margin-top: 0;
    z-index: 19;

    li {
        padding: 15px 10px;
    }

    p {
        color: #707070;
        margin-top: 0;
        font-weight: bold;
        transition: ease-in-out 0.3s;
        margin-right: 5vw;
    }

    p:hover {
        color: #FF8985;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #E0E0E0;
        position: fixed;
        transform: ${({ open })=> open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        width: 200px;
        height: 100%;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        p {
        color: #707070;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        }

        p:hover {
            color: #FF8985;
        }

    }

` 

function RightNav( { open }) {
    return (
        <List open={open}>           
                <li>
                    <Link to='/Profile' style={{textDecoration:'none'}}>
                        <p>Profile</p>
                    </Link>
                </li>
                <li>
                    <Link to='/AddPost' style={{textDecoration:'none'}}>
                        <p>Create post</p>
                    </Link>
                </li>
                <li>
                    <Link to='/Home' style={{textDecoration:'none'}}>
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link to='/' style={{textDecoration:'none'}} onClick={Auth.logout}>
                        <p>Logout</p>
                    </Link>
                </li>
        </List>
    )
}

export default RightNav;

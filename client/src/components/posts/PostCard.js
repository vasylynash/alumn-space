import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { VerticalDiv } from '../../pages/Landing'


const Card = styled.div`
    display: flex;
    height: 80px;
    width: 80%;
    background-color: #F5F5F5;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,30%);
    margin: 0.5rem 0;
    transition: ease-in-out 0.3s;
    border:solid 1px rgba(0,0,0,0%);

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        border:solid 1px #FF8985;
    }

    .title {
        position: absolute;
        height: 20px;
        width: 50%;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
    }

    h5 {
        margin:0;
        font-size: 15px;
    }

    .date {
        font-size: 10px;
        font-weight: lighter;
    }

    .right {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        flex-direction: column;
        width: 70%;
        padding-right: 0.5rem;
        overflow: hidden;
    }

    .left {
        width: 35%;
        height: 60px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        p {
            font-size: 10px;
            margin: 0;
            margin-left: 0.5rem;
            color: #707070;
        }

        .category {
            font-weight: bold;
            color:#51BBB9;
        }

        .label {
            font-weight: bold;
            color:#FF8985; 
        }
    }

    .body {
        font-size: 12px;
        margin: 0;
    }
`

function PostCard() {
    return (
        <>
        <Link to='/post' style={{textDecoration: 'none', color:'black'}}>
        <VerticalDiv>
        <Card>
            <div className='title'>
                <h5>Welcome</h5>
            </div>
            <div className='left'>
                <p className='author'>By: Dmitriy</p>
                <p className='category'>#FullStackFlex</p>
                <p className='label'>Help</p>
            </div>
            <div className='right'>
                <p className='date'>01/01/2021</p>
                <p className='body'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
            </div>
        </Card>
        </VerticalDiv>
        </Link>
        </>
    )
}

export default PostCard

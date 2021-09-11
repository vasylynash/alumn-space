import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import Navbar from '../nav/Navbar';
import styled from 'styled-components';
import { BackArrow } from '../icons.styles';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';


const FullPostContainer = styled.div`

    .author {
        color: #707070;
        font-size: 12px;
    }

    .category {
        font-size: 15px;
        color:#51BBB9;
    }

    .label {
        font-size: 15px;
        color:#FF8985;
    }

    p {
        margin: 0.1rem 0;
    }

    .comments {
        color: #51BBB9;
        margin-top: 1rem;
    }
`
const ContentContainer = styled.div`
    margin-top: 0.5rem; 
    width: 90%;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .button {
        margin: 0 1rem;
    }

`

function FullPost() {
    return (
        <>
        <Navbar/>
        <FullPostContainer>
            <VerticalDiv>
                <Link to='/home'>
                    <BackArrow className='fas fa-arrow-left' top='60px' left='20px'></BackArrow>
                </Link>
                <h1 style={{fontSize:'39px', margin:'0'}}>Welcome</h1>
                <p className='author'>By: Dmitriy Babich</p>
                <p className='category'>#FullStackFlex</p>
                <p className='label'>help</p>
                <ContentContainer>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo quam eveniet sit quae vel vitae veritatis ratione mollitia molestiae, alias ipsam voluptate natus inventore? Repudiandae quas consequuntur veritatis in, doloremque mollitia voluptatem perferendis voluptas provident velit, excepturi nemo reprehenderit voluptatum animi fuga eveniet obcaecati at aliquam architecto unde odit dolorem quod qui. Magnam doloremque neque iste blanditiis ipsum rerum nemo repudiandae facilis! Porro, in quisquam totam ipsa aliquam officia fugiat placeat eaque tenetur nostrum minus tempora, itaque natus est sint soluta suscipit? Quae officia explicabo, inventore in laboriosam ipsum voluptatibus tempora labore aperiam molestias fugiat nulla mollitia velit nisi et, voluptatem dolore error odit eius vero nostrum, reiciendis vel eos quis. Iste, eum enim inventore quidem, ipsa ex at quam quod neque doloribus nihil atque ratione dolores quo non facilis numquam dolore itaque. Velit tempore modi eos doloremque commodi ullam corporis illum sit dolore repellat. Voluptatem enim nihil ullam.</p>
                </ContentContainer>
                <ButtonContainer>
                    <Link to='/comments' style={{textDecoration:'none'}}>
                        <Fab
                        className='button'
                        color='primary' 
                        aria-label='like'
                        size='small' 
                        style={{marginTop:'0.5rem'}}
                        >
                            <i className="fas fa-comment"></i>
                        </Fab>
                    </Link>
                    <Fab
                    className='button'
                    color='secondary' 
                    aria-label='comment'
                    size='small' 
                    style={{marginTop:'0.5rem'}}
                    >
                        <i className='fas fa-heart'></i>
                    </Fab>
                </ButtonContainer>
            </VerticalDiv>
        </FullPostContainer>
        </>
    );
};

export default FullPost;

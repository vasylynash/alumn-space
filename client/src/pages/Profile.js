import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackArrow } from '../components/icons.styles';
import styled from 'styled-components'; 
import GlobalStyle from '../components/global.style';
import JaneDoe from '../images/janeDoe.jpg'
import { VerticalDiv } from './Landing';
import { Line } from '../components/posts/SearchPost';
import { Button } from '@material-ui/core';

const GradientContainer = styled.div`
    height: 180px;
    width: 100%;
    margin: 0;
    background: linear-gradient(90deg, rgba(81,187,185,1) 0%, rgba(255,137,133,1) 100%);

`

const ProfilePic = styled.div`
    position: static;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: auto;
    margin-top: -50px;
    box-shadow: 0 5px 16px rgba(0,0,0,100%);
    background-size: contain;
    overflow: hidden;
    
    img {
        height: 180px;
        width: 120px;
        margin-left:-10px;
        margin-top: -30px;
    }
`

const TabContainer = styled.div`
    display: flex;
    flex-direction: row;

    .option {
        margin: 0 1rem;
    }
`

const Profile = () => {

    return ( 
        <>
        <GlobalStyle/>
        <GradientContainer>
        <Link to='/Home'>
            <BackArrow className='fas fa-arrow-left' color='white' left='20px'/>
        </Link>
        </GradientContainer>
        <ProfilePic>
            <img src={JaneDoe} alt="yoda" className='img'/>
        </ProfilePic>
        <VerticalDiv>
            <h1 className='username' style={{fontSize:'25px', marginBottom:'0'}}>Jane Doe</h1>
            <Line/>
            <TabContainer>
                <Button className='option'>Info</Button>
                <Button className='option'>Security</Button>
                <Button className='option'>Groups</Button>
             </TabContainer>
            <Line/>
        </VerticalDiv>
        </>
     );
}
 
export default Profile;
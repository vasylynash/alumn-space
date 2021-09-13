import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackArrow } from '../components/icons.styles';
import styled from 'styled-components'; 
import GlobalStyle from '../components/global.style';
import JaneDoe from '../images/janeDoe.jpg'
import { VerticalDiv } from './Landing';
import { Line } from '../components/posts/SearchPost';
import Index from '../components/profile/Index';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Auth from '../utils/auth';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginBottom:'1rem',
      boxShadow:'none'
    },
  });

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

const Profile = () => {
    const user = Auth.getProfile().data;
    const [componentState, setComponentState] = useState();

    const handleChangeToInfo = (event) => {
        event.preventDefault();
        setComponentState('info'); 
    };

    const handleChangeToSecurity = (event) => {
        event.preventDefault();
        setComponentState('security');
    };

    const handleChangeToMyPosts = (event) => {
        event.preventDefault();
        setComponentState('myPost')
    }

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return ( 
        <>
        <GlobalStyle/>
        <GradientContainer>
        <Link to='/Home'>
            <BackArrow className='fas fa-arrow-left' color='white' left='20px'/>
        </Link>
        </GradientContainer>
        <ProfilePic>
            <img src={JaneDoe} alt="profile" className='img'/>
        </ProfilePic>
        <VerticalDiv>
            <h1 className='username' style={{fontSize:'25px', marginBottom:'0'}}>{user.username}</h1>
            <Line/>
            <Paper className={classes.root}>
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                    <Tab label="My posts" onClick={handleChangeToMyPosts}/>
                    <Tab label="Info" onClick={handleChangeToInfo}/>
                    <Tab label="Security" onClick={handleChangeToSecurity}/>
                </Tabs>
            </Paper>
            <Index section={componentState}/>
        </VerticalDiv>
        </>
     );
}
 
export default Profile;
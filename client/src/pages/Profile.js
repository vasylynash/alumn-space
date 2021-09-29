import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackArrow } from '../components/icons.styles';
import styled from 'styled-components'; 
import GlobalStyle from '../components/global.style';
import { VerticalDiv } from './Landing';
import { Line } from '../components/posts/SearchPost';
import Index from '../components/profile/Index';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Auth from '../utils/auth';
import UserProvider from '../utils/UserContext.js';
import Navbar from '../components/nav/Navbar';


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
    
    .avatar {
        height: 100px;
        width: 100px;
        font-size: 40px;
    }
`

export const NavDisplay = styled.div`

    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`

export const ArrowDisplay = styled.div`
    display: block;

    @media (min-width: 768px) {
        display: none;
    }
`

const Input = styled.input`
    display: none;
`

const Profile = () => {
    const user = Auth.getProfile().data;
    const [componentState, setComponentState] = useState();

    const profile = user.username.substring(0,2);

    const profileColors = ['#ef476f','#ffd166','#06d6a0','#118ab2','#073b4c'];
    const random = Math.floor(Math.random() * profileColors.length)
    const color = profileColors[random];

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
        <UserProvider>
        <GradientContainer>
        <NavDisplay>
        <Navbar/>
        </NavDisplay>
        <ArrowDisplay>
        <Link to='/Home' className='arrow'>
            <BackArrow className='fas fa-arrow-left' color='white' left='20px'/>
        </Link>
        </ArrowDisplay>
        </GradientContainer>
        <ProfilePic>
            <Avatar className='avatar' style={{backgroundColor:`${color}`}} >{profile}</Avatar>
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
        </UserProvider>
        </>
     );
};
 
export default Profile;
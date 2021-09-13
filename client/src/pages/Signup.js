import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, DatePicker } from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GlobalStyle from '../components/global.style';
import { LandingContainer, VerticalDiv } from './Landing';
import { LoginBtn } from './Landing';
import { SignUpBtn } from './Landing';
import { BackArrow } from '../components/icons.styles'
import { HeroContainer, Title } from './Landing';
import Hero from '../images/hero-graphic.png'
import { fromPromise, useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        className: ''
    });

    // date picker
    const [selectedDate, handleDateChange] = useState(new Date());
    
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const mutationResponse = await addUser({
                variables: { 
                    registerInput: {
                    username: formState.username,
                    email: formState.email,
                    password: formState.password,
                    confirmPassword: formState.confirmPassword,
                    yearOfGraduation: selectedDate,
                    className: formState.className
                    }
                 },
            });
            
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);

        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return ( 
        <>
        <HeroContainer>
          <Title className='desktopTitle'>AlumSpace</Title>
          <img src={Hero}  alt="logo images"/>
          <p style={{textAlign:'center', fontFamily: 'Montserrat, sans-serif'}} className='desktopDescription'> A place for coding bootcamp Alumni to connect  with each other and share ideas.</p>
        </HeroContainer> 
        <LandingContainer>       
        <VerticalDiv>
            <GlobalStyle/>
            <Link to='/'>
                <BackArrow className="fas fa-arrow-left" left='5vw'></BackArrow>
            </Link>
            <img src={logo}  alt="logo images" className='signupImg'/>
            <h1 style={{fontSize:'37px', margin:'0'}}>Welcome!</h1>
            <p style={{fontSize:'15px'}}>Please <span style={{color:'#51BBB9',fontWeight:'bold'}}>Sign up </span>to use AlumnSpace</p>
            <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                <VerticalDiv>
                    <TextField id="username" label="Username" color='primary' name="username" onChange={handleChange} />
                    <TextField id="email" label="Email" color='primary' name="email" onChange={handleChange} />
                    <FormControl style={{minWidth: 190}}>
                    <InputLabel id="subject" >Your subject</InputLabel>
                        <Select
                        labelId="subject"
                        id="subject-select"
                        name="className"
                        onChange={handleChange}
                        >
                        <MenuItem value={'Web Development'}>Web Development</MenuItem>
                        <MenuItem value={'Data Analytics'}>Data Analytics</MenuItem>
                        <MenuItem value={'UX/UI Design'}>UX/UI Design</MenuItem>
                        <MenuItem value={'Cybersecurity'}>Cybersecurity</MenuItem>
                        <MenuItem value={'FinTech'}>FinTech</MenuItem>
                        <MenuItem value={'Digital Marketing'}>Digital Marketing</MenuItem>
                        </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div style={{width:'100%', marginTop:'20px'}}>
                            {/* <KeyboardDatePicker
                                margin="normal"
                                width={1}
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            /> */}
                            <DatePicker
                                views={["year"]}
                                label="Year graduated"
                                value={selectedDate}
                                onChange={handleDateChange}
                                />
                        </div>
                    </MuiPickersUtilsProvider>
                    <TextField id="password" label="Password" color='primary' type='password' name="password"  onChange={handleChange} />
                    <TextField id="confirmPassword" label="Confirm password" color='primary' type='password' name="confirmPassword" onChange={handleChange} />
                    <SignUpBtn textColor='white' backgroundColor='#51BBB9' type='Submit' style={{marginTop:'20px'}}>Sign up</SignUpBtn>
                    <Link to='/login'>
                        <LoginBtn textColor='#707070' backgroundColor='#EDEDED'>Login</LoginBtn>
                    </Link>
                </VerticalDiv>
            </form>
        </VerticalDiv>
        </LandingContainer>
        </>
     );
};
 
export default Signup;
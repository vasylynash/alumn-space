import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// styled components
import GlobalStyle from '../components/global.style';
import { VerticalDiv } from './Landing';
import { LoginBtn } from './Landing';
import { SignUpBtn } from './Landing';
import { BackArrow } from '../components/icons.styles'


const Signup = () => {

    // date picker 
    const [selectedDate, setSelectedDate] = useState(new Date('2021-01-01T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    //   subject picker
    const [subject, setSubject] = useState();

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    return ( 
        <VerticalDiv>
            <GlobalStyle/>
            <Link to='/'>
                <BackArrow className="fas fa-arrow-left"></BackArrow>
            </Link>
            <img src={logo}  alt="logo images" height='200px' width='50%'/>
            <h1 style={{fontSize:'37px', margin:'0'}}>Welcome!</h1>
            <p style={{fontSize:'15px'}}>Please <span style={{color:'#51BBB9',fontWeight:'bold'}}>Sign up </span>to use AlumnSpace</p>
            <form noValidate autoComplete="off">
                <VerticalDiv>
                    <TextField id="username" label="Username" color='primary' />
                    <TextField id="email" label="Email" color='primary' />
                    <FormControl style={{minWidth: 190}}>
                    <InputLabel id="subject" >Your subject</InputLabel>
                        <Select
                        labelId="subject"
                        id="subject-select"
                        value={subject}
                        onChange={handleSubjectChange}
                        >
                        <MenuItem value={1}>subject1</MenuItem>
                        <MenuItem value={2}>subject2</MenuItem>
                        <MenuItem value={3}>subject3</MenuItem>
                        <MenuItem value={4}>subject4</MenuItem>
                        <MenuItem value={5}>subject5</MenuItem>
                        <MenuItem value={6}>subject6</MenuItem>
                        <MenuItem value={7}>subject7</MenuItem>
                        <MenuItem value={8}>subject8</MenuItem>
                        <MenuItem value={9}>subject9</MenuItem>
                        </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div style={{width:'80%'}}>
                            <KeyboardDatePicker
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
                            />
                        </div>
                    </MuiPickersUtilsProvider>
                    <TextField id="password" label="Password" color='primary' type='password' />
                    <TextField id="confirmPassword" label="Confirm password" color='primary' type='password'/>
                    <SignUpBtn textColor='white' backgroundColor='#51BBB9' type='Submit' style={{marginTop:'20px'}}>Sign up</SignUpBtn>
                    <Link to='/login'>
                        <LoginBtn textColor='#707070' backgroundColor='#EDEDED'>Login</LoginBtn>
                    </Link>
                </VerticalDiv>
            </form>
        </VerticalDiv>
     );
}
 
export default Signup;
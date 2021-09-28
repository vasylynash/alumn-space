import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { BackArrow } from "../components/icons.styles";
import Navbar from "../components/nav/Navbar";
import { LoginBtn, VerticalDiv } from "./Landing";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { DropDownContainer } from "../components/posts/SearchPost";
import CircularProgress from '@material-ui/core/CircularProgress';
import { ArrowDisplay } from './Profile'

export const AddPostContainer = styled.div`

    .title {
        margin: 0.5rem 0;
        text-align: center;
    }
    
    .input {
        margin: 1rem;
    }
`

const CreateContainer = styled.div`

    .text {
        display: none;
    }

    .line {
        display: none;
    }

    @media (min-width: 768px) {
        width: 70vw;
        
        .text {
            display: block;
            text-align: center;
        }

        .line {
            display: block;
        }
    }
`

const AddPost = () => {

    const [category, setCategory] = useState('');
    const [label, setLabel] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState(''); 
    const [isPending, setIsPending] = useState(false);
    const [addPost, {error}] = useMutation(ADD_POST);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsPending(true);
        try {
            await addPost({
                variables: {
                    title,
                    body,
                    category,
                    label,
                    author: Auth.getProfile().data._id
                }
            });
            setIsPending(false);
            window.location.assign('/home')
        } catch(e) {
            console.log(e)
        }
    };

    return ( 
        <>
        <Navbar/>
        <AddPostContainer>
            <ArrowDisplay>
            <Link to="/home">
                <BackArrow className="fas fa-arrow-left" top='80px' left='20px'/>
            </Link>
            </ArrowDisplay>
            <VerticalDiv>
            <CreateContainer>
                <h1 className='title' style={{color:'#51BBB9'}}>Create Post</h1>
                <p className='text'>Post your idea, tutorial, question, or advice. Here. </p>
                <form onSubmit={handleSubmit}>
                    <VerticalDiv>
                    <TextField
                    className='input'
                    id='title'
                    name='title'
                    label='Title'
                    color='primary' 
                    type='text'
                    required
                    inputProps={{ maxLength: 35 }} 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <DropDownContainer>
                        <FormControl style={{minWidth: 150, margin:'0 1rem'}}>
                        <InputLabel id="subject" name="category">Category</InputLabel>
                            <Select
                            labelId="subject"
                            id="subject-select"
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            >
                            <MenuItem value={'Coding'}>Coding</MenuItem>
                            <MenuItem value={'DataScience'}>Data Science</MenuItem>
                            <MenuItem value={'UIUX'}>UI/UX</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{minWidth: 150, margin:'0 1rem'}}>
                        <InputLabel id="subject" name="label">Label</InputLabel>
                            <Select
                            labelId="subject"
                            id="subject-select"
                            required
                            value={label}
                            onChange={(e) => setLabel(e.target.value)}
                            >
                            <MenuItem value={'Help'}>Help</MenuItem>
                            <MenuItem value={'SuccessStories'}>Success Stories</MenuItem>
                            <MenuItem value={'Jobs'}>Jobs</MenuItem>
                            <MenuItem value={'Discussion'}>Discussion</MenuItem>
                            <MenuItem value={'NodeJS'}>NodeJS</MenuItem>
                            <MenuItem value={'GraphQL'}>GraphQL</MenuItem>
                            <MenuItem value={'MONGODB'}>MongoDB</MenuItem>
                            <MenuItem value={'React'}>React</MenuItem>
                            <MenuItem value={'CSS'}>CSS</MenuItem>
                            <MenuItem value={'HTML'}>HTML</MenuItem>
                            <MenuItem value={'HandleBars'}>HandleBars</MenuItem>
                            <MenuItem value={'JavaScript'}>JavaScript</MenuItem>
                            </Select>
                        </FormControl>
                    </DropDownContainer>
                    <TextField
                    className='input'
                    id="standard-multiline-static"
                    label="Body"
                    multiline
                    variant='outlined'
                    rows={20}
                    fullWidth
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    />
                    { !isPending && <LoginBtn textColor='white' backgroundColor='#51BBB9'>Post </LoginBtn> }   
                    { isPending && <CircularProgress color="secondary" />}
                    </VerticalDiv>
                    </form>
            </CreateContainer>      
            </VerticalDiv>
            </AddPostContainer>
        </>
     );
}
 
export default AddPost;
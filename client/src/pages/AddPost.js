import { useState } from "react";
import { useHistory } from 'react-router-dom';
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

const AddPostContainer = styled.div`
    
    .title {
        margin: 0.5rem 0;
    }
    
    .input {
        margin: 1rem;
    }
`

const AddPost = () => {

    const [Category, setCategory] = useState();

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const [Label, setLabel] = useState();

    const handleLabelChange = (event) => {
        setLabel(event.target.value);
    };

    const [title, setTitle] = useState('');
    const [body, setBody] = useState(''); 
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, body };

        setIsPending(true);

        //Add the mutation method here to send the new post to the db

        //Then when added setPending back to false and
        //use the useHistory to send user back to homepage

        //setIsPending(false);
        //history.push('/');
    }

    return ( 
        <>
            <Navbar/>
        <AddPostContainer>
            <Link to="/home">
                <BackArrow className="fas fa-arrow-left" top='60px' left='20px'/>
            </Link>
            <VerticalDiv>
            <h1 className='title'>Create Post</h1>
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
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                />
                <DropDownContainer>
                    <FormControl style={{minWidth: 100}}>
                    <InputLabel id="subject" >Category</InputLabel>
                        <Select
                        labelId="subject"
                        id="subject-select"
                        value={Category}
                        onChange={handleCategoryChange}
                        >
                        <MenuItem value={1}>Categoryt1</MenuItem>
                        <MenuItem value={2}>Categoryt2</MenuItem>
                        <MenuItem value={3}>Categoryt3</MenuItem>
                        <MenuItem value={4}>Categoryt4</MenuItem>
                        <MenuItem value={5}>Categoryt5</MenuItem>
                        <MenuItem value={6}>Categoryt6</MenuItem>
                        <MenuItem value={7}>Categoryt7</MenuItem>
                        <MenuItem value={8}>Categoryt8</MenuItem>
                        <MenuItem value={9}>Categoryt9</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{minWidth: 100}}>
                    <InputLabel id="subject" >Label</InputLabel>
                        <Select
                        labelId="subject"
                        id="subject-select"
                        value={Label}
                        onChange={handleLabelChange}
                        >
                        <MenuItem value={1}>Label1</MenuItem>
                        <MenuItem value={2}>Label2</MenuItem>
                        <MenuItem value={3}>Label3</MenuItem>
                        <MenuItem value={4}>Label4</MenuItem>
                        <MenuItem value={5}>Label5</MenuItem>
                        <MenuItem value={6}>Label6</MenuItem>
                        <MenuItem value={7}>Label7</MenuItem>
                        <MenuItem value={8}>Label8</MenuItem>
                        <MenuItem value={9}>Label9</MenuItem>
                        </Select>
                    </FormControl>
                </DropDownContainer>
                <TextField
                className='input'
                id="standard-multiline-static"
                label="Body"
                multiline
                rows={4}
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
                />
                { !isPending && <LoginBtn textColor='white' backgroundColor='#51BBB9'>Post </LoginBtn> }   
                { isPending && <p style={{fontSize:'25px'}}>⏳</p> }
                </VerticalDiv>
                </form>  
            </VerticalDiv>
            </AddPostContainer>
        </>
     );
}
 
export default AddPost;
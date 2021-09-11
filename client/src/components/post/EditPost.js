import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { BackArrow } from '../../components/icons.styles';
import { LoginBtn, VerticalDiv } from '../../pages/Landing';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { DropDownContainer, Line } from '../../components/posts/SearchPost';
import { AddPostContainer } from '../../pages/AddPost';
import GlobalStyle from '../global.style';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import { ButtonContainer } from './FullPost';

function EditPost() {
    const [category, setCategory] = useState('');
    const [label, setLabel] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState(''); 
    const [isPending, setIsPending] = useState(false);
    const [addPost, {error}] = useMutation(ADD_POST)
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsPending(true);
        try {
            const {data} = await addPost({
                variables: {
                    title,
                    body,
                    category,
                    label,
                    author: Auth.getProfile().data._id
                }
            });
            setIsPending(false);
            history.push('/home');
        } catch(e) {
            console.log(e)
        }
    };

    return ( 
        <>
        <AddPostContainer>
            <GlobalStyle/>
            <Link to='/home'>
                <BackArrow className='fas fa-arrow-left' top='25px' left='20px'/>
            </Link>
            <VerticalDiv>
            <h1>Your Post</h1>
            <Line/>
            <form onSubmit={handleSubmit} style={{margin:'-1.5rem'}}>
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
                    <FormControl style={{minWidth: 150, margin:'0 1rem'}}>
                    <InputLabel id='subject' name='category'>Category</InputLabel>
                        <Select
                        labelId='subject'
                        id='subject-select'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                        <MenuItem value={'Coding'}>Coding</MenuItem>
                        <MenuItem value={'DataScience'}>Data Science</MenuItem>
                        <MenuItem value={'UIUX'}>UI/UX</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{minWidth: 150, margin:'0 1rem'}}>
                    <InputLabel id='subject' name='label'>Label</InputLabel>
                        <Select
                        labelId='subject'
                        id='subject-select'
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
                id='standard-multiline-static'
                label='Body'
                variant='outlined'
                fullWidth
                multiline
                rows={25}
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
                />
                <ButtonContainer>
                    { !isPending && <Fab className='button' color='primary' size='small' aria-label='post'><i className="fas fa-check"></i></Fab>  }   
                    { isPending &&  <CircularProgress color="secondary" />}
                    <Fab className='button' color='secondary' size='small' aria-label='delete'><i class="fas fa-trash"></i></Fab>
                </ButtonContainer>
                </VerticalDiv>
                </form>  
            </VerticalDiv>
            </AddPostContainer>
        </>
     );
}


export default EditPost;

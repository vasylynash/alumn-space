import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { UPDATE_POST } from '../../utils/mutations';
import { QUERY_SINGLE_POST } from '../../utils/queries'
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
import { useQuery } from '@apollo/client';

const EditPost = () => {
    const { postId } = useParams();
    const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { id: postId },
      });
console.log(data)
    const [updatePost] = useMutation(UPDATE_POST);
    const [category, setCategory] = useState(data.post.category);
    const [label, setLabel] = useState(data.post.label);
    const [title, setTitle] = useState(data.post.title);
    const [body, setBody] = useState(data.post.body); 
    const [isPending, setIsPending] = useState(false);
      


console.log(data)
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsPending(true);
        try {
            await updatePost({
                variables: {
                    id: postId,
                    title,
                    body,
                    category,
                    label,
                }
            });
            setIsPending(false);
           // window.location.assign('/Profile')
        } catch(e) {
            console.log(e)
        }
    };

    if (loading) {
        return <div>Loading...</div>;
      }


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
                    { !isPending && <Fab className='button' type='submit' color='primary' size='small' aria-label='post'><i className="fas fa-check"></i></Fab>  }   
                    { isPending &&  <CircularProgress color="secondary" />}
                    <Fab className='button' color='secondary' size='small' aria-label='delete'><i className="fas fa-trash"></i></Fab>
                </ButtonContainer>
                </VerticalDiv>
                </form>  
            </VerticalDiv>
            </AddPostContainer>
        </>
     );
}


export default EditPost;

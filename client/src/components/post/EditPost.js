import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_POST, REMOVE_POST } from '../../utils/mutations';
import { QUERY_SINGLE_POST } from '../../utils/queries'
import { Link } from 'react-router-dom';
import { BackArrow } from '../../components/icons.styles';
import { VerticalDiv } from '../../pages/Landing';
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
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const EditPostContainer = styled.div`
    @media (min-width: 768px) {
        width: 80vw;
    }
`

function EditPost() {
    const { postId } = useParams();
    console.log(postId)
    const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { id: postId },
      });
    const [updatePost] = useMutation(UPDATE_POST);
    const [deletePost] = useMutation(REMOVE_POST);
    const [category, setCategory] = useState(!data?'':data.post.category);
    const [label, setLabel] = useState(!data?'':data.post.label);
    const [title, setTitle] = useState(!data?'':data.post.title);
    const [body, setBody] = useState(!data?'':data.post.body); 
    const [isPending, setIsPending] = useState(false);

const handleDelete = async (e) => {
    try {
        await deletePost({
            variables: {
                id: postId
            }
        });
        window.location.assign('/Profile')
} catch(e) {
    console.log(e)
}
}
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsPending(true);
        try {
            await updatePost({
                variables: {
                    id: postId,
                    title: title,
                    body: body,
                    category:category,
                    label: label,
                }
            });
            setIsPending(false);
            window.location.assign('/Profile')
        } catch(e) {
            console.log(e)
        }
    };

    return ( 
        <>
        <AddPostContainer>
            <GlobalStyle/>
            <Link to='/profile'>
                <BackArrow className='fas fa-arrow-left' top='25px' left='20px'/>
            </Link>
            <VerticalDiv>
            <h1 style={{color:'#51BBB9'}}>Your Post</h1>
            <Line/>
            <EditPostContainer>
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
                rows={20}
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
                />
                <ButtonContainer>
                    { !isPending && <Fab style={{color:'white'}} type='submit' className='button' color='primary' size='small' aria-label='post'><i className="fas fa-check"></i></Fab>  }   
                    { isPending &&  <CircularProgress color="secondary" />}
                    <Fab className='button' onClick={handleDelete} color='secondary' size='small' aria-label='delete'><i class="fas fa-trash"></i></Fab>
                </ButtonContainer>
                </VerticalDiv>
                </form>
                </EditPostContainer>  
            </VerticalDiv>
            </AddPostContainer>
        </>
     );
}

export default EditPost;
import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import Navbar from '../nav/Navbar';
import styled from 'styled-components';
import { BackArrow } from '../icons.styles';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_POST_LIKE } from '../../utils/mutations';
import { useMutation } from "@apollo/client";

const FullPostContainer = styled.div`

    .author {
        color: #707070;
        font-size: 12px;
    }

    .category {
        font-size: 15px;
        color:#51BBB9;
    }

    .label {
        font-size: 15px;
        color:#FF8985;
    }

    p {
        margin: 0.1rem 0.8rem;
        text-align: justify;
    }

    .comments {
        color: #51BBB9;
        margin-top: 1rem;
    }
`
const ContentContainer = styled.div`
    margin-top: 0.5rem; 
    width: 90%;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .button {
        margin: 0 1rem;
    }

    .likeContainer {
        i {
            margin: 0;
            margin-left: 0.5rem;
            display: inline-flex;
            flex-direction: row;
            
            p {
                margin-left: 0.5rem;
                font-family: 'Montserrat', sans-serif;
            }
        }
    }
    
`

const  FullPost= ()=> {
    const { postId } = useParams();
    const [addLike, {err}] = useMutation(ADD_POST_LIKE, {refetchQueries: [QUERY_SINGLE_POST]})
    const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
      variables: { id: postId },
    });
    const post = data?.post || {};

    if (loading) {
      return <div>Loading...</div>;
    }

    const handleLike = async (e) => {
        e.preventDefault();
        try {
            const {data} = await addLike({
                variables: {
                    postId: postId,
                    userId: Auth.getProfile().data._id
                }
                
            });
        } catch(e) {
            console.log(e)
        }
    };

    return (
        <>
        <Navbar/>
        <FullPostContainer>
            <VerticalDiv>
                <Link to='/home'>
                    <BackArrow className='fas fa-arrow-left' top='60px' left='20px'></BackArrow>
                </Link>
                <h1 style={{fontSize:'35px', margin:'2rem', textAlign:'center'}}>{post.title}</h1>
                <p className='author'>By: {post.author.username}</p>
                <p className='category'>{post.category}</p>
                <p className='label'>{post.label}</p>
                <ContentContainer>
                    <p>{post.body}</p>
                </ContentContainer>
                <ButtonContainer>
                    <Link to='/comments' style={{textDecoration:'none'}}>
                        <Fab
                        className='button'
                        color='primary' 
                        aria-label='like'
                        size='small' 
                        style={{marginTop:'0.5rem'}}
                        variant='extended'
                        >
                            <div className='likeContainer'><i className='fas fa-comment' style={{color:'white'}}><p>{post.comments.length}</p></i></div>
                        </Fab>
                    </Link>
                    <Fab
                    className='button'
                    color='secondary' 
                    aria-label='comment'
                    size='small' 
                    style={{marginTop:'0.5rem'}}
                    variant='extended'
                    >
                        <div onClick={handleLike} className='likeContainer'><i className='fas fa-heart'><p>{post.totalLikes}</p></i></div>
                    </Fab>
                </ButtonContainer>
            </VerticalDiv>
        </FullPostContainer>
        </>
    );
};

export default FullPost;

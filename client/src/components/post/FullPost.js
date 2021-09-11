import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import Navbar from '../nav/Navbar';
import styled from 'styled-components';
import { BackArrow } from '../icons.styles';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import { useQuery } from '@apollo/client';

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
        margin: 0.1rem 0;
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

const  FullPost= ()=> {
    const { postId } = useParams();
   
    const { loading,error, data } = useQuery(QUERY_SINGLE_POST, {
      variables: { id: postId },
    });
   console.log("data",data)
    const post = data?.post || {};

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <>
        <Navbar/>
        <FullPostContainer>
            <VerticalDiv>
                <Link to='/home'>
                    <BackArrow className="fas fa-arrow-left" top='60px' left='20px'></BackArrow>
                </Link>
                <h1 style={{fontSize:'39px', margin:'0'}}>{post.title}</h1>
                <p className='author'>By: {post.author.username}</p>
                <p className='category'>{post.category}</p>
                <p className='label'>{post.label}</p>
                <ContentContainer>
                    <p>{post.body}</p>
                </ContentContainer>
                <Link to='/comments' style={{textDecoration:'none'}}>
                    <p className='comments'>View Comments</p>
                </Link>
            </VerticalDiv>
        </FullPostContainer>
        </>
    );
};

export default FullPost;

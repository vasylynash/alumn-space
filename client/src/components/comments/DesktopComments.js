import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import GlobalStyle from '../global.style';
import { Line, SearchBar, SearchBtn, SearchIcon, SearchInput } from '../posts/SearchPost';
import Comment from '../comments/UserComment';
import { BackArrow } from '../icons.styles';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import { useMutation } from "@apollo/client";
import { useState } from "react";
import Auth from '../../utils/auth';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const CommentContainer =styled.div`
    display: none;

    @media (min-width: 768px){
        display: block;
    }
`

const  DesktopComments = () => {
    const { postId } = useParams();
    const [addComment] = useMutation(ADD_COMMENT,{refetchQueries:[QUERY_SINGLE_POST]})
    const [commentText, setCommentText] = useState('');

    const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { id: postId },
      });
      const {comments} = data?.post || {};
      let commentsReversed =[...comments].reverse()
      if (loading) {
        return <div><CircularProgress color="secondary" /></div>;
      }

      const handleAddComment = async (e) => {
        e.preventDefault();

        try {
            const {data} = await addComment({
            variables: {
                postId: postId, 
                commentText: commentText, 
                author: Auth.getProfile().data.username,
                authorId: Auth.getProfile().data._id,
            }
        });
        setCommentText('');
        } catch(e) {
            console.log(e)
        }
      }

   return (
        <CommentContainer>
        <GlobalStyle/>
            <VerticalDiv>
                 <SearchBar style={{width:'50vw'}}>
                    <SearchIcon className='far fa-comment-alt'/>
                    <SearchInput onChange={(e) => setCommentText(e.target.value)} placeholder='Add Comment' value={commentText}/>
                    <SearchBtn onClick={handleAddComment}>Comment</SearchBtn>
                </SearchBar>
                    {
                    commentsReversed.map(comment=>{
                        return (
                            <Comment key = {comment._id} comment={comment} style />
                        )
                    })
                    }
            </VerticalDiv>
        </CommentContainer>
    )
}

export default DesktopComments

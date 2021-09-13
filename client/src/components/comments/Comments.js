import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import GlobalStyle from '../global.style';
import Navbar from '../nav/Navbar';
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

const  Comments = () => {
    const { postId } = useParams();
    const [addComment] = useMutation(ADD_COMMENT,{refetchQueries:[QUERY_SINGLE_POST]})
    const [commentText, setCommentText] = useState('');

    const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { id: postId },
      });

      const {comments} = data?.post || {};
  
      if (loading) {
        return <div>Loading...</div>;
      }

      const handleAddComment = async (e) => {
        e.preventDefault();

        try {
            const {data} = await addComment({
            variables: {
                postId: postId, 
                commentText: commentText, 
                author: Auth.getProfile().data.username}
        });
        } catch(e) {
            console.log(e)
        }
      }

   return (
        <>
        <GlobalStyle/>
        <Navbar/>
        <Link to={`/post/${postId}`}>
            <BackArrow className="fas fa-arrow-left" top='65px' left='15px'></BackArrow>
        </Link>
            <VerticalDiv>
                <h1 style={{fontSize:'39px', marginTop:'0.5rem'}}>Comments</h1>
                {
                comments.map(comment=>{
                    return (
                        <Comment key = {comment._id} comment={comment} />
                    )
                })
                }
                <SearchBar>
                    <SearchIcon className='far fa-comment-alt'/>
                    <SearchInput onChange={(e) => setCommentText(e.target.value)} placeholder='Add Comment'/>
                    <SearchBtn onClick={handleAddComment}>Comment</SearchBtn>
                </SearchBar>
            </VerticalDiv>
        </>
    )
}

export default Comments

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
const  Comments = () => {
    const { postId } = useParams();

    const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { id: postId },
      });
      const {comments} = data?.post || {};
      let commentsReversed =[...comments].reverse()
      if (loading) {
        return <div>Loading...</div>;
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
                commentsReversed.map(comment=>{
                    return (
                        <Comment comment={comment} />
                    )
                })
                }
                <SearchBar>
                    <SearchIcon className='far fa-comment-alt'/>
                    <SearchInput placeholder='Add Comment'/>
                    <SearchBtn >Comment</SearchBtn>
                </SearchBar>
            </VerticalDiv>
        </>
    )
}

export default Comments

import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import Post from './Post';
import { useQuery } from '@apollo/client';
import { SEARCH_POSTS } from '../../utils/queries';
import { useSearch } from '../../utils/SearchContext';

const  PostList = () => {
    const searchContext = useSearch();
    const query = searchContext.formData;
    const postsResponse = useQuery(SEARCH_POSTS, {
        variables:  { search: query }
    });
    const posts = postsResponse.data?.searchPosts.post || [] ;

    if (!posts.length) {
        return <VerticalDiv><h3 style={{color:'#C3C3C3'}}>No Posts Yet!</h3></VerticalDiv>;
      }
      
    return (
        <>
        <VerticalDiv>
            <h1 style={{fontSize:'39px', margin:'0'}}>Posts</h1>
            <VerticalDiv>
                {posts.map((post) => {
                    return(   
                   <Post post = {post}/>
                    );
                })
                }
            </VerticalDiv>
        </VerticalDiv>
        </>
    );
};

export default PostList;

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
    console.log(posts)

    if (!posts.length) {
        return <VerticalDiv><h3 style={{color:'#C3C3C3'}}>No Posts Yet!</h3></VerticalDiv>;
      }
      
    return (
        <>
        <VerticalDiv>
            <VerticalDiv>
                {posts.map((post) => {
                    return(   
                   <Post post = {post} key={post._id}/>
                    );
                })
                }
            </VerticalDiv>
        </VerticalDiv>
        </>
    );
};

export default PostList;

import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import PostCard from './PostCard';

const  Post = ({
    posts
}) => {

    if (!posts.length) {
        return <h3>No Posts Yet!</h3>;
      }

    return (
        <>
        <VerticalDiv>
            <h1 style={{fontSize:'39px', margin:'0'}}>Posts</h1>
            <VerticalDiv>
                {posts && posts.map((post) => {
                    return(   
                   <PostCard post = {post}/>
                    )
                })
                }
            </VerticalDiv>
        </VerticalDiv>
        </>
    )
}

export default Post

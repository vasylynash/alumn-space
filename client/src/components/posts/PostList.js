import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import PostCard from './Post';

const  Post = ({
    posts
}) => {

    if (!posts.length) {
        return <VerticalDiv><h3 style={{color:'#C3C3C3'}}>No Posts Yet!</h3></VerticalDiv>;
      }

    return (
        <>
        <VerticalDiv>
            <VerticalDiv>
                {posts.map((post) => {
                    return(   
                   <PostCard post = {post}/>
                    );
                })
                }
            </VerticalDiv>
        </VerticalDiv>
        </>
    );
};

export default Post;

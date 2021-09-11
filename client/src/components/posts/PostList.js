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
            <h1 style={{fontSize:'39px', margin:'0'}}>Posts</h1>
            <VerticalDiv>
                {posts.map((post) => {
                    return(   
                   <PostCard post = {post} key={post._id}/>
                    );
                })
                }
            </VerticalDiv>
        </VerticalDiv>
        </>
    );
};

export default Post;

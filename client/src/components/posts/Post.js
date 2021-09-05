import React from 'react'
import { VerticalDiv } from '../../pages/Landing'
import PostCard from './PostCard'



function Post() {
    return (
        <>
        <VerticalDiv>
            <h1 style={{fontSize:'39px', margin:'0'}}>Posts</h1>
            <VerticalDiv>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </VerticalDiv>
        </VerticalDiv>
        </>
    )
}

export default Post

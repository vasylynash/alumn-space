import React from 'react'
import { VerticalDiv } from '../../pages/Landing'
import PostCard from './PostCard'


function Post() {
    return (
        <>
        <VerticalDiv>
            <h1 style={{fontSize:'39px', margin:'0'}}>Posts</h1>
            <PostCard/>
        </VerticalDiv>
        </>
    )
}

export default Post

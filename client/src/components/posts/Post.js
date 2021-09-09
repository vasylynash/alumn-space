import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import PostCard from './PostCard';
import { SearchProvider } from '../../utils/SearchContext';
import { useState } from 'react';



function Post() {
    const [results, setResults] = useState();
    

    return (
        <>
        <VerticalDiv>
            <h1 style={{fontSize:'39px', margin:'0'}}>Posts</h1>
            <VerticalDiv>
            <SearchProvider>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </SearchProvider>
            </VerticalDiv>
        </VerticalDiv>
        </>
    )
}

export default Post

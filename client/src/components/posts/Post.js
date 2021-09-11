import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import PostCard from './PostCard';
import  SearchProvider  from '../../utils/SearchContext';
import { useState } from 'react';
import { useReducer } from 'react';
import { reducer } from '../../utils/reducers';
import { SearchContext, useSearch } from '../../utils/SearchContext';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_POSTS } from '../../utils/queries';



function Post() {
    const [results, setResults] = useState();
const searchContext = useSearch();

console.dir(searchContext.formData, {depth: 2})
const query = searchContext.formData;

    

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

export default Post;

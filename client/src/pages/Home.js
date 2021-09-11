import React from 'react';
import Navbar from '../components/nav/Navbar'
import Post from '../components/posts/PostList';
import SearchPost from '../components/posts/SearchPost';
import SearchProvider from '../utils/SearchContext';
import { useReducer } from 'react';
import { reducer } from '../utils/reducers';
import { useSearch } from '../utils/SearchContext';
import { UPDATE_INPUT } from '../utils/actions';
import { QUERY_ALL_POSTS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Home = () => {
    
    // const { loading, error, data } = useQuery(QUERY_ALL_POSTS);
    // const posts = data?.posts || [];

    return ( 
        <div>
            <Navbar/>
            <SearchProvider>
            <SearchPost/>
            <Post />
            </SearchProvider>
        </div>
     );
}
 
export default Home;
import React from 'react';
import Navbar from '../components/nav/Navbar'
import Post from '../components/posts/PostList';
import SearchPost from '../components/posts/SearchPost';
import { QUERY_ALL_POSTS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Home = () => {
    
    const { loading, error, data } = useQuery(QUERY_ALL_POSTS);
    const posts = data?.posts || [];

    return ( 
        <div>
            <Navbar/>
            <SearchPost/>
            <Post posts={posts} />
        </div>
     );
}
 
export default Home;
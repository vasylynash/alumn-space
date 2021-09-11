import React from 'react';
import Navbar from '../components/nav/Navbar'
import Post from '../components/posts/PostList';
import SearchPost from '../components/posts/SearchPost';
import { QUERY_ALL_POSTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { VerticalDiv } from './Landing';

const Home = () => {
    
    const { loading, error, data } = useQuery(QUERY_ALL_POSTS);
    const posts = data?.posts || [];

    return ( 
        <div>
            <Navbar/>
            <SearchPost/>
            <VerticalDiv>
                <h1 style={{fontSize:'39px', margin:'0'}}>Posts</h1>
            </VerticalDiv>
            <Post posts={posts} />
        </div>
     );
}
 
export default Home;
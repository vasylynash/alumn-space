import React from 'react';
import Navbar from '../components/nav/Navbar'
import Post from '../components/posts/PostList';
import SearchPost from '../components/posts/SearchPost';
import SearchProvider from '../utils/SearchContext';
import { VerticalDiv } from './Landing';

const Home = () => {
    
    console.log('HOME')

    return ( 
     <div>
            <Navbar/>
            <SearchProvider>
            <SearchPost/>
            <VerticalDiv>
                <h1 style={{fontSize:'39px', margin:'0'}}>Posts</h1>
            </VerticalDiv>
            <Post />
            </SearchProvider>
        </div>
     );
}
 
export default Home;
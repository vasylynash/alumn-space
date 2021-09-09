import React from 'react';
import Navbar from '../components/nav/Navbar'
import Post from '../components/posts/Post';
import SearchPost from '../components/posts/SearchPost';
import SearchProvider from '../utils/SearchContext';



const Home = () => {
    
    return ( 
        <div>
            <Navbar/>
            <SearchProvider>
            <SearchPost/>
            <Post/>
            </SearchProvider>
        </div>
     );
}
 
export default Home;
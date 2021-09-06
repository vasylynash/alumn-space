import React from 'react';
import Navbar from '../components/nav/Navbar'
import Post from '../components/posts/Post';
import SearchPost from '../components/posts/SearchPost';



const Home = () => {

    
    return ( 
        <div>
            <Navbar/>
            <SearchPost/>
            <Post/>
        </div>
     );
}
 
export default Home;
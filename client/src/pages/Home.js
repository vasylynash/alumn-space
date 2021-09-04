import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import SearchPost from '../components/SearchPost';
import Sidebar from '../components/Sidebar';


const Home = () => {

    
    return ( 
        <div>
            <Navbar/>
            <SearchPost/>
        </div>
     );
}
 
export default Home;
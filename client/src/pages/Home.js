import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import GlobalStyle from './global.style';


const Home = () => {

    
    return ( 
        <div>
            <GlobalStyle/>
            <Header />
            
            <Sidebar />
        </div>
     );
}
 
export default Home;
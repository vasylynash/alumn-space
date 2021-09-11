import React from 'react';
import Navbar from '../components/nav/Navbar'
import Post from '../components/posts/Post';
import SearchPost from '../components/posts/SearchPost';
import SearchProvider from '../utils/SearchContext';
import { useReducer } from 'react';
import { reducer } from '../utils/reducers';
import { useSearch } from '../utils/SearchContext';
import { UPDATE_INPUT } from '../utils/actions';




const Home = () => {
    const initialState = useSearch();
    const [state, dispatch] = useReducer(reducer, initialState);
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
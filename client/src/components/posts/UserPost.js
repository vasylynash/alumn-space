import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import  SearchProvider  from '../../utils/SearchContext';
import { Link } from 'react-router-dom';
import { Card } from '../posts/Post';

const UserPost = () => {
   
    return (
        <>
        <Link to='edit-post' style={{textDecoration: 'none', color:'black'}}>
        <VerticalDiv>
        <SearchProvider>
        <Card>
            <div className='title'>
                <h5></h5>
            </div>
            <div className='left'>
                <p className='author'>By:</p>
                <p className='category'></p>
                <p className='label'></p>
                <button><i className="fas fa-heart"></i></button>
            </div>
            <div className='right'>
                <p className='date'></p>
                <div className='bodyContainer'>
                    <p className='body'></p>
                </div>
            </div>
        </Card>
        </SearchProvider>
        </VerticalDiv>
        </Link>
        </>
    );
};

export default UserPost;
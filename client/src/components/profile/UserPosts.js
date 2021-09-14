import React from 'react';
import { QUERY_ALL_POSTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import UserPost from '../posts/UserPost';

function UserPosts() {
    console.log('userposts')
    const { loading, error, data } = useQuery(QUERY_ALL_POSTS);
    const posts = data?.posts || [];

    return (
        <>
            <h1 style={{fontSize:'25px', margin:'0', color:'#51BBB9'}}>My posts</h1>
            <p style={{fontSize:'12px', color:'grey'}}>Edit or delete your posts</p>
            <UserPost />
        </>
    );
};

export default UserPosts;
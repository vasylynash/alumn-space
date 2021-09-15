import React from 'react';
import { QUERY_ALL_POSTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import UserPost from '../posts/UserPost';
import Auth from '../../utils/auth'; 
import Post from '../posts/Post';

function UserPosts() {
    let myId = Auth.getProfile().data._id;
    let myPosts = [];
    const { loading, error, data } = useQuery(QUERY_ALL_POSTS);
    const { posts } = data || [];

    if (loading) {
        return <div>Loading...</div>;
      }

    posts.map(post =>{
        if (post.author._id === myId){
            myPosts.push(post)
        }
    })

    let myPostsReversed =[...myPosts].reverse()
    return (
        <>
            <h1 style={{fontSize:'25px', margin:'0', color:'#51BBB9'}}>My posts</h1>
            <p style={{fontSize:'12px', color:'grey'}}>Edit or delete your posts</p>
            {myPostsReversed.map((post) => {
                return <UserPost key={post._id} post={post}/>
            })
        }
        </>
    );
};

export default UserPosts;
import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import  SearchProvider  from '../../utils/SearchContext';
import { Link } from 'react-router-dom';
import { Card } from '../posts/Post';

const UserPost = ({post}) => {
console.log(post)
    return (
        <>
        <Link to={`/edit-post/${post._id}`} style={{textDecoration: 'none', color:'black'}}>
        <VerticalDiv>
        <Card>
            <div className='title'>
                <h5>{post.title}</h5>
            </div>
            <div className='left'>
                <p className='author'>By: {post.author.username}</p>
                <p className='category'>{post.category}</p>
                <p className='label'>{post.label}</p>
                <div className='likeContainer'><i className='fas fa-heart'><p style={{fontFamily:'Montserrat, san-serif'}}>{post.totalLikes}</p></i><i className="fas fa-comment comment"><p style={{fontFamily:'Montserrat, san-serif'}}>{post.comments.length}</p></i>
              </div>
            </div>
            <div className='right'>
                <p className='date'>{post.dateCreated}</p>
                <div className='bodyContainer'>
                    <p className='body'>{post.body}</p>
                </div>
            </div>
        </Card>
        </VerticalDiv>
        </Link>
        </>
    );
};

export default UserPost;
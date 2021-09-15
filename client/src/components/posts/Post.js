import React from 'react';
import { VerticalDiv } from '../../pages/Landing';
import  SearchProvider  from '../../utils/SearchContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Auth from '../../utils/auth';

export const Card = styled.div`
    display: flex;
    height: 80px;
    width: 80vw;
    background-color: #F5F5F5;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,30%);
    margin: 0.5rem 0;
    transition: ease-in-out 0.3s;
    border:solid 1px rgba(0,0,0,0%);

    @media (min-width: 768px) {
        height: 120px;
        width: 80vw;
        max-width: 1000px;
    }

    .comment {
        color: #51BBB9;
    }

    &:hover {
        transform: scale(1.02);
    }
    
    &:active {
        border:solid 1px #FF8985;
    }

    .title {
        position: absolute;
        height: 30px;
        width: 50%;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
    }

    h5 {
        margin:0;
        font-size: 12px;

        @media (min-width: 768px) {
            font-size: 20px;
        }
    }

    .date {
        font-size: 10px;
        font-weight: lighter;

    }

    .right {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        flex-direction: column;
        width: 70%;
        padding-right: 0.5rem;
        overflow: hidden;
    }

    .left {
        width: 35%;
        height: 60px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        @media (min-width: 768px) {
            height: 110px;
        }

        p {
            font-size: 10px;
            margin: 0;
            margin-left: 0.5rem;
            color: #707070;

            @media (min-width: 768px) {
                font-size: 12px;
            }
        }

        .category {
            font-weight: bold;
            color:#51BBB9;
        }

        .label {
            font-weight: bold;
            color:#FF8985; 
        }

        .likeContainer {
            
            i {
                margin: 0;
                margin-left: 0.5rem;
                display: inline-flex;
                flex-direction: row;
                
                p {
                    margin-left: 0.2rem;
                }
            }
        }
    }

    .body {
        font-size: 12px;
    }

    button {
        border: none;
        background-color:#F5F5F5;
        text-align: start;
    }

    i {
        font-size: 10px;
        color: red;
        transition: ease-in-out 0.3s;
    }

    .bodyContainer {
        min-width: 50vw;
        min-height: 5rem; 

        p {
            margin: 0;
        }
    }
`

const Post = ({post}) => {
    console.log(post);
    return (
        <>
        <Link to={`/post/${post._id}`} style={{textDecoration: 'none', color:'black'}}>
        <VerticalDiv>
        <SearchProvider>
        <Card>
            <div className='title'>
                <h5>{post.title}</h5>
            </div>
            <div className='left'>
                <p className='author'>By: {post.author.username}</p>
                <p className='category'>{post.category}</p>
                <p className='label'>{post.label}</p>
                <div className='likeContainer'><i className={post.likes.includes(Auth.getProfile().data._id)?'fas fa-heart':'fas fa-heart-broken'}><p style={{fontFamily:'Montserrat, san-serif'}}>{post.totalLikes}</p></i><i className="fas fa-comment comment"><p style={{fontFamily:'Montserrat, san-serif'}}>{post.comments.length}</p></i>
                </div>
            </div>
            <div className='right'>
                <p className='date'>{post.dateCreated}</p>
                <div className='bodyContainer'>
                    <p className='body'>{post.body}</p>
                </div>
            </div>
        </Card>
        </SearchProvider>
        </VerticalDiv>
        </Link>
        </>
    );
};

export default Post;

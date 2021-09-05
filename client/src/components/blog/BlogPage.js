import React from 'react'
import { VerticalDiv } from '../../pages/Landing'
import Navbar from '../nav/Navbar'
import styled from 'styled-components'
import ContentContainer from './Content'


const BlogPost = styled.div`

    .author {
        color: #707070;
        font-size: 12px;
    }

    .category {
        font-size: 15px;
        color:#51BBB9;
    }

    .label {
        font-size: 15px;
        color:#FF8985;
    }

    p {
        margin: 0.1rem 0;
    }
`

function BlogPage() {
    return (
        <>
        <Navbar/>
        <BlogPost>
            <VerticalDiv>
                <h1 style={{fontSize:'39px', margin:'0'}}>Welcome</h1>
                <p className='author'>By: Dmitriy Babich</p>
                <p className='category'>#FullStackFlex</p>
                <p className='label'>help</p>
                <ContentContainer/>
            </VerticalDiv>
        </BlogPost>
        </>
    )
}

export default BlogPage

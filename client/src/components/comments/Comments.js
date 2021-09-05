import React from 'react'
import { VerticalDiv } from '../../pages/Landing'
import GlobalStyle from '../global.style'
import Navbar from '../nav/Navbar'
import { Line, SearchBar, SearchBtn, SearchIcon, SearchInput } from '../posts/SearchPost'
import Comment from '../comments/UserComment'
import { BackArrow } from '../icons.styles'
import { Link } from 'react-router-dom'

function Comments() {
    return (
        <>
        <GlobalStyle/>
        <Navbar/>
        <Link to='/post'>
            <BackArrow className="fas fa-arrow-left" top='65px' left='15px'></BackArrow>
        </Link>
            <SearchBar>
                <SearchIcon className='far fa-comment-alt'/>
                <SearchInput placeholder='Add Comment'/>
                <SearchBtn>Comment</SearchBtn>
            </SearchBar>
            <Line/>
            <VerticalDiv>
                <h1 style={{fontSize:'39px', margin:'0'}}>Comments</h1>
                <Line/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </VerticalDiv>
        </>
    )
}

export default Comments

import React from 'react'
import styled from 'styled-components'

const Comment = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    font-size: 12px;
    margin: 1rem 0;
    
    p {
        margin: 0;
    }

    span {
        font-weight: bold;
        font-size: 15px;
        color:#51BBB9;
        margin-right: 10px;
        margin-left: 0;
    }

    .date {
        font-weight: lighter;
        color:#707070;
    }
`

const IconBtn = styled.button`
    background-color: white;
    border: none;
    color: #d1d1d1;
    transition: ease-in-out 0.3s;

    &:hover {
        color: #FF8985;
        cursor: pointer;
    }

    i {
        font-size: 18px;
        margin:0;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TrashContainer = styled.div`
    width: 50px;
`

const UserComment= ({comment}) => {
    return (
        <Comment>
            <TrashContainer>
                <IconBtn><i className="fas fa-trash"></i></IconBtn>
            </TrashContainer>
            <TextContainer>
                <p><span>{comment.author}</span>{comment.commentText}</p>
                <p className='date'>{comment.dateCreated}</p>
            </TextContainer>
        </Comment>
    )
}

export default UserComment

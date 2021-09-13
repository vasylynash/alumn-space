import React from 'react'
import styled from 'styled-components'

const Comment = styled.div`
    width: 80%;
    height: fit-content;
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
    }

    .date {
        margin: 0;
        font-weight: lighter;
        color:#707070;
    }
`

const UserComment= ({comment}) => {
    return (
        <Comment>
            <p><span>{comment.author}</span>{comment.commentText}</p>
            <p className='date'>{comment.dateCreated}</p>
        </Comment>
    )
}

export default UserComment

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

function UserComment() {
    return (
        <Comment>
            <p><span>Dima:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit ex enim dolorum odit, nemo praesentium qui neque magnam sed at molestias debitis veniam nulla amet harum minima? Laboriosam, corporis.</p>
            <p className='date'>01/02/2021</p>
        </Comment>
    )
}

export default UserComment

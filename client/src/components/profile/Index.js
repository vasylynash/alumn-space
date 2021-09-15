import React from 'react';
import Info from './Info';
import Security from './Security';
import UserPosts from './UserPosts';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';

function Index(props) {

    const { section } = props
    let component;
    switch(section) {
        case 'info':
            component = <Info/>
            break
        case 'security':
            component = <Security/>
            break
        case 'myPost':
            component = <UserPosts/>
            break
            default:
                component = <UserPosts/>
    }
    return component;
}

export default Index;

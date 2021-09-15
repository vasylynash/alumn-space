import React from 'react';
import Info from './Info';
import Security from './Security';
import UserPosts from './UserPosts';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';

function Index(props) {
    console.log('index')

    const user = Auth.getProfile().data;
    console.log('user id ->   ', user._id);

    const { loading, err, data } = useQuery(QUERY_SINGLE_USER, {
        variables: { id: user._id },
        skip: true
        // variables: { id: '61400ff61f3834d48cc966d0' }
    })
    console.log('data ->   ', data)

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

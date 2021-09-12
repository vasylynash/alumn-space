import React from 'react';
import Info from './Info';
import Security from './Security';
import UserPost from './UserPost';

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
            component = <UserPost/>
            break
            default:
                // component = <UserPost/>
                component = <Info/>
    }
    return component;
}

export default Index;

import React from 'react'
import Info from './Info'
import Security from './Security';
import Groups from './Groups'

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
            default:
                component = <Info/>
    }
    return component;
}

export default Index

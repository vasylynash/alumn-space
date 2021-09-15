import React, { useState, useContext } from 'react';
import Auth from './auth';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from './queries';

export const UserContext = React.createContext();
export const useUser = () => useContext(UserContext)

export default function UserProvider({ children })  {

    const user = Auth.getProfile().data;
    console.log('UserContext user id ->   ', user._id);

    const { loading, err, data } = useQuery(QUERY_SINGLE_USER, {
        variables: { id: user._id },
    })
    console.log('User Context data ->   ', data)

    const [currentUser, setCurrentUser] = useState({
        // firstName: data.user.firstName,
        // lastName: data.user.lastName,
        // email: data.user.email,
        // className: data.user.className, 
        // bio: data.user.bio,
        // linkedIn: data.user.linkedIn,
        // gitHub: data.user.gitHub,
        firstName: '',
        lastName: '',
        email: '',
        className: '', 
        bio: '',
        linkedIn: '',
        gitHub: '',
    });

    return (
        // <UserContext.Provider value={{ currentUser: currentUser }} {...props} />
        <UserContext.Provider value={{ currentUser }} >
         {children}
        </UserContext.Provider>
    );
};

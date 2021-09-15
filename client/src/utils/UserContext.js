import React, { useState, useContext } from 'react';
import Auth from './auth';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from './queries';

export const UserContext = React.createContext();
export const useUser = () => useContext(UserContext)

export default function UserProvider({ children })  {

    const user = Auth.getProfile().data;

    const { loading, err, data } = useQuery(QUERY_SINGLE_USER, {
        variables: { id: user._id },
    })

    const [currentUser, setCurrentUser] = useState({
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
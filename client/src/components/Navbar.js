import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    {/* add logout function here when it is created */}
                    <p>Logout</p>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/addpost">Add Post</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;
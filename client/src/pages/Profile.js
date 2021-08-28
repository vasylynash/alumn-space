import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Profile = () => {
    return ( 
        <div>
            <p>PROFILE</p>
            <Link to="/home">
                <button>
                    Homepage
                </button>
            </Link>
        </div>
     );
}
 
export default Profile;
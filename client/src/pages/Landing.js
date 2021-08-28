import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return ( 
        <div className="landing"> 
            <h1>Alumn Space</h1>
            <p> A place for coding bootcamp Alumni to connect with each other and share ideas.</p>
            <Link to="/login">
                <button>
                    Log In
                </button>
            </Link>
            <Link to="/signup">
                <button>
                    Sign Up
                </button>
            </Link>
        </div>
     );
}
 
export default Landing;

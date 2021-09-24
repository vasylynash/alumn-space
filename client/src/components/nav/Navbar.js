import React from 'react';
import GlobalStyle from '../global.style';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../../utils/auth';
import Logo from '../../images/logo.png';
import styled from 'styled-components';

const NavContainer = styled.div`

    .bc {
        z-index: 25;
        background-color:rgba(224,224,224,0.85);
    }

    .active {
         p {
            color: #51BBB9;
         }
    }

    .nav-link {
        height: min-content;
        margin: 0 10px;

        p {
            margin: 0;
            padding: 0;
            transition: ease-in-out 0.3s;
        }

        p:hover {
            color: #FF8985;
        }
    }
`

const Navbar = () => {
    return ( 
        <NavContainer>
        <GlobalStyle/>
        <nav className="navbar navbar-expand-lg bc navbar-light">
        <div className="container-fluid">
            <div className="navbar-brand" style={{display:'flex', alignItems:'center'}}>
                <img src={Logo} alt="logo" width="35" height="35" className="d-inline-block align-text-top"/>
                <span style={{fontFamily:'TimesNewRoman', color:'grey'}}>AlumnSpace</span>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
                <NavLink className="nav-link" activeClassName='active' exact to='/Home'>
                    <p>Home</p>
                </NavLink>
                <NavLink className="nav-link" activeClassName='active' exact to='/AddPost'>
                    <p>Create post</p>
                </NavLink>
                <NavLink className="nav-link" activeClassName='active' exact to='/Profile'>
                    <p>Profile</p>
                </NavLink>
                <Link className="nav-link" activeClassName='active' exact to='/' onClick={Auth.logout}>
                    <p>Logout</p>
                </Link>
            </div>
            </div>
        </div>
        </nav>
        </NavContainer>
    );
};
 
export default Navbar;
// libraries imports
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from '../../../assets/header-logo.svg';

// local imports
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Icon width="130" height="32" />                
            </div>
            <nav>
                <button className='button is-rounded is-primary'>New Advert</button>
                <button className='button is-rounded is-danger'>Log out</button>
            </nav>
        </header>
    );
}

export default Header;
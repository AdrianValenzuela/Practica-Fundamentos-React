// libraries imports
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from '../../../assets/header-logo.svg';

// local imports
import './Header.css';
import { Button } from '../../shared';
import { AuthButton } from '../../auth';

function Header({isLogged}) {
    return (
        <header className='header'>
            <div className='logo'>
                <Icon width="130" height="32" />                
            </div>
            <nav>
                <Button className={'button is-primary is-rounded'} text={'New Advert'} />
                <AuthButton isLogged={false} />
            </nav>
        </header>
    );
}

export default Header;
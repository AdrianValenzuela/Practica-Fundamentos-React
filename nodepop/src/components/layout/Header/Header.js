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
                {/* <Button className={'button is-danger is-rounded'} text={'Log out'} /> */}
                <AuthButton isLogged={true} />
            </nav>
        </header>
    );
}

export default Header;
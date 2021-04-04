// libraries imports
import React from 'react';

// local imports
import LoginForm from './LoginForm.js';
import { ReactComponent as Icon } from '../../../assets/header-logo.svg';
import './LoginPage.css';

function LoginPage() {
    return (
        <div className='loginPage'>
            <Icon width="170" height="42" />
            <LoginForm />
        </div>
    );
}

export default LoginPage;
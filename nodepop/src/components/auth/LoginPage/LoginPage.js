// libraries imports
import React from 'react';

// local imports
import LoginForm from './LoginForm.js';
import { ReactComponent as Icon } from '../../../assets/header-logo.svg';
import './LoginPage.css';
import authService from '../../../api/auth.js';

function LoginPage({onLogin}) {

    const handleSubmit = async credentials => {
        try {
            await authService.login(credentials);
            onLogin();
        } catch (error) {
            
        }            
    };

    return (
        <div className='loginPage'>
            <Icon width="170" height="42" />
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default LoginPage;
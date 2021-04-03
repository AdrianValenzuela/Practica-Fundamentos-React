// libraries imports
import React from 'react';

// local imports
import LoginForm from './LoginForm.js';
import './LoginPage.css';

function LoginPage() {
    return (
        <div className='loginPage'>
            <h1 className='title'>Log in to Nodepop</h1>
            <LoginForm />
        </div>
    );
}

export default LoginPage;
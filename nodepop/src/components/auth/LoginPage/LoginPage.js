// libraries imports
import React from 'react';

// local imports
import LoginForm from './LoginForm.js';
import { ReactComponent as Icon } from '../../../assets/header-logo.svg';
import './LoginPage.css';
import authService from '../../../api/auth.js';
import { ErrorMessage } from '../../shared';

function LoginPage({onLogin}) {

    const [error, setError] = React.useState(null);
    const handleSubmit = async credentials => {
        try {
            await authService.login(credentials);
            onLogin();
        } catch (error) {
            setError(error.message);
        }
    };

    const [hiddenError, setHiddenError] = React.useState(false);
    const handleError = () => {
        setHiddenError(true);
    }

    return (
        <div className='loginPage'>
            <Icon width="170" height="42" />
            <LoginForm onSubmit={handleSubmit}/>
            {error && <ErrorMessage className={hiddenError && 'hidden'} message={error} onClick={handleError}/>}
        </div>
    );
}

export default LoginPage;
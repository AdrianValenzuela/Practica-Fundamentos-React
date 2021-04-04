// libraries imports
import React from 'react';

// local imports
import LoginForm from './LoginForm.js';
import { ReactComponent as Icon } from '../../../assets/header-logo.svg';
import './LoginPage.css';
import authService from '../../../api/auth.js';
import { ErrorMessage } from '../../shared';

function LoginPage({onLogin}) {

    const [isLoading, setIsLoading] = React.useState(false);
    
    const [error, setError] = React.useState(null);
    const handleSubmit = async credentials => {
        try {
            setIsLoading(true);
            await authService.login(credentials);
            onLogin();
        } catch (error) {
            setError(error.message);
            setHiddenError(false); // ya que si lo cerramos una vez tiene que volver a salir en caso de otro error
        } finally {
            setIsLoading(false);
        }
    };

    const [hiddenError, setHiddenError] = React.useState(false);
    const handleError = () => {
        setHiddenError(true);
    }

    return (
        <div className='loginPage'>
            <Icon width="170" height="42" />
            <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>
            {error && <ErrorMessage className={hiddenError && 'hidden'} message={error} onClick={handleError}/>}
        </div>
    );
}

export default LoginPage;
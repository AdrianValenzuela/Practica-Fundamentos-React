// libraries imports
import React from 'react';

// local imports
import { Button, FormField } from '../../shared';

function LoginForm({ onSubmit, isLoading }) {
 
    const [credentials, setCredentials] = React.useState({ email: '', password: '' });
    const handleFormFieldChange = event => {
        setCredentials(credentials => {
            return {
                ...credentials,
                [event.target.name]: event.target.value
            };
        });
    };

    const handleSubmitLoginForm = event => {
        event.preventDefault();
        onSubmit(credentials);
    };

    return (
        <form onSubmit={handleSubmitLoginForm}>
            <FormField 
                className={'input is-primary'} 
                type={'text'} 
                name={'email'}
                placeholder={'email'}
                value={credentials.email}
                onChange={handleFormFieldChange}
            />
            <FormField
                className={'input is-primary'} 
                type={'password'} 
                name={'password'}
                placeholder={'password'}
                value={credentials.password}
                onChange={handleFormFieldChange}
            />
            <Button 
                className={'button is-primary is-rounded'} 
                text={'Log in'}
                disabled={isLoading || !credentials.email || !credentials.password}
            />
        </form>
    );
}

export default LoginForm;
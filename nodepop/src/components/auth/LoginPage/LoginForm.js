// libraries imports
import React from 'react';

// local imports
import { Button, FormField } from '../../shared';

function LoginForm() {
 
    const [credentials, setCredentials] = React.useState({ email: '', password: '' });
    const handleFormFieldChange = event => {
        setCredentials(credentials => {
            return {
                ...credentials,
                [event.target.name]: event.target.value
            };
        });
    };

    return (
        <form>
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
            />
        </form>
    );
}

export default LoginForm;
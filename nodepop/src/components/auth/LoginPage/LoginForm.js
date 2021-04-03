// libraries imports
import React from 'react';

// local imports
import { Button, FormField } from '../../shared';

function LoginForm() {
    return (
        <form>
            <FormField className={'input is-primary'} inputType={'text'} placeholder={'email'}/>
            <FormField className={'input is-primary'} inputType={'password'} placeholder={'password'}/>
            <Button className={'button is-primary is-rounded'} text={'Log in'} />
        </form>
    );
}

export default LoginForm;
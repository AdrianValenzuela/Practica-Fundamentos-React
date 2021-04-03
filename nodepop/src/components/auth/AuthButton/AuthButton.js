// libraries imports
import React from 'react';
import { Link } from 'react-router-dom';

// local imports
import { Button } from '../../shared';

function AuthButton({isLogged}) {

    const isLoggedProps = {
        text: 'Log out'
    };

    const notLoggedProps = {
        // as: Link,
        // to: '/login',
        text: 'Log in'
    }

    const props = isLogged ? isLoggedProps : notLoggedProps;


    if (isLogged) {
        return <Button className={'button is-danger is-rounded'} {...props} />
    } else {
        return <Button className={'button is-info is-rounded'} {...props} />
    }
}

export default AuthButton;
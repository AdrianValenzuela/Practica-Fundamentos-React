// libraries imports
import React from 'react';
import { Link } from 'react-router-dom';

// local imports
import { Button } from '../../shared';

function AuthButton({isLogged}) {
    if (isLogged) {
        return <Button className={'button is-danger is-rounded'} text={'Log out'} />
    } else {
        return <Button className={'button is-rounded'} text={'Log in'} />
    }
}

export default AuthButton;
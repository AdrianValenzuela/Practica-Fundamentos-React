// libraries imports
import React from 'react';
import classNames from 'classnames';

// local imports
import './ErrorMessage.css';

function ErrorMessage({className, message, onClick}) {
    return (
        <div 
            className={classNames(
                'notification is-danger is-light',
                className
            )}
        >
            <button className='delete' onClick={onClick}/>
            {message}
        </div>
    );
}

export default ErrorMessage;
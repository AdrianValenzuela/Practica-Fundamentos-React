// libraries imports
import React from 'react';
import classNames from 'classnames';

// local imports
import './ErrorMessage.css';

function ErrorMessage({className, message}) {
    return (
        <div 
            className={classNames(
                'notification is-danger is-light',
                className
            )}
        >
            <button className='delete' />
            {message}                        
        </div>
    );
}

export default ErrorMessage;
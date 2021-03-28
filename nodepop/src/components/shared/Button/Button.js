// libraries imports
import React from 'react';
import classNames from 'classnames';

// local imports
import './Button.css';

function Button({className, text}) {
    return (
        <button 
            className={
                classNames(
                    className
                )
            }
        >
            {text}
        </button>
    );
}

export default Button;
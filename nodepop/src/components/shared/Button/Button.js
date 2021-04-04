// libraries imports
import React from 'react';
import classNames from 'classnames';

// local imports
import './Button.css';

function Button({ className, text, ...props }) {
    return (
        <button 
            className={className}
            {...props}
        >
            {text}
        </button>
    );
}

export default Button;
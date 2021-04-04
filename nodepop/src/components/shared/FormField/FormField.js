// libraries imports
import React from 'react';
import classNames from 'classnames';

function FormField({className, ...props}) {
    return (
        <input
            className = {className}
            {...props}
        />
    );
}

export default FormField;
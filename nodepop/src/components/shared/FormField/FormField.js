// libraries imports
import React from 'react';
import classNames from 'classnames';

function FormField({className, inputType, placeholder}) {
    return (
        <input
            className = {className}
            type = {inputType}
            placeholder = {placeholder}
        />
    );
}

export default FormField;
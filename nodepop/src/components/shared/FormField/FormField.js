// libraries imports
import React from 'react';
import classNames from 'classnames';

function FormField({className, inputType, placeholder}) {
    return (
        // <input 
        //     class="input is-primary" 
        //     type="text" 
        //     placeholder="Primary input"
        // />
        <input
            className = {
                classNames(
                    className
                )
            }
            type = {inputType}
            placeholder = {placeholder}
        />
    );
}

export default FormField;
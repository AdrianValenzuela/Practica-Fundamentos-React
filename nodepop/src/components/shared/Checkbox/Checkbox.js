// libraries import
import React from 'react';

function Checkbox({ className, text, ...props }) {

    const [name, disabled, checked, onChange] = Object.values({...props});

    return (
        <label 
            className={className}
            disabled={disabled}
        >
            <input 
                type="checkbox"
                disabled={disabled}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            {text}
        </label>
    );
}

export default Checkbox;
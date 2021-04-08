// libraries imports
import React from 'react';

// local imports
import './Select.css';

function Select({ tags }) {
    return (
        <div className='select-tags'>
            <label>Choose a car: </label>
            <select name="tags" multiple>
                {tags.map(tag => { return  <option value={tag}>{tag}</option>})}
            </select>
        </div>
    );
}

export default Select;
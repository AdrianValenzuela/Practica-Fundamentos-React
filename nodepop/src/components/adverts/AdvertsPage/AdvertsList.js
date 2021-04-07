// libraries imports
import React from 'react';
import { Link } from 'react-router-dom';

// local imports
import Advert from './Advert.js';

function AdvertsList({ adverts }) {

    return (
        <div className='adverts-list'>
            {adverts.map(advert => {
                return (
                    <Link to='/404'>
                        <Advert {...advert} />
                    </Link>
                );
            })}
        </div>
    );
}

export default AdvertsList;
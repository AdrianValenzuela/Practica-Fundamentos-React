// libraries imports
import React from 'react';

function Advert({ name, price, sale, photo, tags }) {

    return (
            <div className='card'>
                <div className='card-content'>
                    <div className='card-content-header'>
                        <span className='title advert-name'>{name}</span>
                    </div>
                    <div className='card-content-info'>
                        <span className='advert-price'>{`Price ${price}`}</span>
                        <span className='advert-sale'>{`Sale ${sale}`}</span>
                        <span className='advert-tags'>{`Tags ${tags}`}</span>
                    </div>
                </div>
            </div>
    );
}

export default Advert;
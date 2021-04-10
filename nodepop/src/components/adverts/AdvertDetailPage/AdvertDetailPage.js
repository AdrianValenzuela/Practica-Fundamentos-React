// libraries imports
import React from 'react';
import { Redirect } from 'react-router-dom';

// local imports
import advertsService from '../../../api/adverts.js';
import { Layout } from '../../layout';

function AdvertDetailPage({ ...props }) {
    const [advert, setAdvert] = React.useState(null)
    const [error, setError] = React.useState(null);

    React.useEffect(() =>{
        const { match } = {...props};
        advertsService.getAdvertDetail(match.params.id).then(advert => {
            setAdvert(advert);
        }).catch(error => {
            setError(error);
        });
    }, []);

    if (error) {
        return <Redirect to='/404' />
    }

    return (
        <Layout { ...props }>
            {advert && <AdvertDetails advert={advert} />}
        </Layout>
        
    );
}

function AdvertDetails({ advert }) {
    return (
        <div className='details'>
            <h1 className='title'>{advert.name}</h1>
            <div className='advert-details'>
                <img src={advert.photo} alt={advert.name} />
                <div className='advert'>
                    <span>{`Price: ${advert.price}`}</span>
                    <span>{`Status: ${advert.sale ? 'Sale' : 'Purchase'}`}</span>
                    <span>{`Tags: ${advert.tags}`}</span>
                </div>
            </div>
        </div>
    );
}

export default AdvertDetailPage;
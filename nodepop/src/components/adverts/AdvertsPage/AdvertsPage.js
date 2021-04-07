// libraries imports
import React from 'react';

// local imports
import advertsService from '../../../api/adverts.js'; 
import { Layout } from '../../layout';
import { Button } from '../../shared';
import AdvertsList from './AdvertsList.js';

function EmptyList() {
    return (
        <div>
            <p>Be the first seller!</p>
            <Button className={'button is-primary is-rounded'} text={'New Advert'} />
        </div>
    );
}

function AdvertsPage({ ...props }) {

    const [adverts, setAdverts] = React.useState([]);

    React.useEffect(() => {
        advertsService.getAdverts().then(adverts => {
            // ordenamos de más nuevo a más viejo
            return adverts.sort((advert1, advert2) => {
                return advert1.createdAt > advert2.createdAt ? -1 : 0;
            });
        }).then(setAdverts);
    }, []);

    return (
        <div>
            <Layout {...props} >
                <div className='ads'>
                    { adverts.length ? <AdvertsList adverts={adverts} />: <EmptyList /> }
                </div>                
            </Layout>
        </div>
    );
}

export default AdvertsPage;
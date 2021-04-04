// libraries imports
import React from 'react';

// local imports
import { Layout } from '../../layout';
import { Button } from '../../shared';

function EmptyList() {
    return (
        <div>
            <p>Be the first seller!</p>
            <Button className={'button is-primary is-rounded'} text={'New Advert'} />
        </div>
    );
}

function AdvertsPage({ ...props }) {

    return (
        <div>
            <Layout {...props} >
                { <EmptyList /> }
            </Layout>
        </div>
    );
}

export default AdvertsPage;
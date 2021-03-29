// local imports
import client from './client.js';

const advertsBaseURL = '/api/v1/adverts';

const advertsService = {
    getAdverts: function() {
        return client.get(advertsBaseURL);
    },

    getAdvertDetail: function(id) {
        const url = `${advertsBaseURL}/${id}`;
        return client.get(url);
    },

    getAdvertsTags: function() {
        const url = `${advertsBaseURL}/tags`;
        return client.get(url);
    },

    createAdvert: function(advert) {
        return client.post(advertsBaseURL, advert);
    },

    deleteAdvert: function(id) {
        const url = `${advertsBaseURL}/${id}`;
        return client.delete(url);
    }
};

export default advertsService;
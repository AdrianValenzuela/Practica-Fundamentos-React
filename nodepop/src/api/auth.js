// local imports
import client, { configureClient } from './client.js';

const authService = {
    login: function(credentials) {
        return client.post('/auth/login', credentials).then(({ accessToken }) => {
            configureClient(accessToken);
        });
    }
}

export default authService;
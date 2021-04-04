// local imports
import client from './client.js';

const authService = {
    login: function(credentials) {
        return client.post('/auth/login', credentials).then(({ accessToken }) => {
            // pending
        });
    }
}

export default authService;
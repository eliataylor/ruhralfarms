import axios from 'axios';
const Config = {
    'api' : {
        timeout : process.env.NODE_ENV === 'production' ? 3000 : 0,
        base: 'https://portal.ruhralfarms.com'
//    base : 'http://ruhralfarms.bukach.me',
//    base : 'https://localhost.ruhralfarms.com',
    }
}
class API {

    constructor() {
        axios.defaults.headers.common['timeout'] = Config.api.timeout; // for debugging with php breakpoints
        axios.defaults.headers.common['Accept'] = 'application/json';
        // axios.defaults.headers.common['Access-Control-Max-Age'] = -1;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        this.requester = axios.create({
            baseURL: Config.api.base,
            timeout: Config.api.timeout,
            params: {'_format': 'json'}
        });
    }

    Get (path) {
        return this.requester.get(path);
    }

    Post (path, data) {
        console.log('POST to "' + path + '" with ', data);
        return this.requester.post(path, data);
    }

}

export default new API(); // singleton

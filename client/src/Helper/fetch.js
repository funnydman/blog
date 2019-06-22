import axios from 'axios';

export default function dispatchFetch(fetchConfig) {
    let resFetchConfig = {
        url: fetchConfig.url,
        method: fetchConfig.method,
        data: fetchConfig.data
    };
    return axios(resFetchConfig).then(res => {
        if (res.status === fetchConfig.successStatusCode) {
            fetchConfig.successCallback(res);
        } else {
            if (fetchConfig.errorCallback) {
                fetchConfig.errorCallback(res);
            }
        }
    });
}

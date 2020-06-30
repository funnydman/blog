import axios from 'axios';

const dispatchFetch = async fetchConfig => {
    let resFetchConfig = {
        url: fetchConfig.url,
        method: fetchConfig.method,
        data: fetchConfig.data
    };
    return await axios(resFetchConfig).then(res => {
        if (res.status === fetchConfig.successStatusCode) {
            fetchConfig.successCallback(res);
        } else {
            if (fetchConfig.errorCallback) {
                fetchConfig.errorCallback(res);
            }
        }
    });
};

export default dispatchFetch;

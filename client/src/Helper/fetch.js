export default function dispatchFetch(fetchConfig) {
    let resultFetchConfig = {
        method: fetchConfig.httpMethod
    };
    return fetch(fetchConfig.url, resultFetchConfig).then(response =>
        response
            .json()
            .then(data => ({
                data: data,
                status: response.status
            }))
            .then(res => {
                if (res.status === fetchConfig.successStatusCode) {
                    fetchConfig.successCallback(res);
                } else {
                    if (fetchConfig.errorCallback) {
                        fetchConfig.errorCallback(res);
                    }
                }
            })
    );
}

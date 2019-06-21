export default function getFetchData(url) {
    return fetch(url).then(response => response.json())
}


export function postFetchData(url, data) {
    let fetchOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    };
    return fetch(url, fetchOptions).then(res => res.json())
}
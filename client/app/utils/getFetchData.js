export default function getFetchData(url, method = 'GET') {
    return fetch(url, {method: method}).then(response => response.json())
}
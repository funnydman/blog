export default function getData(url, method = 'GET') {
    return fetch(url, {method: method}).then(response => response.json())
}


export function sendGetRequest (url, callBack) {
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(resJson) {
            return callBack(null,resJson)
        })
        .catch(function (error) {
            console.error('Error:', error)
        })
}
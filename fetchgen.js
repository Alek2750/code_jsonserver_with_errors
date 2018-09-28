const fetchBasic = (url, cb) => {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            cb(json);
        })
        .catch(function(error) {
            console.log('Error: ' + error);
        });
}
fetchBasic('http://localhost:3333/api/users', json => {
    console.log(json);
});
fetchBasic('http://localhost:3333/api/users/110', json => {
    console.log(json);
});